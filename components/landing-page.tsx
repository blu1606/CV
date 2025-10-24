"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Target, Sparkles, FileText, BarChart3, Brain } from "lucide-react"
import Link from "next/link"
import { LinkedInSignIn } from "@/components/linkedin-signin"
import { useEffect } from "react"

export function LandingPage() {
  useEffect(() => {
    const texts = [
      "My name is Bob",
      "Give me the job", 
      "I need money chop chop"
    ];

    function typeText(elementId: string, text: string, delay = 0, callback?: () => void) {
      const el = document.getElementById(elementId);
      if (!el) return;
      
      setTimeout(() => {
        let i = 0;
        el.textContent = '';
        el.classList.add('typing');
        const interval = setInterval(() => {
          el.textContent += text[i];
          i++;
          if (i === text.length) {
            clearInterval(interval);
            el.classList.remove('typing');
            if (callback) callback();
          }
        }, 100);
      }, delay);
    }

    function startTypingSequence() {
      // Clear all text first
      document.getElementById("line1")!.textContent = '';
      document.getElementById("line2")!.textContent = '';
      document.getElementById("line3")!.textContent = '';
      
      // Start typing sequence
      typeText("line1", texts[0], 0, () => {
        typeText("line2", texts[1], 500, () => {
          typeText("line3", texts[2], 500, () => {
            // Restart the sequence after a pause
            setTimeout(() => {
              startTypingSequence();
            }, 2000);
          });
        });
      });
    }

    // Start the initial typing sequence
    startTypingSequence();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden video-content-with-scroll">
      {/* Scattered pixelated elements */}
      <div className="pixel-scatter pixel-scatter-1">
        <div className="pixel-plus"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-2">
        <div className="pixel-x"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-3">
        <div className="pixel-plus"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-4">
        <div className="pixel-x"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-5">
        <div className="pixel-arrow"></div>
      </div>
      <div className="pixel-scatter pixel-scatter-6">
        <div className="pixel-heart"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-white/20 sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="pixel-plus"></div>
            <span className="font-bold text-xl text-white transform -rotate-2">magiCV</span>
          </div>
          <LinkedInSignIn />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex items-center px-8 sm:px-12 lg:px-16 relative">
        <div className="max-w-7xl text-left space-y-2 py-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              <span className="glitch-text" data-text="AI VIẾT CV GIÚP BẠN?">AI VIẾT CV GIÚP BẠN?</span>
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight relative -mt-3">
              AI VIẾT CV GIÚP BẠN.
              <img src="/dash.png" alt="dash" className="absolute -bottom-7 left-48 w-full h-4 object-contain" />
            </h2>
            <p className="text-sm text-gray-300 max-w-2xl font-mono mt-5">
              From PiX.stdio | Da Nang, Vietnam
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 pt-2">
            <LinkedInSignIn />
            <LinkedInSignIn variant="pink" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        {/* Background layer */}
        <div className="absolute inset-0 bg-[#ff5f94] opacity-100"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Big line */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold text-black leading-tight">
              Let magiCV earn your dream job!
            </h2>
          </div>
          
          {/* Gif and CV box section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
            <div className="flex-shrink-0">
              <img src="/tired-office.gif" alt="Tired office worker" className="w-64 h-64 object-cover rounded-lg" />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-black max-w-md">
              <div className="space-y-4">
                <h3 className="text-black font-bold text-xl text-left mb-4">Awesome CV</h3>
                <div className="text-black font-mono text-lg">
                  <span className="typing-text" id="line1"></span>
                </div>
                <div className="text-black font-mono text-lg">
                  <span className="typing-text" id="line2"></span>
                </div>
                <div className="text-black font-mono text-lg">
                  <span className="typing-text" id="line3"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-black bg-transparent hover:border-gray-600 transition-colors relative">
              <FileText className="mx-auto mb-4 w-12 h-12 text-black" />
              <h3 className="font-bold mb-4 text-black text-xl">One-Click Generation</h3>
              <p className="text-black font-mono">Paste a job description and get a tailored CV instantly</p>
            </div>
            <div className="p-8 border-2 border-black bg-transparent hover:border-gray-600 transition-colors relative">
              <BarChart3 className="mx-auto mb-4 w-12 h-12 text-black" />
              <h3 className="font-bold mb-4 text-black text-xl">Match Score</h3>
              <p className="text-black font-mono">See how well your CV matches the job requirements</p>
            </div>
            <div className="p-8 border-2 border-black bg-transparent hover:border-gray-600 transition-colors relative">
              <Brain className="mx-auto mb-4 w-12 h-12 text-black" />
              <h3 className="font-bold mb-4 text-black text-xl">AI-Powered</h3>
              <p className="text-black font-mono">Powered by advanced AI to highlight your best qualities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-mono">
              Join thousands of professionals who have already created their perfect CV with magiCV
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <LinkedInSignIn />
          </div>
        </div>
      </section>
    </div>
  )
}
