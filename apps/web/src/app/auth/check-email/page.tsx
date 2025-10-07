import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function CheckEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
            <Mail className="h-6 w-6 text-indigo-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Check your email</CardTitle>
          <CardDescription>
            We've sent you a confirmation link. Please check your email to verify your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-600">
            <p className="font-medium mb-1">Didn't receive the email?</p>
            <ul className="list-disc list-inside space-y-1 text-xs">
              <li>Check your spam or junk folder</li>
              <li>Make sure you entered the correct email address</li>
              <li>Wait a few minutes and check again</li>
            </ul>
          </div>
          <Button asChild className="w-full bg-indigo-600 hover:bg-indigo-700">
            <Link href="/auth/login">Back to login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
