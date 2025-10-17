"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ConsistentHeader } from "@/components/consistent-header"
import { 
  ArrowLeft, 
  RefreshCw, 
  CheckCircle, 
  AlertCircle,
  ExternalLink,
  Calendar,
  Download,
  Upload,
  Database,
  Link as LinkIcon,
  Code
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function SyncPage() {
  const [syncingSource, setSyncingSource] = useState<string | null>(null)
  const [syncResults, setSyncResults] = useState<Record<string, any>>({})

  const dataSources = [
    {
      name: "LinkedIn",
      status: "connected",
      lastSync: "2 hours ago",
      itemsCount: 8,
      description: "Professional experience, education, and skills",
      icon: LinkIcon,
      color: "bg-blue-500",
      features: ["Work Experience", "Education", "Skills", "Certifications"]
    },
    {
      name: "GitHub",
      status: "connected",
      lastSync: "1 day ago",
      itemsCount: 3,
      description: "Projects, repositories, and contributions",
      icon: Code,
      color: "bg-gray-800",
      features: ["Projects", "Repositories", "Contributions", "Skills"]
    },
    {
      name: "Resume PDF",
      status: "not_connected",
      lastSync: null,
      itemsCount: 0,
      description: "Upload your existing resume for parsing",
      icon: Upload,
      color: "bg-red-500",
      features: ["Work Experience", "Education", "Skills", "Projects"]
    },
    {
      name: "Manual Entry",
      status: "available",
      lastSync: null,
      itemsCount: 1,
      description: "Add components manually",
      icon: Database,
      color: "bg-green-500",
      features: ["Custom Components", "Full Control", "Immediate Availability"]
    }
  ]

  const handleSync = async (sourceName: string) => {
    setSyncingSource(sourceName)
    
    // Simulate sync process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Mock sync results
    setSyncResults(prev => ({
      ...prev,
      [sourceName]: {
        success: true,
        newItems: Math.floor(Math.random() * 5) + 1,
        updatedItems: Math.floor(Math.random() * 3),
        errors: []
      }
    }))
    
    setSyncingSource(null)
  }

  const handleConnect = async (sourceName: string) => {
    // Simulate connection process
    console.log(`Connecting to ${sourceName}...`)
  }

  return (
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
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="outline"
                size="sm"
                className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                asChild
              >
                <Link href="/components">
                  <ArrowLeft className="w-3 h-3 mr-1" />
                  BACK
                </Link>
              </Button>
              <div className="h-6 w-px bg-black/20" />
              <h1 className="font-serif text-4xl md:text-5xl text-black">
                Sync Data Sources
              </h1>
            </div>
            <p className="text-lg text-black/80 max-w-2xl">
              Connect and sync your professional data from various sources to keep your component library up to date.
            </p>
          </div>

          {/* Sync Status Overview */}
          <Card className="mb-8 border-2 border-black bg-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-black">Sync Overview</CardTitle>
              <CardDescription className="text-black/70">
                Current status of all your data sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">
                    {dataSources.filter(s => s.status === "connected").length}
                  </div>
                  <div className="text-sm text-black/70">Connected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">
                    {dataSources.reduce((sum, s) => sum + s.itemsCount, 0)}
                  </div>
                  <div className="text-sm text-black/70">Total Items</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">
                    {dataSources.filter(s => s.status === "connected").length > 0 ? "2h" : "—"}
                  </div>
                  <div className="text-sm text-black/70">Last Sync</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-black mb-1">
                    {Object.keys(syncResults).length}
                  </div>
                  <div className="text-sm text-black/70">Recent Syncs</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Sources */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {dataSources.map((source) => {
              const Icon = source.icon
              const isConnected = source.status === "connected"
              const isSyncing = syncingSource === source.name
              const syncResult = syncResults[source.name]
              
              return (
                <Card 
                  key={source.name} 
                  className={`border-2 border-black bg-white/10 backdrop-blur-sm ${
                    isConnected ? "hover:border-orange-accent/60" : ""
                  } transition-colors`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 ${source.color} rounded-lg flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-black">{source.name}</CardTitle>
                          <div className="flex items-center gap-2">
                            {isConnected ? (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-orange-500" />
                            )}
                            <span className="text-sm text-black/70 capitalize">
                              {source.status.replace("_", " ")}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {isConnected && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSync(source.name)}
                          disabled={isSyncing}
                          className="font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                        >
                          {isSyncing ? (
                            <>
                              <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                              SYNCING...
                            </>
                          ) : (
                            <>
                              <RefreshCw className="w-3 h-3 mr-1" />
                              SYNC
                            </>
                          )}
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-black/80">{source.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-black/70">Items synced:</span>
                        <span className="font-mono text-black">{source.itemsCount}</span>
                      </div>
                      {source.lastSync && (
                        <div className="flex justify-between text-sm">
                          <span className="text-black/70">Last sync:</span>
                          <span className="font-mono text-black">{source.lastSync}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-black">Features:</div>
                      <div className="flex flex-wrap gap-1">
                        {source.features.map((feature, index) => (
                          <Badge 
                            key={index}
                            variant="secondary" 
                            className="font-mono text-xs bg-black/20 text-black"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Sync Results */}
                    {syncResult && (
                      <div className="border-t border-black/20 pt-4">
                        <div className="text-sm font-medium text-green-600 mb-2">Sync Complete!</div>
                        <div className="space-y-1 text-sm text-black/70">
                          <div className="flex justify-between">
                            <span>New items:</span>
                            <span className="font-mono text-green-600">+{syncResult.newItems}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Updated items:</span>
                            <span className="font-mono text-blue-600">~{syncResult.updatedItems}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {!isConnected && source.name !== "Manual Entry" && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleConnect(source.name)}
                        className="w-full font-mono text-xs border-black/40 hover:bg-black/10 text-white"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        CONNECT {source.name.toUpperCase()}
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Terminal Section */}
          <section className="relative py-20 bg-terminal-bg">
            {/* Blinking Cursors */}
            {Array.from({ length: 6 }, (_, i) => (
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
                  SYNC INTELLIGENCE
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-white text-balance">
                  Smart Data Synchronization
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Our AI automatically categorizes and optimizes your professional data from multiple sources, 
                  ensuring your CV components are always up-to-date and perfectly formatted.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <Download className="w-8 h-8 text-orange-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Auto-Import</h3>
                    <p className="text-sm text-white/80">
                      Automatically import and categorize data from LinkedIn, GitHub, and other platforms
                    </p>
                  </div>
                  
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <RefreshCw className="w-8 h-8 text-orange-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Real-time Sync</h3>
                    <p className="text-sm text-white/80">
                      Keep your components updated with the latest information from your connected sources
                    </p>
                  </div>
                  
                  <div className="border-2 border-foreground/40 bg-background/50 backdrop-blur-sm p-6">
                    <Database className="w-8 h-8 text-orange-accent mx-auto mb-4" />
                    <h3 className="font-semibold text-white mb-2">Smart Organization</h3>
                    <p className="text-sm text-white/80">
                      AI-powered categorization and tagging for better component management
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
