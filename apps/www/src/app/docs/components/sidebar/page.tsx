"use client";

import { H1, H2, Lead, Overline, Caption } from "@/components/ui/typography";
import { Separator } from "@/components/ui/separator";
import { ComponentPreview, CodeBlock } from "@/components/docs/component-preview";
import { InstallBlock } from "@/components/docs/install-block";
import { Home, FileText, Settings, Users, BarChart3, BookOpen } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function SidebarDoc() {
  return (
    <div className="space-y-8">
      <div>
        <Overline>Components</Overline>
        <H1 className="mt-2">Sidebar</H1>
        <Lead className="mt-3 max-w-2xl">
          A collapsible sidebar layout with grouped navigation -- structured for
          editorial dashboards and content management interfaces.
        </Lead>
      </div>

      <InstallBlock name="sidebar" />

      <Separator />

      <div className="space-y-4">
        <H2>Basic Sidebar</H2>
        <ComponentPreview className="p-0">
          <SidebarProvider>
            <div className="flex h-[400px] w-full border-2 border-line">
              <Sidebar>
                <SidebarHeader>
                  <span className="font-serif text-lg">The Daily</span>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton isActive>
                            <Home className="h-4 w-4" />
                            Dashboard
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <FileText className="h-4 w-4" />
                            Articles
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <BarChart3 className="h-4 w-4" />
                            Analytics
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                  <SidebarGroup>
                    <SidebarGroupLabel>Editorial</SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <Users className="h-4 w-4" />
                            Contributors
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                          <SidebarMenuButton>
                            <BookOpen className="h-4 w-4" />
                            Style Guide
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Settings className="h-4 w-4" />
                        Settings
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </Sidebar>
              <div className="flex flex-1 flex-col">
                <div className="flex h-10 items-center gap-2 border-b-2 border-line px-4">
                  <SidebarTrigger />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Content Area</span>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <p className="text-sm text-muted-foreground">Main content goes here.</p>
                </div>
              </div>
            </div>
          </SidebarProvider>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <H2>Usage</H2>
        <CodeBlock filename="layout.tsx">{`import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar"

<SidebarProvider>
  <Sidebar>
    <SidebarHeader>
      <span className="font-serif text-lg">App Name</span>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Section</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive>
                Dashboard
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>...</SidebarFooter>
  </Sidebar>
  <main>
    <SidebarTrigger />
    {children}
  </main>
</SidebarProvider>`}</CodeBlock>
      </div>

      <div className="space-y-4">
        <H2>API Reference</H2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-line">
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Component</th>
                <th className="py-2 pr-4 text-left font-mono text-xs uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/20">
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarProvider</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Context provider managing open/close state. Accepts <code className="bg-muted px-1 font-mono text-xs">defaultOpen</code>.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">Sidebar</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Aside element with animated width transition</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarHeader</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Top section for branding or user info</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarContent</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Scrollable main body of the sidebar</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarFooter</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Bottom section for settings or actions</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarGroup</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Groups related menu items</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarGroupLabel</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Mono uppercase section label</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarMenuButton</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Interactive button with <code className="bg-muted px-1 font-mono text-xs">isActive</code> prop</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">SidebarTrigger</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Toggle button with PanelLeft icon</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-mono text-xs">useSidebar</td>
                <td className="py-2 pr-4 text-sm text-muted-foreground">Hook returning <code className="bg-muted px-1 font-mono text-xs">open</code>, <code className="bg-muted px-1 font-mono text-xs">setOpen</code>, <code className="bg-muted px-1 font-mono text-xs">toggleSidebar</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="space-y-2 border-l-4 border-accent-warm pl-4">
        <Caption>Design note</Caption>
        <p className="text-sm text-muted-foreground">
          The sidebar uses{" "}
          <code className="bg-muted px-1 font-mono text-xs">border-r-2 border-line bg-paper</code>{" "}
          for the editorial ink-ruled edge. Group labels follow the standard
          mono uppercase treatment. The width animates between 240px and 0 using
          CSS transitions for a smooth collapse.
        </p>
      </div>

      <Separator />

      <p className="text-sm text-muted-foreground">
        See also:{" "}
        <a href="/docs/components/resizable" className="text-link hover:text-accent-warm">Resizable</a>{" · "}
        <a href="/docs/components/sheet" className="text-link hover:text-accent-warm">Sheet</a>{" · "}
        <a href="/docs/components/navigation-menu" className="text-link hover:text-accent-warm">Navigation Menu</a>
      </p>
    </div>
  );
}
