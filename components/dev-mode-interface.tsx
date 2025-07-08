"use client"

import { useState } from "react"
import { DevModeHeader } from "./dev-mode-header"
import { NavigationPanel } from "./navigation-panel"
import { InspectPanel } from "./inspect-panel"
import { Canvas } from "./canvas"

export function DevModeInterface() {
  const [isDevMode, setIsDevMode] = useState(true)
  const [selectedLayer, setSelectedLayer] = useState("login-form")
  const [viewMode, setViewMode] = useState<"code" | "list">("code")

  return (
    <div className="flex h-screen bg-background">
      {/* Navigation Panel */}
      <div className="w-80 border-r bg-muted/30">
        <DevModeHeader isDevMode={isDevMode} onToggleMode={() => setIsDevMode(!isDevMode)} />
        <NavigationPanel selectedLayer={selectedLayer} onSelectLayer={setSelectedLayer} />
      </div>

      {/* Canvas */}
      <div className="flex-1 flex flex-col">
        <Canvas selectedLayer={selectedLayer} />
      </div>

      {/* Inspect Panel */}
      <div className="w-80 border-l bg-muted/30">
        <InspectPanel selectedLayer={selectedLayer} viewMode={viewMode} onViewModeChange={setViewMode} />
      </div>
    </div>
  )
}
