"use client";

import { Navigation } from "@/components/navigation"
import { SiteFooter } from "@/components/site-footer"

export default function DTBrandsPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">DTC Brands</h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Content will be added here */}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

