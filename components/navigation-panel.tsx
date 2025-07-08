"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Component, FileText, Frame, Layers, CheckCircle2 } from "lucide-react"

interface NavigationPanelProps {
  selectedLayer: string
  onSelectLayer: (layer: string) => void
}

const readyForDevItems = [
  {
    id: "login-form",
    name: "Login Form",
    type: "component",
    lastEdited: "2 hours ago",
    status: "ready",
  },
  {
    id: "dashboard-header",
    name: "Dashboard Header",
    type: "frame",
    lastEdited: "1 day ago",
    status: "ready",
  },
  {
    id: "user-profile",
    name: "User Profile Card",
    type: "component",
    lastEdited: "3 hours ago",
    status: "ready",
  },
]

const allFrames = [
  {
    id: "home-page",
    name: "Home Page",
    type: "frame",
    children: [
      { id: "hero-section", name: "Hero Section", type: "frame" },
      { id: "features-grid", name: "Features Grid", type: "frame" },
    ],
  },
  {
    id: "auth-flows",
    name: "Authentication Flows",
    type: "frame",
    children: [
      { id: "login-form", name: "Login Form", type: "component" },
      { id: "signup-form", name: "Signup Form", type: "component" },
    ],
  },
]

export function NavigationPanel({ selectedLayer, onSelectLayer }: NavigationPanelProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["ready-for-dev", "all-frames"])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "component":
        return <Component className="h-4 w-4" />
      case "frame":
        return <Frame className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <ScrollArea className="flex-1">
      <div className="p-4 space-y-4">
        {/* Ready for Development */}
        <Collapsible
          open={expandedSections.includes("ready-for-dev")}
          onOpenChange={() => toggleSection("ready-for-dev")}
        >
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              <div className="flex items-center gap-2">
                {expandedSections.includes("ready-for-dev") ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <span className="font-medium">Ready for development</span>
                <Badge variant="secondary" className="ml-auto text-xs">
                  {readyForDevItems.length}
                </Badge>
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-2">
            {readyForDevItems.map((item) => (
              <Button
                key={item.id}
                variant={selectedLayer === item.id ? "secondary" : "ghost"}
                className="w-full justify-start p-2 h-auto"
                onClick={() => onSelectLayer(item.id)}
              >
                <div className="flex items-center gap-2 w-full">
                  {getIcon(item.type)}
                  <div className="flex-1 text-left">
                    <div className="font-medium text-sm">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.lastEdited}</div>
                  </div>
                </div>
              </Button>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* All Frames */}
        <Collapsible open={expandedSections.includes("all-frames")} onOpenChange={() => toggleSection("all-frames")}>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" className="w-full justify-start p-2 h-auto">
              <div className="flex items-center gap-2">
                {expandedSections.includes("all-frames") ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
                <Layers className="h-4 w-4" />
                <span className="font-medium">All frames</span>
              </div>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-2">
            {allFrames.map((frame) => (
              <div key={frame.id} className="space-y-1">
                <Button
                  variant="ghost"
                  className="w-full justify-start p-2 h-auto"
                  onClick={() => onSelectLayer(frame.id)}
                >
                  <div className="flex items-center gap-2">
                    {getIcon(frame.type)}
                    <span className="font-medium text-sm">{frame.name}</span>
                  </div>
                </Button>
                {frame.children && (
                  <div className="ml-6 space-y-1">
                    {frame.children.map((child) => (
                      <Button
                        key={child.id}
                        variant={selectedLayer === child.id ? "secondary" : "ghost"}
                        className="w-full justify-start p-2 h-auto"
                        onClick={() => onSelectLayer(child.id)}
                      >
                        <div className="flex items-center gap-2">
                          {getIcon(child.type)}
                          <span className="text-sm">{child.name}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </ScrollArea>
  )
}
