"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Code,
  Download,
  ExternalLink,
  Eye,
  GitBranch,
  List,
  Palette,
  Play,
  Settings,
  Copy,
  FileText,
} from "lucide-react"

interface InspectPanelProps {
  selectedLayer: string
  viewMode: "code" | "list"
  onViewModeChange: (mode: "code" | "list") => void
}

export function InspectPanel({ selectedLayer, viewMode, onViewModeChange }: InspectPanelProps) {
  const layerData = {
    "login-form": {
      name: "Login Form",
      type: "Component",
      lastUpdated: "2 hours ago",
      properties: {
        width: "400px",
        height: "auto",
        padding: "32px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
    "user-profile": {
      name: "User Profile Card",
      type: "Component",
      lastUpdated: "3 hours ago",
      properties: {
        width: "320px",
        height: "auto",
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
      },
    },
    "dashboard-header": {
      name: "Dashboard Header",
      type: "Frame",
      lastUpdated: "1 day ago",
      properties: {
        width: "100%",
        height: "80px",
        padding: "16px 24px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
      },
    },
  }

  const currentLayer = layerData[selectedLayer as keyof typeof layerData] || layerData["login-form"]

  return (
    <ScrollArea className="h-full">
      <div className="p-4 space-y-6">
        {/* Layer Information */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg">{currentLayer.name}</h3>
            <Badge variant="outline">{currentLayer.type}</Badge>
          </div>

          <p className="text-sm text-muted-foreground">Last updated {currentLayer.lastUpdated}</p>

          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <GitBranch className="h-4 w-4 mr-2" />
            Compare changes
          </Button>
        </div>

        <Separator />

        {/* External Resources */}
        <div className="space-y-3">
          <h4 className="font-medium">Dev Resources</h4>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <ExternalLink className="h-4 w-4 mr-2" />
              GitHub Repository
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <FileText className="h-4 w-4 mr-2" />
              Storybook
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Settings className="h-4 w-4 mr-2" />
              Jira Ticket
            </Button>
          </div>
        </div>

        <Separator />

        {/* Component Playground */}
        <div className="space-y-3">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Play className="h-4 w-4 mr-2" />
            Explore component behavior
          </Button>
        </div>

        <Separator />

        {/* Layer Properties */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-medium">Layer Properties</h4>
            <div className="flex items-center gap-1">
              <Button
                variant={viewMode === "code" ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("code")}
              >
                <Code className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => onViewModeChange("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {viewMode === "code" ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">CSS</span>
                <Button variant="ghost" size="sm">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="bg-muted p-3 rounded text-sm font-mono">
                <div className="space-y-1">
                  {Object.entries(currentLayer.properties).map(([key, value]) => (
                    <div key={key}>
                      <span className="text-blue-600">{key.replace(/([A-Z])/g, "-$1").toLowerCase()}</span>
                      <span className="text-muted-foreground">: </span>
                      <span className="text-green-600">{value}</span>
                      <span className="text-muted-foreground">;</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(currentLayer.properties).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-2 border-b border-border/50">
                  <span className="text-sm font-medium capitalize">{key.replace(/([A-Z])/g, " $1").toLowerCase()}</span>
                  <Button variant="ghost" size="sm" className="h-auto p-1">
                    <span className="text-sm">{value}</span>
                    <Copy className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* Assets */}
        <div className="space-y-3">
          <h4 className="font-medium">Assets</h4>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Export as PNG
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Export as SVG
            </Button>
          </div>
        </div>

        <Separator />

        {/* Applied Styles */}
        <div className="space-y-3">
          <h4 className="font-medium">Applied Styles</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 p-2 bg-muted rounded">
              <Palette className="h-4 w-4" />
              <span className="text-sm">Primary Button Style</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-muted rounded">
              <Eye className="h-4 w-4" />
              <span className="text-sm">Card Shadow</span>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
