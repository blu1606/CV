'use client'

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { User, Mail, Linkedin, Github, CreditCard, Bell, Shield, Trash2, Crown } from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

interface Profile {
  id: string
  full_name: string | null
  avatar_url: string | null
  profession: string | null
  email?: string
}

export function SettingsContent() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProfile() {
      try {
        const supabase = createClient()
        const { data: { user } } = await supabase.auth.getUser()

        if (user) {
          const { data } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .single()

          if (data) {
            setProfile({
              id: (data as any).id,
              full_name: (data as any).full_name,
              avatar_url: (data as any).avatar_url,
              profession: (data as any).profession,
              email: user.email,
            })
          }
        }
      } catch (error) {
        console.error('Error loading profile:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProfile()
  }, [])

  const [firstName, lastName] = profile?.full_name?.split(' ') || ['', '']

  return (
    <>
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
              <Label htmlFor="firstName" className="text-white">
                First Name
              </Label>
              {loading ? (
                <Skeleton className="h-10 bg-white/10" />
              ) : (
                <Input
                  id="firstName"
                  defaultValue={firstName}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-white">
                Last Name
              </Label>
              {loading ? (
                <Skeleton className="h-10 bg-white/10" />
              ) : (
                <Input
                  id="lastName"
                  defaultValue={lastName}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            {loading ? (
              <Skeleton className="h-10 bg-white/10" />
            ) : (
              <div className="flex gap-2">
                <Input
                  id="email"
                  type="email"
                  defaultValue={profile?.email || ''}
                  disabled
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
                <Badge variant="secondary" className="flex items-center gap-1 px-3 bg-white/10 text-white border-white/20">
                  <Mail className="w-3 h-3" />
                  Verified
                </Badge>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="profession" className="text-white">
              Profession
            </Label>
            {loading ? (
              <Skeleton className="h-10 bg-white/10" />
            ) : (
              <Input
                id="profession"
                defaultValue={profile?.profession || ''}
                placeholder="e.g., Full Stack Developer"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
            )}
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="bg-white text-black hover:bg-white/90" disabled={loading}>
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Connected Accounts */}
      <Card className="p-6 space-y-6 bg-white/5 border-white/20 backdrop-blur-sm">
        <div className="space-y-2">
          <h2 className="text-xl font-bold flex items-center gap-2 text-white">
            <Shield className="w-5 h-5" />
            Connected Accounts
          </h2>
          <p className="text-sm text-white/70">Manage your third-party integrations</p>
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
                <p className="text-sm text-white/70">
                  {loading ? 'Loading...' : profile ? 'Connected' : 'Not connected'}
                </p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-500/10 text-green-400 border-green-500/20">
              Active
            </Badge>
          </div>

          {/* GitHub */}
          <div className="flex items-center justify-between p-4 border border-white/20 rounded-lg bg-white/5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Github className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <h3 className="font-semibold text-white">GitHub</h3>
                <p className="text-sm text-white/70">Not connected</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="bg-transparent border-white/40 text-white hover:bg-white/10" disabled>
              Connect
            </Button>
          </div>
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
              <p className="font-medium text-white">Email Notifications</p>
              <p className="text-sm text-white/70">Receive email updates about your CVs</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium text-white">LinkedIn Sync Alerts</p>
              <p className="text-sm text-white/70">Get notified when data is synced from LinkedIn</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium text-white">Marketing Emails</p>
              <p className="text-sm text-white/70">Receive tips and product updates</p>
            </div>
            <Switch />
          </div>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card className="p-6 space-y-6 border-red-500/20 bg-red-500/5 backdrop-blur-sm">
        <div className="space-y-2">
          <h2 className="text-xl font-bold flex items-center gap-2 text-red-400">
            <Trash2 className="w-5 h-5" />
            Danger Zone
          </h2>
          <p className="text-sm text-white/70">Irreversible actions</p>
        </div>

        <Separator className="bg-red-500/20" />

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="font-medium text-white">Delete Account</p>
              <p className="text-sm text-white/70">Permanently delete your account and all data</p>
            </div>
            <Button variant="destructive" size="sm">
              Delete Account
            </Button>
          </div>
        </div>
      </Card>
    </>
  )
}
