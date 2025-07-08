"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Shield, TrendingUp, Users, Coins, Lock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FundingProps {
  cropId: string
  cropName: string
  farmer: string
  targetAmount: number
  currentAmount: number
  deadline: string
  minContribution: number
}

export function SmartContractFunding({
  cropId,
  cropName,
  farmer,
  targetAmount,
  currentAmount,
  deadline,
  minContribution,
}: FundingProps) {
  const [fundingAmount, setFundingAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast } = useToast()

  const progressPercentage = (currentAmount / targetAmount) * 100
  const remainingAmount = targetAmount - currentAmount
  const daysLeft = Math.ceil((new Date(deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))

  const handleFunding = async () => {
    if (!fundingAmount || Number.parseFloat(fundingAmount) < minContribution) {
      toast({
        title: "Invalid Amount",
        description: `Minimum contribution is ₹${minContribution}`,
        variant: "destructive",
      })
      return
    }

    setIsProcessing(true)

    try {
      // Simulate smart contract interaction
      await new Promise((resolve) => setTimeout(resolve, 3000))

      toast({
        title: "Funding Successful!",
        description: `₹${fundingAmount} has been escrowed in smart contract`,
      })

      // Reset form
      setFundingAmount("")
    } catch (error) {
      toast({
        title: "Transaction Failed",
        description: "Please try again or check your wallet balance",
        variant: "destructive",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
            Fund This Crop
          </span>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            <Shield className="h-3 w-3 mr-1" />
            Smart Contract
          </Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Crop Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">{cropName}</h3>
          <p className="text-sm text-gray-600">
            by <span className="font-caveat text-green-600">{farmer}</span>
          </p>
        </div>

        {/* Funding Progress */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Funding Progress</span>
            <span className="text-sm text-gray-600">{progressPercentage.toFixed(1)}%</span>
          </div>

          <Progress value={progressPercentage} className="h-3" />

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-lg font-bold text-green-600">₹{currentAmount.toLocaleString()}</p>
              <p className="text-xs text-gray-600">Raised</p>
            </div>
            <div>
              <p className="text-lg font-bold text-gray-900">₹{targetAmount.toLocaleString()}</p>
              <p className="text-xs text-gray-600">Target</p>
            </div>
            <div>
              <p className="text-lg font-bold text-orange-600">{daysLeft}</p>
              <p className="text-xs text-gray-600">Days Left</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Funding Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Funding Amount (₹)</label>
            <Input
              type="number"
              placeholder={`Min. ₹${minContribution}`}
              value={fundingAmount}
              onChange={(e) => setFundingAmount(e.target.value)}
              className="text-lg"
            />
            <p className="text-xs text-gray-500 mt-1">Funds will be held in escrow until harvest completion</p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[1000, 5000, 10000].map((amount) => (
              <Button
                key={amount}
                variant="outline"
                size="sm"
                onClick={() => setFundingAmount(amount.toString())}
                className="text-xs"
              >
                ₹{amount}
              </Button>
            ))}
          </div>

          <Button
            onClick={handleFunding}
            disabled={isProcessing || !fundingAmount}
            className="w-full bg-green-600 hover:bg-green-700"
            size="lg"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Processing Transaction...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4 mr-2" />
                Fund with Smart Contract
              </>
            )}
          </Button>
        </div>

        {/* Smart Contract Benefits */}
        <div className="bg-blue-50 p-4 rounded-lg space-y-2">
          <h4 className="font-medium text-blue-900 flex items-center">
            <Shield className="h-4 w-4 mr-2" />
            Smart Contract Protection
          </h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Funds released only after harvest verification</li>
            <li>• Automatic refund if targets not met</li>
            <li>• Transparent milestone tracking</li>
            <li>• No middleman fees or delays</li>
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <Users className="h-4 w-4 text-gray-600" />
            <div>
              <p className="text-sm font-medium">23 Funders</p>
              <p className="text-xs text-gray-600">Supporting</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Coins className="h-4 w-4 text-gray-600" />
            <div>
              <p className="text-sm font-medium">₹{(currentAmount / 23).toFixed(0)}</p>
              <p className="text-xs text-gray-600">Avg. Contribution</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
