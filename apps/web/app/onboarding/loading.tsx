import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function OnboardingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border-2">
          <CardHeader className="text-center space-y-4 pb-8">
            <Skeleton className="mx-auto w-16 h-16 rounded-full" />
            <Skeleton className="h-8 w-64 mx-auto" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </CardHeader>
          <CardContent className="space-y-6">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
