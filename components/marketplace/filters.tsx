"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"

export function MarketplaceFilters() {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const cropTypes = ["Vegetables", "Fruits", "Grains", "Pulses", "Spices", "Herbs"]

  const regions = ["Punjab", "Maharashtra", "Karnataka", "Gujarat", "Rajasthan", "Tamil Nadu"]

  const certifications = ["Organic", "Pesticide Free", "Non-GMO", "Fair Trade"]

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  const clearFilters = () => {
    setSelectedFilters([])
    setPriceRange([0, 500])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </span>
            {selectedFilters.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Clear All
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Active Filters */}
          {selectedFilters.length > 0 && (
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Active Filters</h4>
              <div className="flex flex-wrap gap-2">
                {selectedFilters.map((filter) => (
                  <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                    {filter}
                    <X className="h-3 w-3 cursor-pointer" onClick={() => toggleFilter(filter)} />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Price Range */}
          <div className="space-y-3">
            <h4 className="font-medium">Price Range (₹/kg)</h4>
            <Slider value={priceRange} onValueChange={setPriceRange} max={500} step={10} className="w-full" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>

          {/* Crop Types */}
          <div className="space-y-3">
            <h4 className="font-medium">Crop Type</h4>
            <div className="space-y-2">
              {cropTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox
                    id={type}
                    checked={selectedFilters.includes(type)}
                    onCheckedChange={() => toggleFilter(type)}
                  />
                  <label htmlFor={type} className="text-sm cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-3">
            <h4 className="font-medium">Region</h4>
            <div className="space-y-2">
              {regions.map((region) => (
                <div key={region} className="flex items-center space-x-2">
                  <Checkbox
                    id={region}
                    checked={selectedFilters.includes(region)}
                    onCheckedChange={() => toggleFilter(region)}
                  />
                  <label htmlFor={region} className="text-sm cursor-pointer">
                    {region}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h4 className="font-medium">Certifications</h4>
            <div className="space-y-2">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center space-x-2">
                  <Checkbox
                    id={cert}
                    checked={selectedFilters.includes(cert)}
                    onCheckedChange={() => toggleFilter(cert)}
                  />
                  <label htmlFor={cert} className="text-sm cursor-pointer">
                    {cert}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
