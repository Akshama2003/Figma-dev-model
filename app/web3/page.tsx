import { WalletConnect } from "@/components/web3/wallet-connect"
import { CivicVerification } from "@/components/web3/civic-verification"
import { SmartContractFunding } from "@/components/web3/smart-contract-funding"
import { NFTCropOwnership } from "@/components/web3/nft-crop-ownership"
import { Badge } from "@/components/ui/badge"

export default function Web3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200 mb-4">
            Web3 Features
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Decentralized <span className="text-green-600 font-caveat">Farming Marketplace</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of agriculture with blockchain technology, smart contracts, and Civic Auth
            verification
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-8">
            <WalletConnect />
            <CivicVerification userType="farmer" />
          </div>

          <div className="space-y-8">
            <SmartContractFunding
              cropId="crop-001"
              cropName="Organic Basmati Rice"
              farmer="Suresh Patel"
              targetAmount={250000}
              currentAmount={185000}
              deadline="2024-12-31"
              minContribution={1000}
            />

            <NFTCropOwnership
              cropId="crop-001"
              cropName="Organic Basmati Rice"
              farmer="Suresh Patel"
              tokenId="KB001"
              sharePercentage={15}
              estimatedYield="45kg"
              harvestDate="Dec 2024"
              currentGrowthStage={3}
              totalStages={5}
              nftImage="/placeholder.svg?height=300&width=300"
            />
          </div>
        </div>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Civic Auth Security</h3>
            <p className="text-gray-600">
              Passwordless authentication with identity verification for trusted transactions
            </p>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contract Escrow</h3>
            <p className="text-gray-600">
              Automated fund release based on harvest milestones with transparent tracking
            </p>
          </div>

          <div className="text-center p-6 bg-white/80 backdrop-blur rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Crop Shares</h3>
            <p className="text-gray-600">
              Own digital shares of crops with real-time growth tracking and yield distribution
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
