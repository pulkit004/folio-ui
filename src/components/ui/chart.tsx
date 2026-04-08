"use client";

import * as React from "react";
import {
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ResponsiveContainer,
} from "recharts";
import { cn } from "@/lib/utils";

// ---- Types ----

export type ChartConfig = Record<
  string,
  {
    label?: string;
    icon?: React.ComponentType;
    color?: string;
  }
>;

// ---- Context ----

type ChartContextProps = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

// ---- ChartContainer ----

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    config: ChartConfig;
    children: React.ComponentProps<typeof ResponsiveContainer>["children"];
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs font-sans",
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground",
          "[&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-line/20",
          "[&_.recharts-curve.recharts-tooltip-cursor]:stroke-line",
          "[&_.recharts-dot[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-layer]:outline-none",
          "[&_.recharts-sector[stroke='#fff']]:stroke-transparent",
          "[&_.recharts-sector]:outline-none",
          "[&_.recharts-surface]:outline-none",
          className
        )}
        style={
          {
            ...Object.fromEntries(
              Object.entries(config).map(([key, value]) => [
                `--color-${key}`,
                value.color,
              ])
            ),
          } as React.CSSProperties
        }
        {...props}
      >
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

// ---- ChartTooltip ----

const ChartTooltip = RechartsTooltip;

// ---- ChartTooltipContent ----

const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    active?: boolean;
    payload?: Array<{
      name: string;
      value: number;
      dataKey: string;
      color?: string;
      payload?: Record<string, unknown>;
    }>;
    label?: string;
    labelKey?: string;
    nameKey?: string;
    indicator?: "line" | "dot" | "dashed";
    hideLabel?: boolean;
    hideIndicator?: boolean;
  }
>(
  (
    {
      active,
      payload,
      className,
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelKey,
      nameKey,
    },
    ref
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "border-2 border-line bg-paper px-3 py-2 text-sm shadow-hard-sm",
          className
        )}
      >
        {!hideLabel && label && (
          <div className="mb-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {labelKey
              ? config[labelKey]?.label || label
              : label}
          </div>
        )}
        <div className="flex flex-col gap-1">
          {payload.map((item, index) => {
            const key = nameKey
              ? (item.payload?.[nameKey] as string) || item.name
              : item.dataKey || item.name;
            const itemConfig = config[key];

            return (
              <div
                key={index}
                className="flex items-center gap-2 font-sans text-foreground"
              >
                {!hideIndicator && (
                  <div
                    className={cn(
                      "shrink-0",
                      indicator === "dot" && "h-2.5 w-2.5",
                      indicator === "line" && "h-0.5 w-4",
                      indicator === "dashed" &&
                        "h-0.5 w-4 border-b-2 border-dashed"
                    )}
                    style={{
                      backgroundColor:
                        indicator !== "dashed"
                          ? item.color ||
                            itemConfig?.color ||
                            `var(--color-${key})`
                          : undefined,
                      borderColor:
                        indicator === "dashed"
                          ? item.color ||
                            itemConfig?.color ||
                            `var(--color-${key})`
                          : undefined,
                    }}
                  />
                )}
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {itemConfig?.label || key}
                </span>
                <span className="ml-auto tabular-nums">
                  {item.value.toLocaleString()}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltipContent";

// ---- ChartLegend ----

const ChartLegend = RechartsLegend;

// ---- ChartLegendContent ----

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div"> & {
    payload?: Array<{
      value: string;
      dataKey?: string;
      color?: string;
    }>;
    nameKey?: string;
    hideIcon?: boolean;
  }
>(({ className, payload, nameKey, hideIcon = false }, ref) => {
  const { config } = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center justify-center gap-4 pt-3",
        className
      )}
    >
      {payload.map((item) => {
        const key = nameKey
          ? (item.dataKey as string) || item.value
          : item.value;
        const itemConfig = config[key];

        return (
          <div
            key={item.value}
            className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest"
          >
            {!hideIcon && (
              <div
                className="h-2 w-2 shrink-0"
                style={{
                  backgroundColor:
                    item.color || itemConfig?.color || `var(--color-${key})`,
                }}
              />
            )}
            {itemConfig?.label || key}
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};
