"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: "📊",
    badge: null
  },
  {
    title: "Test Cases",
    href: "/test-cases",
    icon: "🧪",
    badge: "AI"
  },
  {
    title: "Datasets",
    href: "/datasets",
    icon: "📁",
    badge: "Smart"
  },
  {
    title: "Folder Structure",
    href: "/folders",
    icon: "🗂️",
    badge: "Auto"
  },
  {
    title: "Version Control",
    href: "/versions",
    icon: "🔄",
    badge: "Sync"
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: "📈",
    badge: null
  }
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "fixed left-0 top-0 h-full bg-card border-r transition-all duration-300 z-50",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <div className={cn(
              "flex items-center gap-2 transition-opacity",
              collapsed && "opacity-0"
            )}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                AI
              </div>
              <div>
                <h1 className="text-sm font-semibold">Test Automation</h1>
                <p className="text-xs text-muted-foreground">Ecosystem Manager</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCollapsed(!collapsed)}
              className="h-8 w-8"
            >
              {collapsed ? "→" : "←"}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2">
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
                  "hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href && "bg-accent text-accent-foreground font-medium"
                )}
              >
                <span className="text-lg">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.title}</span>
                    {item.badge && (
                      <Badge variant="secondary" className="text-xs px-2 py-0">
                        {item.badge}
                      </Badge>
                    )}
                  </>
                )}
              </Link>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <div className={cn(
            "text-xs text-muted-foreground transition-opacity",
            collapsed && "opacity-0"
          )}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>AI Engine: Active</span>
            </div>
            <div className="text-xs">
              Last optimization: 2 min ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}