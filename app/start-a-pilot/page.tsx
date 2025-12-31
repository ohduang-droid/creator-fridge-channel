import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { PilotFormSection } from "@/components/pilot-form-section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StartAPilotPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">Start a Pilot</h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Get started with Fridge Channel today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              Fill out the form below to begin your Fridge Channel pilot program. We'll help you set up your NFC magnets and get your content channel running.
            </p>
          </div>

          {/* Pilot Form Section */}
          <PilotFormSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-center text-muted-foreground">
              © Fridge Channel 
            </p>
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link href="/" className="text-sm hover:underline text-muted-foreground">
                Home
              </Link>
              <Link href="/about-us" className="text-sm hover:underline text-muted-foreground">
                Our Story
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}


