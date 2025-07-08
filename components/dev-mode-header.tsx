"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ToggleLeft, ToggleRight, Monitor, Smartphone } from "lucide-react"

interface DevModeHeaderProps {
  isDevMode: boolean
  onToggleMode: () => void
}

export function DevModeHeader({ isDevMode, onToggleMode }: DevModeHeaderProps) {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between mb-3">
        <h1 className="font-semibold text-lg">Design System</h1>
        <Badge variant="secondary" className="text-xs">
          Ready for dev
        </Badge>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={isDevMode ? "default" : "outline"}
          size="sm"
          onClick={onToggleMode}
          className="flex items-center gap-2"
        >
          {isDevMode ? <ToggleRight className="h-4 w-4" /> : <ToggleLeft className="h-4 w-4" />}
          Dev Mode
        </Button>

        <div className="flex items-center gap-1 ml-auto">
          <Button variant="ghost" size="sm">
            <Monitor className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Smartphone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
