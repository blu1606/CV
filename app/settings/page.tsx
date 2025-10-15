import { AppHeader } from "@/components/app-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { User, Mail, Linkedin, Github, CreditCard, Bell, Shield, Trash2, Crown } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background">
      <AppHeader />

      <main className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Account Settings</h1>
          <p className="text-muted-foreground">Manage your account preferences and integrations</p>
        </div>

        {/* Profile Section */}
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile Information
            </h2>
            <p className="text-sm text-muted-foreground">Update your personal information and contact details</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="flex gap-2">
                <Input id="email" type="email" defaultValue="john@example.com" className="flex-1" />
                <Badge variant="secondary" className="flex items-center gap-1 px-3">
                  <Mail className="w-3 h-3" />
                  Verified
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" defaultValue="San Francisco, CA" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </Card>

        {/* Connected Accounts */}
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Connected Accounts
            </h2>
            <p className="text-sm text-muted-foreground">Manage your data source integrations</p>
          </div>

          <Separator />

          <div className="space-y-4">
            {/* LinkedIn */}
            <div className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Connected as john@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                >
                  Connected
                </Badge>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Disconnect
                </Button>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-between p-4 border border-dashed border-border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Github className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold">GitHub</h3>
                  <p className="text-sm text-muted-foreground">Import projects and contributions</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Premium</Badge>
                <Button variant="outline" size="sm" className="bg-transparent" disabled>
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Subscription */}
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Subscription
            </h2>
            <p className="text-sm text-muted-foreground">Manage your subscription and billing</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 border border-border rounded-lg bg-accent/30">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg">Free Plan</h3>
                  <Badge variant="secondary">Current Plan</Badge>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• 1 CV slot</li>
                  <li>• LinkedIn import</li>
                  <li>• AI match scoring</li>
                  <li>• PDF export</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">$0</p>
                <p className="text-sm text-muted-foreground">forever</p>
              </div>
            </div>

            <div className="flex items-start justify-between p-4 border border-primary/50 rounded-lg bg-primary/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-lg">Premium Plan</h3>
                  <Badge variant="outline">Coming Soon</Badge>
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Unlimited CV slots</li>
                  <li>• Multiple data sources</li>
                  <li>• Advanced AI suggestions</li>
                  <li>• Priority support</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">$9</p>
                <p className="text-sm text-muted-foreground">/month</p>
              </div>
            </div>

            <Button className="w-full gap-2" disabled>
              <Crown className="w-4 h-4" />
              Join Waitlist for Premium
            </Button>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </h2>
            <p className="text-sm text-muted-foreground">Configure how you receive updates</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="email-notifications" className="text-base font-medium">
                  Email Notifications
                </Label>
                <p className="text-sm text-muted-foreground">Receive updates about your CVs and account</p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="sync-notifications" className="text-base font-medium">
                  Data Sync Alerts
                </Label>
                <p className="text-sm text-muted-foreground">Get notified when your data sources sync</p>
              </div>
              <Switch id="sync-notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="marketing" className="text-base font-medium">
                  Marketing Emails
                </Label>
                <p className="text-sm text-muted-foreground">Receive tips, updates, and special offers</p>
              </div>
              <Switch id="marketing" />
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 space-y-6 border-destructive/50">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-destructive">
              <Trash2 className="w-5 h-5" />
              Danger Zone
            </h2>
            <p className="text-sm text-muted-foreground">Irreversible actions for your account</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 border border-destructive/30 rounded-lg bg-destructive/5">
              <div className="space-y-1">
                <h3 className="font-semibold">Delete Account</h3>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
              </div>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
