import { MarketplaceFilters } from "@/components/marketplace/filters"
import { CropGrid } from "@/components/marketplace/crop-grid"
import { Badge } from "@/components/ui/badge"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200 mb-4">
            Marketplace
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Fresh Crops from <span className="text-green-600 font-caveat">Verified Farmers</span>
          </h1>
          <p className="text-xl text-gray-600">Browse and buy directly from farmers across India</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <MarketplaceFilters />
          </div>
          <div className="lg:col-span-3">
            <CropGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
