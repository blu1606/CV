"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { ConsistentHeader } from "@/components/consistent-header"
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  Github, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Bell,
  Shield,
  CreditCard,
  Download,
  Trash2,
  Edit,
  Save,
  Eye,
  EyeOff,
  Key,
  Database,
  Settings as SettingsIcon,
  LogOut
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function SettingsPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    marketing: true,
    sync: true
  })

  // Mock user data - in real app this would come from API
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    bio: "Senior Software Engineer with 5+ years of experience in full-stack development. Passionate about building scalable applications and mentoring junior developers.",
    avatar: "/placeholder-user.jpg"
  }

  const dataSources = [
    {
      name: "LinkedIn",
      status: "connected",
      lastSync: "2 hours ago",
      itemsCount: 12,
      icon: Linkedin,
      color: "text-blue-600"
    },
    {
      name: "GitHub",
      status: "connected", 
      lastSync: "1 day ago",
      itemsCount: 8,
      icon: Github,
      color: "text-gray-800"
    },
    {
      name: "Manual Entry",
      status: "available",
      lastSync: null,
      itemsCount: 3,
      icon: Database,
      color: "text-gray-600"
    }
  ]

  const handleSyncData = async (source: string) => {
    // Simulate sync
    console.log(`Syncing ${source}...`)
  }

  const handleDisconnectSource = async (source: string) => {
    // Simulate disconnect
    console.log(`Disconnecting ${source}...`)
  }

  const handleSaveProfile = () => {
    // Simulate save
    console.log("Saving profile...")
    setIsEditing(false)
  }

  const handleLogout = () => {
    // Simulate logout
    console.log("Logging out...")
  }

  return (
<<<<<<< HEAD
    <div className="min-h-screen relative">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/galaxy.mp4" type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="relative z-10">
        <ConsistentHeader />
        
        <main className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-black mb-4">
              Account Settings
            </h1>
            <p className="text-lg text-black/80 max-w-2xl">
              Manage your profile, data sources, and preferences to optimize your magiCV experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Settings Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Profile Information */}
              <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-black">
                        <User className="w-5 h-5 text-orange-accent" />
                        Profile Information
                      </CardTitle>
                      <CardDescription className="text-black/70">
                        Update your personal information and professional details
                      </CardDescription>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                      className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                    >
                      {isEditing ? (
                        <>
                          <EyeOff className="w-3 h-3 mr-1" />
                          CANCEL
                        </>
                      ) : (
                        <>
                          <Edit className="w-3 h-3 mr-1" />
                          EDIT
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 border-2 border-orange-accent rounded-full overflow-hidden">
                      <img 
                        src={userProfile.avatar} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-black">{userProfile.name}</h3>
                      <p className="text-black/70">{userProfile.email}</p>
                      <Badge variant="outline" className="font-mono text-xs border-orange-accent/60 text-orange-accent mt-2">
                        PREMIUM USER
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-mono text-black">
                        FULL NAME
                      </Label>
                      <Input
                        id="name"
                        value={userProfile.name}
                        disabled={!isEditing}
                        className="border-2 border-black/40 bg-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-mono text-black">
                        EMAIL ADDRESS
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={userProfile.email}
                        disabled={!isEditing}
                        className="border-2 border-black/40 bg-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-mono text-black">
                        PHONE NUMBER
                      </Label>
                      <Input
                        id="phone"
                        value={userProfile.phone}
                        disabled={!isEditing}
                        className="border-2 border-black/40 bg-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="text-sm font-mono text-black">
                        LOCATION
                      </Label>
                      <Input
                        id="location"
                        value={userProfile.location}
                        disabled={!isEditing}
                        className="border-2 border-black/40 bg-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="website" className="text-sm font-mono text-black">
                        WEBSITE
                      </Label>
                      <Input
                        id="website"
                        value={userProfile.website}
                        disabled={!isEditing}
                        className="border-2 border-black/40 bg-white/20 text-white"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio" className="text-sm font-mono text-black">
                        BIO
                      </Label>
                      <Textarea
                        id="bio"
                        value={userProfile.bio}
                        disabled={!isEditing}
                        className="min-h-[100px] border-2 border-black/40 bg-white/20 text-white"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex gap-2 pt-4">
                      <Button
                        onClick={handleSaveProfile}
                        className="font-mono text-sm bg-orange-accent text-background hover:bg-orange-accent/90 border-0"
                      >
                        <Save className="w-4 h-4 mr-2" />
                        SAVE CHANGES
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Data Sources */}
              <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
                <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-black">
                        <Database className="w-5 h-5 text-orange-accent" />
                        Data Sources
                      </CardTitle>
                      <CardDescription className="text-black/70">
                    Manage your connected accounts and data synchronization
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {dataSources.map((source) => {
                    const Icon = source.icon
                    return (
                      <div key={source.name} className="flex items-center justify-between p-4 border-2 border-black/20 rounded-lg bg-white/5">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 border-2 border-black/40 flex items-center justify-center">
                            <Icon className={`w-5 h-5 ${source.color}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-black">{source.name}</h3>
                            <div className="flex items-center gap-2">
                              {source.status === "connected" ? (
                                <CheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <AlertCircle className="w-4 h-4 text-orange-500" />
                              )}
                              <span className="text-sm text-black/70 capitalize">
                                {source.status.replace("_", " ")}
                              </span>
                              {source.lastSync && (
                                <>
                                  <span className="text-black/50">•</span>
                                  <span className="text-sm text-black/70 font-mono">
                                    {source.lastSync}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          {source.status === "connected" && (
                            <>
                              <Badge variant="outline" className="font-mono text-xs border-black/40 text-white">
                                {source.itemsCount} ITEMS
                              </Badge>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleSyncData(source.name)}
                                className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                              >
                                <RefreshCw className="w-3 h-3 mr-1" />
                                SYNC
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleDisconnectSource(source.name)}
                                className="font-mono text-xs border-destructive/40 text-destructive hover:bg-destructive/10"
                              >
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </>
                          )}
                          {source.status === "available" && (
                            <Button
                              size="sm"
                              className="font-mono text-xs bg-orange-accent text-background hover:bg-orange-accent/90 border-0"
                            >
                              <ExternalLink className="w-3 h-3 mr-1" />
                              CONNECT
                            </Button>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
                <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-black">
                        <Bell className="w-5 h-5 text-orange-accent" />
                        Notifications
                      </CardTitle>
                      <CardDescription className="text-black/70">
                    Choose how you want to be notified about updates and activities
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Email Notifications</h4>
                      <p className="text-sm text-black/70">Receive updates via email</p>
                    </div>
                    <Switch
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, email: checked }))}
                      className="data-[state=checked]:bg-black data-[state=checked]:[&>span]:bg-orange-accent"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Push Notifications</h4>
                      <p className="text-sm text-black/70">Browser notifications for real-time updates</p>
                    </div>
                    <Switch
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, push: checked }))}
                      className="data-[state=checked]:bg-black data-[state=checked]:[&>span]:bg-orange-accent"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Marketing Updates</h4>
                      <p className="text-sm text-black/70">Product updates and feature announcements</p>
                    </div>
                    <Switch
                      checked={notifications.marketing}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, marketing: checked }))}
                      className="data-[state=checked]:bg-black data-[state=checked]:[&>span]:bg-orange-accent"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Sync Alerts</h4>
                      <p className="text-sm text-black/70">Notifications when data sync completes or fails</p>
                    </div>
                    <Switch
                      checked={notifications.sync}
                      onCheckedChange={(checked) => setNotifications(prev => ({ ...prev, sync: checked }))}
                      className="data-[state=checked]:bg-black data-[state=checked]:[&>span]:bg-orange-accent"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Actions */}
              <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-black">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                    asChild
                  >
                    <Link href="/dashboard">
                      <SettingsIcon className="w-3 h-3 mr-2" />
                      BACK TO DASHBOARD
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                    asChild
                  >
                    <Link href="/components">
                      <Database className="w-3 h-3 mr-2" />
                      MANAGE COMPONENTS
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                    asChild
                  >
                    <Link href="/pricing">
                      <CreditCard className="w-3 h-3 mr-2" />
                      BILLING & PLANS
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Account Status */}
              <Card className="border-2 border-orange-accent/60 bg-orange-accent/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-black">Account Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/70">Plan</span>
                    <Badge className="bg-orange-accent text-background font-mono text-xs">
                      PREMIUM
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/70">CVs Created</span>
                    <span className="font-mono text-sm text-black">2 / ∞</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/70">Next Billing</span>
                    <span className="font-mono text-sm text-black">Feb 15, 2024</span>
                  </div>
                  
                  <Separator className="bg-black/20" />
                  
                  <Button
                    variant="outline"
                    className="w-full font-mono text-xs border-orange-accent/60 text-orange-accent hover:bg-orange-accent/20"
                    asChild
                  >
                    <Link href="/pricing">
                      <CreditCard className="w-3 h-3 mr-2" />
                      MANAGE BILLING
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Security */}
              <Card className="border-2 border-black bg-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    <Shield className="w-4 h-4 text-orange-accent" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                  >
                    <Key className="w-3 h-3 mr-2" />
                    CHANGE PASSWORD
                  </Button>
                  
                  <Button
                    variant="outline"
                    className="w-full justify-start font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                  >
                    <Download className="w-3 h-3 mr-2" />
                    EXPORT DATA
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="w-full justify-start font-mono text-xs bg-orange-accent text-black hover:bg-orange-accent/90 border-orange-accent"
                  >
                    <LogOut className="w-3 h-3 mr-2" />
                    LOGOUT
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Terminal Section */}
          <section className="relative py-20 bg-terminal-bg mt-12">
            {/* Blinking Cursors */}
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute w-px h-5 bg-orange-500 terminal-cursor"
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 70 + 15}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <div className="inline-block px-4 py-1 bg-orange-accent text-background text-xs font-mono mb-4">
                  ACCOUNT MANAGEMENT
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white text-balance">
                  Your Data, Your Control
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  We believe in transparency and user control. Manage your data, privacy settings, 
                  and account preferences all in one place.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <Shield className="w-8 h-8 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Secure & Private</h3>
                    <p className="text-sm text-white/80">
                      Your data is encrypted and never shared without your explicit consent.
                    </p>
                  </div>
                  
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <Download className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Export Anytime</h3>
                    <p className="text-sm text-white/80">
                      Download your data in standard formats whenever you need it.
                    </p>
                  </div>
                  
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <Database className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Sync Control</h3>
                    <p className="text-sm text-white/80">
                      Choose which data sources to connect and when to sync your information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
