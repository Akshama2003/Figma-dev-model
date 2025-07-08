"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Award, Eye, Share2, Download, Sparkles, TrendingUp } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface NFTCropProps {
  cropId: string
  cropName: string
  farmer: string
  tokenId: string
  sharePercentage: number
  estimatedYield: string
  harvestDate: string
  currentGrowthStage: number
  totalStages: number
  nftImage: string
}

export function NFTCropOwnership({
  cropId,
  cropName,
  farmer,
  tokenId,
  sharePercentage,
  estimatedYield,
  harvestDate,
  currentGrowthStage,
  totalStages,
  nftImage,
}: NFTCropProps) {
  const [isViewing, setIsViewing] = useState(false)
  const { toast } = useToast()

  const growthProgress = (currentGrowthStage / totalStages) * 100
  const stageNames = ["Seeding", "Germination", "Growth", "Flowering", "Harvest"]

  const handleShare = () => {
    navigator.clipboard.writeText(`Check out my crop NFT: ${cropName} - Token #${tokenId}`)
    toast({
      title: "Link Copied!",
      description: "Share your crop NFT with friends and family",
    })
  }

  const handleDownload = () => {
    toast({
      title: "NFT Downloaded",
      description: "High-resolution NFT image saved to your device",
    })
  }

  const handleViewOnChain = () => {
    toast({
      title: "Opening Blockchain Explorer",
      description: "View your NFT on the blockchain",
    })
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Award className="h-5 w-5 mr-2 text-purple-600" />
            Crop NFT
          </span>
          <Badge className="bg-purple-100 text-purple-800">
            <Sparkles className="h-3 w-3 mr-1" />#{tokenId}
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* NFT Image */}
        <div className="relative">
          <img
            src={nftImage || "/placeholder.svg?height=300&width=300"}
            alt={`${cropName} NFT`}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
            {sharePercentage}% Ownership
          </div>
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium">
            Stage {currentGrowthStage}/{totalStages}
          </div>
        </div>

        {/* Crop Info */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{cropName}</h3>
          <p className="text-sm text-gray-600">
            Grown by <span className="font-caveat text-green-600 font-medium">{farmer}</span>
          </p>
        </div>

        {/* Growth Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Growth Progress</span>
            <span className="text-sm text-gray-600">{growthProgress.toFixed(0)}%</span>
          </div>

          <Progress value={growthProgress} className="h-2" />

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Current: <span className="font-medium text-green-600">{stageNames[currentGrowthStage - 1]}</span>
            </p>
          </div>
        </div>

        <Separator />

        {/* NFT Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Your Share</p>
            <p className="font-semibold text-lg">{sharePercentage}%</p>
          </div>
          <div>
            <p className="text-gray-600">Est. Yield</p>
            <p className="font-semibold text-lg">{estimatedYield}</p>
          </div>
          <div>
            <p className="text-gray-600">Harvest Date</p>
            <p className="font-semibold">{harvestDate}</p>
          </div>
          <div>
            <p className="text-gray-600">Token ID</p>
            <p className="font-semibold font-mono">#{tokenId}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" size="sm" onClick={handleViewOnChain}>
            <Eye className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4" />
          </Button>
        </div>

        {/* NFT Benefits */}
        <div className="bg-purple-50 p-4 rounded-lg space-y-2">
          <h4 className="font-medium text-purple-900 flex items-center">
            <Sparkles className="h-4 w-4 mr-2" />
            NFT Ownership Benefits
          </h4>
          <ul className="text-sm text-purple-800 space-y-1">
            <li>• Receive {sharePercentage}% of harvest yield</li>
            <li>• Real-time growth updates & photos</li>
            <li>• Tradeable on NFT marketplaces</li>
            <li>• Proof of sustainable farming support</li>
            <li>• Exclusive farmer community access</li>
          </ul>
        </div>

        {/* Market Value */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
          <div>
            <p className="text-sm text-green-600">Current Market Value</p>
            <p className="text-lg font-bold text-green-800">₹{(sharePercentage * 50).toFixed(0)}</p>
          </div>
          <div className="flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">+12%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
