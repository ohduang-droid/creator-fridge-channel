import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Contact Us</h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Get in touch with our team
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Email</CardTitle>
                <CardDescription>
                  Send us an email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:hello@fridgechannel.com" 
                  className="text-primary hover:underline"
                >
                  hello@fridgechannel.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule a Call</CardTitle>
                <CardDescription>
                  Book a meeting with us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a 
                  href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting" 
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Book a Meeting
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>General Inquiries</CardTitle>
                <CardDescription>
                  Have questions? We're here to help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Whether you're interested in starting a pilot program, have questions about our services, or just want to learn more, we'd love to hear from you.
                </p>
                <p className="text-muted-foreground">
                  Reach out via email or schedule a call to discuss how Fridge Channel can help your organization.
                </p>
              </CardContent>
            </Card>
          </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}


