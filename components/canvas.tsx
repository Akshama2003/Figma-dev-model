"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react"

interface CanvasProps {
  selectedLayer: string
}

export function Canvas({ selectedLayer }: CanvasProps) {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* Canvas Toolbar */}
      <div className="flex items-center justify-between p-4 border-b bg-background">
        <div className="flex items-center gap-2">
          <Badge variant="outline">100%</Badge>
          <Button variant="ghost" size="sm">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Maximize2 className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary">{selectedLayer.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</Badge>
        </div>
      </div>

      {/* Canvas Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          {selectedLayer === "login-form" && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold">Sign In</h2>
                <p className="text-muted-foreground mt-2">Enter your credentials to continue</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <div className="h-10 bg-gray-100 rounded border"></div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <div className="h-10 bg-gray-100 rounded border"></div>
                </div>

                <div className="h-10 bg-blue-600 rounded text-white flex items-center justify-center font-medium">
                  Sign In
                </div>

                <div className="text-center">
                  <span className="text-sm text-muted-foreground">
                    {"Don't have an account? "}
                    <span className="text-blue-600 font-medium">Sign up</span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {selectedLayer === "user-profile" && (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-muted-foreground">john@example.com</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Projects</span>
                  <span className="text-sm font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Team Members</span>
                  <span className="text-sm font-medium">8</span>
                </div>
              </div>
            </div>
          )}

          {selectedLayer === "dashboard-header" && (
            <div className="space-y-4 w-full max-w-2xl">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-8 px-4 bg-blue-100 text-blue-700 rounded flex items-center text-sm font-medium">
                  Overview
                </div>
                <div className="h-8 px-4 text-gray-600 rounded flex items-center text-sm">Analytics</div>
                <div className="h-8 px-4 text-gray-600 rounded flex items-center text-sm">Settings</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
