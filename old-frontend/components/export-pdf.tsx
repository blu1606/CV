"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, Loader2, TriangleAlert } from "lucide-react"

export function ExportPDF() {
  const [open, setOpen] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    if (open && !isError) {
      timer = setTimeout(() => {
        setOpen(false)
      }, 1800)
    }
    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [open, isError])

  return (
    <>
      <Button size="sm" className="gap-2" onClick={() => { setIsError(false); setOpen(true) }}>
        <Download className="w-4 h-4" />
        <span className="hidden sm:inline">Export PDF</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{isError ? "Could not generate PDF" : "Generating Your PDF..."}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            {isError ? (
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                <TriangleAlert className="w-5 h-5" />
                <span className="text-sm">Please try again.</span>
              </div>
            ) : (
              <div className="flex items-center gap-3 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">Preparing a professional, ATS-friendly PDF…</span>
              </div>
            )}
          </div>
          <div className="flex items-center justify-end gap-2">
            {!isError && (
              <Button variant="ghost" size="sm" className="bg-transparent" onClick={() => setIsError(true)}>
                Simulate error
              </Button>
            )}
            <Button variant="outline" size="sm" className="bg-transparent" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}


