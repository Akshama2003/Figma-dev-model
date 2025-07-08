"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Wallet, Shield, CheckCircle, Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface WalletState {
  isConnected: boolean
  address: string | null
  balance: string | null
  isVerified: boolean
  civicPass: boolean
}

export function WalletConnect() {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    address: null,
    balance: null,
    isVerified: false,
    civicPass: false,
  })
  const [isConnecting, setIsConnecting] = useState(false)
  const { toast } = useToast()

  // Simulate wallet connection
  const connectWallet = async () => {
    setIsConnecting(true)

    try {
      // Simulate connection delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock wallet connection
      setWalletState({
        isConnected: true,
        address: "0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4",
        balance: "2.45 ETH",
        isVerified: true,
        civicPass: true,
      })

      toast({
        title: "Wallet Connected Successfully",
        description: "Your identity has been verified with Civic Auth",
      })
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Please try again or check your wallet",
        variant: "destructive",
      })
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setWalletState({
      isConnected: false,
      address: null,
      balance: null,
      isVerified: false,
      civicPass: false,
    })
    toast({
      title: "Wallet Disconnected",
      description: "You have been logged out securely",
    })
  }

  const copyAddress = () => {
    if (walletState.address) {
      navigator.clipboard.writeText(walletState.address)
      toast({
        title: "Address Copied",
        description: "Wallet address copied to clipboard",
      })
    }
  }

  if (!walletState.isConnected) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6 text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <Wallet className="h-8 w-8 text-green-600" />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect Your Wallet</h3>
            <p className="text-gray-600 text-sm">
              Secure login with Civic Auth verification for trusted farming transactions
            </p>
          </div>

          <div className="space-y-3">
            <Button
              onClick={connectWallet}
              disabled={isConnecting}
              className="w-full bg-green-600 hover:bg-green-700"
              size="lg"
            >
              {isConnecting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Connecting...
                </>
              ) : (
                <>
                  <Shield className="h-4 w-4 mr-2" />
                  Connect with Civic Auth
                </>
              )}
            </Button>

            <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
              <Shield className="h-3 w-3" />
              <span>Passwordless • Secure • Verified</span>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Wallet Connected</h3>
              <p className="text-sm text-gray-600">Civic Verified</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Verified
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Address</p>
              <p className="font-mono text-sm">
                {walletState.address?.slice(0, 6)}...{walletState.address?.slice(-4)}
              </p>
            </div>
            <Button variant="ghost" size="sm" onClick={copyAddress}>
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Balance</p>
              <p className="font-semibold">{walletState.balance}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
            <Shield className="h-4 w-4 text-green-600" />
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800">Civic Pass Active</p>
              <p className="text-xs text-green-600">Identity verified & trusted</p>
            </div>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </div>
        </div>

        <Button variant="outline" onClick={disconnectWallet} className="w-full bg-transparent">
          Disconnect Wallet
        </Button>
      </CardContent>
    </Card>
  )
}
