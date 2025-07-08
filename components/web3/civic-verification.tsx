"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, CheckCircle, AlertTriangle, User, FileText, MapPin } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface VerificationStatus {
  identity: boolean
  landOwnership: boolean
  farmingLicense: boolean
  bankAccount: boolean
}

interface CivicVerificationProps {
  userType: "farmer" | "customer"
  isVerified?: boolean
}

export function CivicVerification({ userType, isVerified = false }: CivicVerificationProps) {
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>({
    identity: isVerified,
    landOwnership: userType === "farmer" ? isVerified : true,
    farmingLicense: userType === "farmer" ? isVerified : true,
    bankAccount: isVerified,
  })
  const [isVerifying, setIsVerifying] = useState(false)
  const { toast } = useToast()

  const startVerification = async () => {
    setIsVerifying(true)

    try {
      // Simulate Civic Auth verification process
      await new Promise((resolve) => setTimeout(resolve, 3000))

      setVerificationStatus({
        identity: true,
        landOwnership: true,
        farmingLicense: true,
        bankAccount: true,
      })

      toast({
        title: "Verification Complete!",
        description: "Your identity has been verified with Civic Auth",
      })
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Please try again or contact support",
        variant: "destructive",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  const allVerified = Object.values(verificationStatus).every((status) => status)

  const verificationItems = [
    {
      key: "identity",
      label: "Identity Verification",
      description: "Government ID & biometric verification",
      icon: User,
      required: true,
    },
    {
      key: "landOwnership",
      label: "Land Ownership",
      description: "Property documents & land records",
      icon: MapPin,
      required: userType === "farmer",
    },
    {
      key: "farmingLicense",
      label: "Farming License",
      description: "Agricultural permits & certifications",
      icon: FileText,
      required: userType === "farmer",
    },
    {
      key: "bankAccount",
      label: "Bank Account",
      description: "Financial account verification",
      icon: Shield,
      required: true,
    },
  ]

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-blue-600" />
            Civic Identity Verification
          </span>
          {allVerified && (
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {!allVerified && (
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Secure Your Account</h4>
                <p className="text-sm text-blue-800 mt-1">
                  Complete Civic verification to access all platform features and build trust with the community.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {verificationItems.map((item) => {
            if (!item.required) return null

            const isVerified = verificationStatus[item.key as keyof VerificationStatus]
            const Icon = item.icon

            return (
              <div
                key={item.key}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  isVerified ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      isVerified ? "bg-green-100" : "bg-gray-100"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isVerified ? "text-green-600" : "text-gray-600"}`} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.label}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  {isVerified ? (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {!allVerified && (
          <Button
            onClick={startVerification}
            disabled={isVerifying}
            className="w-full bg-blue-600 hover:bg-blue-700"
            size="lg"
          >
            {isVerifying ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Verifying with Civic...
              </>
            ) : (
              <>
                <Shield className="h-4 w-4 mr-2" />
                Start Civic Verification
              </>
            )}
          </Button>
        )}

        {allVerified && (
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-green-800">Verification Complete!</h3>
            <p className="text-sm text-green-600">Your identity is verified and trusted by the Kisan Booth community</p>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Why Civic Verification?</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Passwordless, secure authentication</li>
            <li>• Prevents fraud and fake listings</li>
            <li>• Builds trust between farmers and customers</li>
            <li>• Enables higher transaction limits</li>
            <li>• Access to premium platform features</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
