import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function AuthCodeError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full space-y-6 text-center">
        <div className="flex justify-center">
          <AlertCircle className="h-16 w-16 text-destructive" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Authentication Error</h1>
          <p className="text-muted-foreground">
            We couldn't complete the authentication process. This might be due to:
          </p>
        </div>

        <ul className="text-sm text-muted-foreground space-y-2 text-left list-disc list-inside">
          <li>The authentication code has expired</li>
          <li>The code has already been used</li>
          <li>Network connectivity issues</li>
        </ul>

        <div className="space-y-3 pt-4">
          <Button asChild className="w-full">
            <Link href="/">Try Again</Link>
          </Button>
          
          <Button asChild variant="outline" className="w-full">
            <Link href="/support">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
