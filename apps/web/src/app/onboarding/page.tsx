"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Linkedin, Github, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

type OnboardingStep = "welcome" | "connect-linkedin" | "syncing" | "complete"

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome")
  const [syncProgress, setSyncProgress] = useState(0)

  const handleConnectLinkedIn = async () => {
    setCurrentStep("connect-linkedin")

    // Simulate OAuth flow
    setTimeout(() => {
      setCurrentStep("syncing")
      simulateSync()
    }, 1000)
  }

  const simulateSync = () => {
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setSyncProgress(progress)

      if (progress >= 100) {
        clearInterval(interval)
        setCurrentStep("complete")
      }
    }, 300)
  }

  const handleComplete = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Welcome Step */}
        {currentStep === "welcome" && (
          <Card className="border-2">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-indigo-600" />
              </div>
              <CardTitle className="text-3xl font-bold">Welcome to CV Match</CardTitle>
              <CardDescription className="text-lg">
                Let's get you set up in just a few steps. We'll automatically sync your professional data to help you
                create tailored CVs in seconds.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-indigo-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Connect Your LinkedIn</h3>
                    <p className="text-sm text-slate-600">
                      We'll automatically import your work experience, education, and skills
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-600">Sync Your Data</h3>
                    <p className="text-sm text-slate-500">
                      Our AI will structure your professional history into reusable components
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-slate-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-600">Create Your First CV</h3>
                    <p className="text-sm text-slate-500">
                      Paste a job description and generate a tailored CV instantly
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleConnectLinkedIn}
                className="w-full h-12 text-base bg-[#0077b5] hover:bg-[#006399]"
                size="lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Continue with LinkedIn
              </Button>

              <p className="text-xs text-center text-slate-500">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        )}

        {/* Connect LinkedIn Step */}
        {currentStep === "connect-linkedin" && (
          <Card className="border-2">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
              </div>
              <CardTitle className="text-2xl">Connecting to LinkedIn</CardTitle>
              <CardDescription>Please complete the authentication in the popup window</CardDescription>
            </CardHeader>
          </Card>
        )}

        {/* Syncing Step */}
        {currentStep === "syncing" && (
          <Card className="border-2">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-indigo-600 animate-spin" />
              </div>
              <CardTitle className="text-2xl">Syncing Your Profile</CardTitle>
              <CardDescription>
                We're importing your professional data from LinkedIn. This will only take a moment.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={syncProgress} className="h-2" />
              <div className="space-y-2 text-sm text-slate-600">
                {syncProgress >= 20 && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Connected to LinkedIn</span>
                  </div>
                )}
                {syncProgress >= 50 && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Importing work experience</span>
                  </div>
                )}
                {syncProgress >= 80 && (
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Structuring your components</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Complete Step */}
        {currentStep === "complete" && (
          <Card className="border-2">
            <CardHeader className="text-center space-y-4 pb-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-3xl font-bold">You're All Set!</CardTitle>
              <CardDescription className="text-lg">
                We've successfully imported your professional data. You're ready to create your first tailored CV.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 space-y-3">
                <h3 className="font-semibold text-indigo-900">What's Next?</h3>
                <ul className="space-y-2 text-sm text-indigo-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Find a job posting you're interested in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Paste the job description into your dashboard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>Let our AI generate a perfectly tailored CV in seconds</span>
                  </li>
                </ul>
              </div>

              <Button onClick={handleComplete} className="w-full h-12 text-base" size="lg">
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Optional: Add GitHub connection */}
        {currentStep === "complete" && (
          <Card className="mt-4 border-dashed">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-slate-600" />
                  <div>
                    <p className="font-medium text-sm">Connect GitHub (Optional)</p>
                    <p className="text-xs text-slate-500">Add your projects and contributions</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Connect
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
