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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Scan lines background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)',
        }} />
      </div>

      {/* Scattered circles decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/20 rounded-full"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <AppHeader />

        <main className="container mx-auto px-4 py-8 max-w-4xl space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Account Settings</h1>
          <p className="text-white/70">Manage your account preferences and integrations</p>
        </div>

        {/* Profile Section */}
        <Card className="p-6 space-y-6 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <User className="w-5 h-5" />
              Profile Information
            </h2>
            <p className="text-sm text-white/70">Update your personal information and contact details</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">First Name</Label>
                <Input id="firstName" defaultValue="John" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <div className="flex gap-2">
                <Input id="email" type="email" defaultValue="john@example.com" className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                <Badge variant="secondary" className="flex items-center gap-1 px-3 bg-white/10 text-white border-white/20">
                  <Mail className="w-3 h-3" />
                  Verified
                </Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-white">Location</Label>
              <Input id="location" defaultValue="San Francisco, CA" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
            </div>
          </div>

          <div className="flex justify-end">
            <Button className="bg-white text-black hover:bg-white/90">Save Changes</Button>
          </div>
        </Card>

        {/* Connected Accounts */}
        <Card className="p-6 space-y-6 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <Shield className="w-5 h-5" />
              Connected Accounts
            </h2>
            <p className="text-sm text-white/70">Manage your data source integrations</p>
          </div>

          <Separator />

          <div className="space-y-4">
            {/* LinkedIn */}
            <div className="flex items-center justify-between p-4 border border-white/20 rounded-lg bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">LinkedIn</h3>
                  <p className="text-sm text-white/70">Connected as john@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-400 border-green-500/20"
                >
                  Connected
                </Badge>
                <Button variant="outline" size="sm" className="bg-transparent border-white/40 text-white hover:bg-white/10">
                  Disconnect
                </Button>
              </div>
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-between p-4 border border-dashed border-white/30 rounded-lg bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-white/70" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">GitHub</h3>
                  <p className="text-sm text-white/70">Import projects and contributions</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-white/40 text-white">Premium</Badge>
                <Button variant="outline" size="sm" className="bg-transparent border-white/40 text-white hover:bg-white/10" disabled>
                  Connect
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Subscription */}
        <Card className="p-6 space-y-6 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <CreditCard className="w-5 h-5" />
              Subscription
            </h2>
            <p className="text-sm text-white/70">Manage your subscription and billing</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 border border-white/20 rounded-lg bg-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-lg text-white">Free Plan</h3>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">Current Plan</Badge>
                </div>
                <ul className="space-y-1 text-sm text-white/70">
                  <li>• 1 CV slot</li>
                  <li>• LinkedIn import</li>
                  <li>• AI match scoring</li>
                  <li>• PDF export</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">$0</p>
                <p className="text-sm text-white/70">forever</p>
              </div>
            </div>

            <div className="flex items-start justify-between p-4 border border-white/30 rounded-lg bg-white/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-white" />
                  <h3 className="font-semibold text-lg text-white">Premium Plan</h3>
                  <Badge variant="outline" className="border-white/40 text-white">Coming Soon</Badge>
                </div>
                <ul className="space-y-1 text-sm text-white/70">
                  <li>• Unlimited CV slots</li>
                  <li>• Multiple data sources</li>
                  <li>• Advanced AI suggestions</li>
                  <li>• Priority support</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-white">$9</p>
                <p className="text-sm text-white/70">/month</p>
              </div>
            </div>

            <Button className="w-full gap-2 bg-white text-black hover:bg-white/90" disabled>
              <Crown className="w-4 h-4" />
              Join Waitlist for Premium
            </Button>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6 space-y-6 bg-white/5 border-white/20 backdrop-blur-sm">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-white">
              <Bell className="w-5 h-5" />
              Notifications
            </h2>
            <p className="text-sm text-white/70">Configure how you receive updates</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="email-notifications" className="text-base font-medium text-white">
                  Email Notifications
                </Label>
                <p className="text-sm text-white/70">Receive updates about your CVs and account</p>
              </div>
              <Switch id="email-notifications" defaultChecked />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="sync-notifications" className="text-base font-medium text-white">
                  Data Sync Alerts
                </Label>
                <p className="text-sm text-white/70">Get notified when your data sources sync</p>
              </div>
              <Switch id="sync-notifications" defaultChecked />
            </div>

            <Separator className="bg-white/20" />

            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <Label htmlFor="marketing" className="text-base font-medium text-white">
                  Marketing Emails
                </Label>
                <p className="text-sm text-white/70">Receive tips, updates, and special offers</p>
              </div>
              <Switch id="marketing" />
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 space-y-6 border-red-500/50 bg-white/5 backdrop-blur-sm">
          <div className="space-y-2">
            <h2 className="text-xl font-bold flex items-center gap-2 text-red-400">
              <Trash2 className="w-5 h-5" />
              Danger Zone
            </h2>
            <p className="text-sm text-white/70">Irreversible actions for your account</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-start justify-between p-4 border border-red-500/30 rounded-lg bg-red-500/5">
              <div className="space-y-1">
                <h3 className="font-semibold text-white">Delete Account</h3>
                <p className="text-sm text-white/70">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
              </div>
              <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700">
                Delete
              </Button>
            </div>
          </div>
        </Card>
        </main>
      </div>
    </div>
  )
}
