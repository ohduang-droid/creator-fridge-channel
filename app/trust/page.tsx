import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"

export default function TrustPage() {
  const sections: Array<{ title: string; items: string[] }> = [
    {
      title: "1. Service Overview",
      items: [
        "What does Fridge Channel deliver, in one sentence?",
        "What is hosted by FC vs. what remains on the customer’s systems?",
        "What happens after a tap/scan (end-to-end flow)?",
        "What is the “tap-to-play” experience (preview/listen/landing/CTA routing)?",
        "Is “one primary CTA” a hard rule? When can it vary by cohort?",
        "What is explicitly out of scope (ads, acquisition, payment processing, retargeting, person-level tracking, etc.)?",
        "What are the standard pilot deliverables (mock, configuration, reporting sample)?",
        "Can the destination be 100% customer-owned pages (giving portal / campaign page / storefront)?",
        "What does the customer need to provide (minimum inputs)?",
      ],
    },
    {
      title: "2. Privacy & Data Boundaries",
      items: [
        "What data does FC not collect (explicit “No PII” list)?",
        "What data does FC collect/process to operate the service (high-level categories)?",
        "Does FC require any donor/member/subscriber lists?",
        "Does FC process IP address and device/browser information? For what purposes?",
        "Does FC create or maintain end-user profiles?",
        "Does FC perform identity resolution or cross-device matching?",
        "Does FC sell data or use data for advertising?",
        "Is any data used for model training or secondary purposes (beyond service delivery/security/support)?",
        "Does the service target or profile minors?",
        "Where is data stored (regions), and how are cross-border transfers handled (if applicable)?",
        "Is a DPA available? What is FC’s role (processor/controller) (as applicable)?",
      ],
    },
    {
      title: "3. Measurement Methodology & Attribution Limits",
      items: [
        "What events are recorded (event taxonomy)?",
        "What fields are included in event data (high-level)?",
        "How is “conversion/completion” defined for each plan type?",
        "What can be measured reliably, and what cannot?",
        "What are the attribution limits (what FC will not claim)?",
        "How does measurement work if the customer cannot provide a completion signal?",
        "Are test/control or A/B methods supported? Who sets them up and how?",
        "What does the pilot report look like (sample metrics/fields)?",
        "What is the reporting cadence and export format?",
        "What is the difference between validation-stage signals vs. pilot-stage outcomes?",
      ],
    },
    {
      title: "4. Cookies, Analytics & Tracking",
      items: [
        "Are cookies or similar technologies used? For what purposes?",
        "Which cookies are strictly necessary vs. optional (if applicable)?",
        "Are third-party analytics tools used? Which ones?",
        "Are any third-party ad pixels used?",
        "Is cross-site tracking or retargeting performed?",
        "Are consent notices/banners provided where required? Who controls configuration?",
        "Is there an opt-out mechanism (where applicable)?",
      ],
    },
    {
      title: "5. Security Overview",
      items: [
        "What encryption is used (in transit / at rest), at a high level?",
        "How is access controlled (roles, least privilege, admin restrictions)?",
        "What logging and monitoring exists for security and reliability?",
        "What vulnerability management and patching processes are in place?",
        "How is tenant/customer data isolated (high-level)?",
        "Are backups and recovery processes in place (high-level)?",
        "Are security questionnaires (SIG/CAIQ) supported?",
        "Are any security attestations/certifications available (if applicable)?",
      ],
    },
    {
      title: "6. Subprocessors & Third-Party Providers",
      items: [
        "What categories of subprocessors are used (cloud, CDN, monitoring, support, etc.)?",
        "Is a subprocessor list available? Is it public or provided upon request?",
        "How are subprocessors contractually bound (confidentiality/security obligations)?",
        "How are subprocessor changes communicated?",
        "Can customers object to specific subprocessors (if applicable)?",
        "Do subprocessors access any end-user event data or logs?",
      ],
    },
    {
      title: "7. Data Retention & Deletion",
      items: [
        "What is the default retention period by data type (logs/events/config/content)?",
        "How does deletion work upon termination?",
        "Can customers request early deletion? What is the process and SLA?",
        "How are backups handled in relation to deletion (delayed purge timelines)?",
        "What data must be retained for legal or operational reasons (if any)?",
      ],
    },
    {
      title: "8. Incident Management & Notification",
      items: [
        "What is the incident response process (detect → contain → remediate → review)?",
        "What qualifies as a notifiable incident?",
        "What notification timelines and channels apply?",
        "Is there an escalation path for urgent issues?",
        "Is there a public status page or customer notification mechanism (if applicable)?",
      ],
    },
    {
      title: "9. Brand Safety & Approvals",
      items: [
        "Who controls the destination URL and CTA?",
        "Who approves creative/content before it goes live?",
        "Can the experience be university-branded / white-labeled?",
        "How are incorrect, outdated, or non-compliant links/content handled (pause/takedown)?",
        "What safeguards exist to reduce perceived intrusion (opt-in/user-initiated behavior)?",
        "Are category exclusions or brand adjacency controls supported (if applicable)?",
      ],
    },
    {
      title: "10. Logistics & Timelines",
      items: [
        "Where does FC ship (to the organization vs. directly to end users)?",
        "What is the standard pilot timeline (sample → approval → production → shipment)?",
        "Who is responsible for distribution to end users?",
        "How are international shipping and customs handled (responsibility boundaries)?",
        "How are delays, lost shipments, and exceptions handled?",
        "What operational inputs are required from the customer?",
      ],
    },
    {
      title: "11. QC & Replacement Policy",
      items: [
        "What quality checks are performed (high-level)?",
        "How is a defective item defined?",
        "What is the replacement process, timeline, and window?",
        "What replacement rates/allowances apply (if any)?",
        "Who covers shipping costs for replacements (if applicable)?",
        "How are batch-level issues handled (pause, rework, replacement)?",
      ],
    },
    {
      title: "12. Pilot Terms & Exit Criteria",
      items: [
        "What is the standard pilot scope (duration, scale, single-CTA rule)?",
        "What are success criteria vs. failure criteria in the pilot?",
        "What happens if outcomes are below expectations?",
        "What is the exit/termination process and what happens to remaining inventory?",
        "What happens to data after a pilot ends?",
        "What are the rules for expanding after the pilot (next cohort / next plan)?",
      ],
    },
    {
      title: "13. Conversion & Payment Responsibilities",
      items: [
        "Is FC a payment processor?",
        "Does FC store payment card information or payment credentials?",
        "Where does conversion occur (customer/third-party platforms)?",
        "Does FC receive any transaction details by default?",
        "How is “completion” measured when conversion happens off FC?",
      ],
    },
    {
      title: "14. Pricing & Commercial Terms",
      items: [
        "What is the pricing basis (per plan / per pilot / per unit / per active touchpoint)?",
        "What is included vs. excluded in pilot pricing (production, shipping, replacement, creative)?",
        "What are the payment terms (deposit, milestones, invoicing/PO)?",
        "Are nonprofit/public-institution terms available (if applicable)?",
        "How does pricing change for scale (tiering, volume, multi-plan bundles)?",
        "What are cancellation, rescheduling, and change-order terms?",
        "Are any discounts offered (annual prepay, multi-year, multi-campus) (if applicable)?",
      ],
    },
    {
      title: "15. Procurement Resources & Contact",
      items: [
        "What documents are available upon request (DPA, MSA/SOW templates, security overview, subprocessor list, cookie details)?",
        "What is the expected turnaround time for procurement/security questionnaires?",
        "What are the primary contact points for privacy, security, and support?",
        "What is the escalation contact for urgent issues?",
      ],
    },
    {
      title: "16. FAQ",
      items: [
        "Do you track household members or individuals?",
        "Do you need our donor/alumni/member lists?",
        "What does alumni see after scanning—can it be fully university-controlled?",
        "How do you prove impact, and what can’t you claim?",
        "What happens if results are weak—what’s the exit path?",
        "Is this intrusive—do you send emails/push notifications?",
        "Can NFC/QR be copied or abused—what safeguards exist?",
        "How long is data retained—can we request deletion?",
        "What does legal/procurement typically ask for?",
        "How does pricing work—what’s included and excluded?",
        "Who handles distribution—do you ship directly to end users?",
        "What happens if items fail—how does replacement work?",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F7F7F4] flex flex-col">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20 flex-1">
        <div className="max-w-5xl mx-auto">
          <header className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Trust Center</h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              <strong>Trust Center access is available for authorized clients.</strong>
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              If you’re evaluating a pilot and need materials for internal review, contact us and we’ll provide access. The sections and question checklist below show what’s covered.
            </p>

            <div className="pt-2">
              <Button asChild className="rounded-full px-8 w-[232px]">
                <a
                  href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </Button>
            </div>
          </header>

          <hr className="my-12 border-border/60" />

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">{section.title}</h2>
                <ul className="space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

const __legacyTrustPage = String.raw`
import Link from "next/link"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"

export default function TrustPage() {
  const sections: Array<{ title: string; items: string[] }> = [
    {
      title: "1) Service Overview",
      items: [
        "What does Fridge Channel deliver, in one sentence?",
        "What is hosted by FC vs. what remains on the customer’s systems?",
        "What happens after a tap/scan (end-to-end flow)?",
        "What is the “tap-to-play” experience (preview/listen/landing/CTA routing)?",
        "Is “one primary CTA” a hard rule? When can it vary by cohort?",
        "What is explicitly out of scope (ads, acquisition, payment processing, retargeting, person-level tracking, etc.)?",
        "What are the standard pilot deliverables (mock, configuration, reporting sample)?",
        "Can the destination be 100% customer-owned pages (giving portal / campaign page / storefront)?",
        "What does the customer need to provide (minimum inputs)?",
      ],
    },
    {
      title: "2) Privacy & Data Boundaries",
      items: [
        "What data does FC not collect (explicit “No PII” list)?",
        "What data does FC collect/process to operate the service (high-level categories)?",
        "Does FC require any donor/member/subscriber lists?",
        "Does FC process IP address and device/browser information? For what purposes?",
        "Does FC create or maintain end-user profiles?",
        "Does FC perform identity resolution or cross-device matching?",
        "Does FC sell data or use data for advertising?",
        "Is any data used for model training or secondary purposes (beyond service delivery/security/support)?",
        "Does the service target or profile minors?",
        "Where is data stored (regions), and how are cross-border transfers handled (if applicable)?",
        "Is a DPA available? What is FC’s role (processor/controller) (as applicable)?",
      ],
    },
    {
      title: "3) Measurement Methodology & Attribution Limits",
      items: [
        "What events are recorded (event taxonomy)?",
        "What fields are included in event data (high-level)?",
        "How is “conversion/completion” defined for each plan type?",
        "What can be measured reliably, and what cannot?",
        "What are the attribution limits (what FC will not claim)?",
        "How does measurement work if the customer cannot provide a completion signal?",
        "Are test/control or A/B methods supported? Who sets them up and how?",
        "What does the pilot report look like (sample metrics/fields)?",
        "What is the reporting cadence and export format?",
        "What is the difference between validation-stage signals vs. pilot-stage outcomes?",
      ],
    },
    {
      title: "4) Cookies, Analytics & Tracking",
      items: [
        "Are cookies or similar technologies used? For what purposes?",
        "Which cookies are strictly necessary vs. optional (if applicable)?",
        "Are third-party analytics tools used? Which ones?",
        "Are any third-party ad pixels used?",
        "Is cross-site tracking or retargeting performed?",
        "Are consent notices/banners provided where required? Who controls configuration?",
        "Is there an opt-out mechanism (where applicable)?",
      ],
    },
    {
      title: "5) Security Overview",
      items: [
        "What encryption is used (in transit / at rest), at a high level?",
        "How is access controlled (roles, least privilege, admin restrictions)?",
        "What logging and monitoring exists for security and reliability?",
        "What vulnerability management and patching processes are in place?",
        "How is tenant/customer data isolated (high-level)?",
        "Are backups and recovery processes in place (high-level)?",
        "Are security questionnaires (SIG/CAIQ) supported?",
        "Are any security attestations/certifications available (if applicable)?",
      ],
    },
    {
      title: "6) Subprocessors & Third-Party Providers",
      items: [
        "What categories of subprocessors are used (cloud, CDN, monitoring, support, etc.)?",
        "Is a subprocessor list available? Is it public or provided upon request?",
        "How are subprocessors contractually bound (confidentiality/security obligations)?",
        "How are subprocessor changes communicated?",
        "Can customers object to specific subprocessors (if applicable)?",
        "Do subprocessors access any end-user event data or logs?",
      ],
    },
    {
      title: "7) Data Retention & Deletion",
      items: [
        "What is the default retention period by data type (logs/events/config/content)?",
        "How does deletion work upon termination?",
        "Can customers request early deletion? What is the process and SLA?",
        "How are backups handled in relation to deletion (delayed purge timelines)?",
        "What data must be retained for legal or operational reasons (if any)?",
      ],
    },
    {
      title: "8) Incident Management & Notification",
      items: [
        "What is the incident response process (detect → contain → remediate → review)?",
        "What qualifies as a notifiable incident?",
        "What notification timelines and channels apply?",
        "Is there an escalation path for urgent issues?",
        "Is there a public status page or customer notification mechanism (if applicable)?",
      ],
    },
    {
      title: "9) Brand Safety & Approvals",
      items: [
        "Who controls the destination URL and CTA?",
        "Who approves creative/content before it goes live?",
        "Can the experience be university-branded / white-labeled?",
        "How are incorrect, outdated, or non-compliant links/content handled (pause/takedown)?",
        "What safeguards exist to reduce perceived intrusion (opt-in/user-initiated behavior)?",
        "Are category exclusions or brand adjacency controls supported (if applicable)?",
      ],
    },
    {
      title: "10) Logistics & Timelines",
      items: [
        "Where does FC ship (to the organization vs. directly to end users)?",
        "What is the standard pilot timeline (sample → approval → production → shipment)?",
        "Who is responsible for distribution to end users?",
        "How are international shipping and customs handled (responsibility boundaries)?",
        "How are delays, lost shipments, and exceptions handled?",
        "What operational inputs are required from the customer?",
      ],
    },
    {
      title: "11) QC & Replacement Policy",
      items: [
        "What quality checks are performed (high-level)?",
        "How is a defective item defined?",
        "What is the replacement process, timeline, and window?",
        "What replacement rates/allowances apply (if any)?",
        "Who covers shipping costs for replacements (if applicable)?",
        "How are batch-level issues handled (pause, rework, replacement)?",
      ],
    },
    {
      title: "12) Pilot Terms & Exit Criteria",
      items: [
        "What is the standard pilot scope (duration, scale, single-CTA rule)?",
        "What are success criteria vs. failure criteria in the pilot?",
        "What happens if outcomes are below expectations?",
        "What is the exit/termination process and what happens to remaining inventory?",
        "What happens to data after a pilot ends?",
        "What are the rules for expanding after the pilot (next cohort / next plan)?",
      ],
    },
    {
      title: "13) Conversion & Payment Responsibilities",
      items: [
        "Is FC a payment processor?",
        "Does FC store payment card information or payment credentials?",
        "Where does conversion occur (customer/third-party platforms)?",
        "Does FC receive any transaction details by default?",
        "How is “completion” measured when conversion happens off FC?",
      ],
    },
    {
      title: "14) Pricing & Commercial Terms",
      items: [
        "What is the pricing basis (per plan / per pilot / per unit / per active touchpoint)?",
        "What is included vs. excluded in pilot pricing (production, shipping, replacement, creative)?",
        "What are the payment terms (deposit, milestones, invoicing/PO)?",
        "Are nonprofit/public-institution terms available (if applicable)?",
        "How does pricing change for scale (tiering, volume, multi-plan bundles)?",
        "What are cancellation, rescheduling, and change-order terms?",
        "Are any discounts offered (annual prepay, multi-year, multi-campus) (if applicable)?",
      ],
    },
    {
      title: "15) Procurement Resources & Contact",
      items: [
        "What documents are available upon request (DPA, MSA/SOW templates, security overview, subprocessor list, cookie details)?",
        "What is the expected turnaround time for procurement/security questionnaires?",
        "What are the primary contact points for privacy, security, and support?",
        "What is the escalation contact for urgent issues?",
      ],
    },
    {
      title: "16) FAQ",
      items: [
        "Do you track household members or individuals?",
        "Do you need our donor/alumni/member lists?",
        "What does alumni see after scanning—can it be fully university-controlled?",
        "How do you prove impact, and what can’t you claim?",
        "What happens if results are weak—what’s the exit path?",
        "Is this intrusive—do you send emails/push notifications?",
        "Can NFC/QR be copied or abused—what safeguards exist?",
        "How long is data retained—can we request deletion?",
        "What does legal/procurement typically ask for?",
        "How does pricing work—what’s included and excluded?",
        "Who handles distribution—do you ship directly to end users?",
        "What happens if items fail—how does replacement work?",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />

      <main className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <header className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">Trust Center</h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              <strong>Trust Center access is available for authorized clients.</strong>
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              If you’re evaluating a pilot and need materials for internal review, contact us and we’ll provide access. The sections and question checklist below show what’s covered.
            </p>

            <div className="pt-2">
              <Button asChild className="rounded-full px-8">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </header>

          <hr className="my-12 border-border/60" />

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold">{section.title}</h2>
                <ul className="space-y-2 text-base md:text-lg text-muted-foreground leading-relaxed list-disc pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LogoCarousel } from "@/components/ui/logo-carousel"
import { 
  Play, 
  MousePointerClick, 
  BarChart3, 
  Shield, 
  Ban, 
  Lock, 
  CreditCard, 
  Wallet, 
  UserX, 
  Database, 
  Users, 
  Activity, 
  Cookie, 
  Eye, 
  EyeOff, 
  Monitor, 
  Network, 
  Building2, 
  Trash2, 
  Archive, 
  AlertTriangle, 
  Bell, 
  Mail, 
  FileText 
} from "lucide-react"

export default function TrustPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-balance">Trust Center</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* 1. Service Overview */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">1. Service Overview</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC transforms customer-provided content links and configuration into a hosted "tap-to-play" experience, and routes users to a single, defined next step (order / subscribe / donate / RSVP, etc.).
              Customers distribute through their existing channels (stores, shipments, mail, events), and FC supports outcome measurement at an aggregated level.
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Play className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">FC hosts and delivers</h3>
                      <p className="text-sm text-muted-foreground">The playable experience (preview &amp; listen)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <MousePointerClick className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">One primary CTA</h3>
                      <p className="text-sm text-muted-foreground">Per audience to reduce friction</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <BarChart3 className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Aggregation-first measurement</h3>
                      <p className="text-sm text-muted-foreground">Customers can validate via test vs. control methods</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 2. Data Processing Commitments and Scope Limitations */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">2. Data Processing Commitments and Scope Limitations</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC is designed to be effective without collecting direct identity information about end users. FC does not run cross-site ad tracking or retargeting.
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">No direct identifiers</h3>
                      <p className="text-sm text-muted-foreground">No collection/processing of direct identifiers (name, email, phone number, postal address, student/member IDs, etc.)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Ban className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">No third-party pixels</h3>
                      <p className="text-sm text-muted-foreground">No third-party advertising pixels; no cross-site tracking or retargeting</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Lock className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">No secondary purposes</h3>
                      <p className="text-sm text-muted-foreground">FC does not use customer or end-user data for training or other secondary purposes (except as necessary to provide the service, security, compliance, and support)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 3. Conversion and Payment Responsibilities */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">3. Conversion and Payment Responsibilities</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC provides the content experience and routes users to the next step. Conversions occur on customer-controlled and/or third-party platforms.
              FC does not store payment card information or payment credentials.
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <CreditCard className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Not a payment processor</h3>
                      <p className="text-sm text-muted-foreground">FC is not a payment processor</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Wallet className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">No payment storage</h3>
                      <p className="text-sm text-muted-foreground">No storage of payment card data or payment credentials</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <UserX className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">No individual details</h3>
                      <p className="text-sm text-muted-foreground">By default, FC does not receive donor identity or user-level transaction details tied to individuals</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 4. Data Categories Processed and Purpose of Processing */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">4. Data Categories Processed and Purpose of Processing</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC processes limited data to deliver the service, support aggregated measurement, and operate security. FC follows data minimization principles and prefers aggregated reporting.
            </p>
            <div className="space-y-4">
              <div className="space-y-6">
                <div>
                  <p className="text-base md:text-lg font-semibold text-foreground mb-4">Customer / Organization data</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="bg-white border border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-start space-y-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Users className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-foreground">Account administration</h3>
                          <p className="text-sm text-muted-foreground">Access control (admins, roles, permissions)</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-start space-y-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Database className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-foreground">Campaign configuration</h3>
                          <p className="text-sm text-muted-foreground">Tracks, CTA destination URLs, distribution/testing settings</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-start space-y-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <FileText className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-foreground">Content metadata</h3>
                          <p className="text-sm text-muted-foreground">Content links, titles, descriptions, thumbnails</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div>
                  <p className="text-base md:text-lg font-semibold text-foreground mb-4">End-user data (service delivery, security, and measurement)</p>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="bg-white border border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-start space-y-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Monitor className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-foreground">Technical/security logs</h3>
                          <p className="text-sm text-muted-foreground">May include IP addresses and basic device/browser information (for security, troubleshooting, and service delivery)</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-start space-y-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Activity className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-foreground">Usage events</h3>
                          <p className="text-sm text-muted-foreground">Views, plays, and taps/clicks (for aggregated measurement and service improvement)</p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white border border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex flex-col items-start space-y-3">
                          <div className="p-2 rounded-lg bg-blue-500/10">
                            <Shield className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-semibold text-foreground">Abuse prevention</h3>
                          <p className="text-sm text-muted-foreground">Signals as needed to protect service stability</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Cookies, Analytics, and Tracking Practices */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">5. Cookies, Analytics, and Tracking Practices</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC may use first-party cookies (or similar technologies) to maintain sessions, ensure functionality, support aggregated measurement, and prevent abuse.
              FC does not use third-party ad pixels and does not conduct cross-site ad tracking or retargeting. Where consent is required for non-essential cookies, FC provides appropriate notice and consent mechanisms (as applicable).
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Cookie className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">First-party cookies</h3>
                      <p className="text-sm text-muted-foreground">May be used for functionality / aggregated measurement / abuse prevention</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Ban className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">No third-party pixels</h3>
                      <p className="text-sm text-muted-foreground">No third-party ad pixels</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <EyeOff className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">No cross-site tracking</h3>
                      <p className="text-sm text-muted-foreground">No cross-site tracking or retargeting</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Eye className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Cookie consent</h3>
                      <p className="text-sm text-muted-foreground">(Where applicable) cookie notice and consent mechanisms</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 6. Information Security Controls (High-Level) */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">6. Information Security Controls (High-Level)</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC implements security controls commonly expected in enterprise procurement. This section describes control categories only and does not disclose details that could increase attack surface.
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Lock className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Encryption</h3>
                      <p className="text-sm text-muted-foreground">In transit and at rest (where applicable)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Access controls</h3>
                      <p className="text-sm text-muted-foreground">Least-privilege access controls and restricted administrative access</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Monitor className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Logging and monitoring</h3>
                      <p className="text-sm text-muted-foreground">For reliability and security detection</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Activity className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Vulnerability management</h3>
                      <p className="text-sm text-muted-foreground">Vulnerability management and patching processes</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Building2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Vendor security</h3>
                      <p className="text-sm text-muted-foreground">Vendor/subprocessor security practices</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Archive className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Backups and recovery</h3>
                      <p className="text-sm text-muted-foreground">Mechanisms to support continuity</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 7. Subprocessors and Third-Party Service Providers */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">7. Subprocessors and Third-Party Service Providers</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC may use subprocessors for infrastructure and operations (e.g., cloud hosting, CDN, monitoring, support ticketing). Subprocessors are used only as needed to provide and protect the service, and are contractually required to maintain appropriate confidentiality and security obligations.
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Network className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Limited subprocessors</h3>
                      <p className="text-sm text-muted-foreground">Limited to what is necessary to deliver and secure the service</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Contractual obligations</h3>
                      <p className="text-sm text-muted-foreground">Contractual security and confidentiality obligations</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Building2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Subprocessor list</h3>
                      <p className="text-sm text-muted-foreground">Published or available upon request (based on your approach)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 8. Data Retention and Deletion */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">8. Data Retention and Deletion</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC retains data only as long as necessary for service delivery, security operations, support, and legal obligations, and supports deletion workflows upon termination. Policy-level retention details can be provided upon request for procurement reviews.
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Archive className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Data minimization</h3>
                      <p className="text-sm text-muted-foreground">Data minimization and necessary retention</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Trash2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Deletion/cleanup</h3>
                      <p className="text-sm text-muted-foreground">Upon termination (subject to backups and legal retention requirements)</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Retention policy</h3>
                      <p className="text-sm text-muted-foreground">Details available upon request</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 9. Security Incident Management and Notification */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">9. Security Incident Management and Notification</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              FC maintains an incident response process to identify, contain, remediate, and review security events. If an incident is likely to materially impact customer data, FC will notify customers in accordance with applicable law and contractual obligations.
            </p>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <AlertTriangle className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Incident response</h3>
                      <p className="text-sm text-muted-foreground">Incident triage, response, and post-incident review</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Bell className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Customer notification</h3>
                      <p className="text-sm text-muted-foreground">Per law and contract</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* 10. Procurement Resources and Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">10. Procurement Resources and Contact</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              For procurement, legal, or security review requests, contact:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-base md:text-lg text-muted-foreground leading-relaxed">
              <li>Security &amp; Compliance: <strong className="font-semibold text-foreground">security@…</strong> (TBD)</li>
              <li>Privacy: <strong className="font-semibold text-foreground">privacy@…</strong> (TBD)</li>
              <li>Support: <strong className="font-semibold text-foreground">…</strong> (TBD)</li>
            </ul>
            <div className="space-y-4 mt-4">
              <p className="text-base md:text-lg font-semibold text-foreground">Available upon request (as applicable)</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">DPA</h3>
                      <p className="text-sm text-muted-foreground">Data Processing Agreement</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Building2 className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Subprocessor list</h3>
                      <p className="text-sm text-muted-foreground">List of third-party service providers</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Security overview</h3>
                      <p className="text-sm text-muted-foreground">Security controls and practices</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Cookie className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Cookie / tracking details</h3>
                      <p className="text-sm text-muted-foreground">Detailed cookie and tracking information</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <Network className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">SCC / TIA</h3>
                      <p className="text-sm text-muted-foreground">For cross-border transfers, if applicable</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-border/50">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-start space-y-3">
                      <div className="p-2 rounded-lg bg-blue-500/10">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-semibold text-foreground">Audit/attestation</h3>
                      <p className="text-sm text-muted-foreground">Materials (if applicable)</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="container mx-auto px-4 py-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
            <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4 mb-12">
                <p className="text-sm font-medium tracking-widest text-muted-foreground">
                  TRUSTED BY TEAMS FROM AROUND THE WORLD
                </p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-none">
                  The best are already here
                </h2>
              </div>
              <LogoCarousel 
                columns={2} 
                logos={[
                  { id: 1, name: "Dub", src: "https://www.prismui.tech/logo/dub.svg" },
                  { id: 2, name: "Supabase", src: "https://www.prismui.tech/logo/supabase.svg" },
                  { id: 3, name: "Vercel", src: "https://www.prismui.tech/logo/vercel.svg" },
                  { id: 4, name: "Resend", src: "https://www.prismui.tech/logo/resend.svg" },
                  { id: 5, name: "Shadcn", src: "https://www.prismui.tech/logo/shadcn.svg" },
                ]} 
              />
              </CardContent>
            </Card>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section id="faq" className="container mx-auto px-4 pt-10 pb-10 border-t border-border mt-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-5 md:gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">FAQ </h2>
              <p className="text-muted-foreground mt-4 text-balance text-lg">
                Quick answers to common questions about Fridge Channel.
              </p>
            </div>

            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    1) What exactly is "incremental Growth"?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Users with FC touch evidence who later become paid.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    2) If they pay later on desktop, does it count?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Yes. We attribute by touch → later paid, not by CTA click.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    3) Do you charge Retention if paid users never used FC?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      No. Retention billing requires touch evidence.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    4) Why does Retention start from period 11?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      To make it fair and debate-proof: we only monetize clearly extended lifetime.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    5) How do you handle annual plans?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Annual plans are converted into 12 equivalent billing periods; Retention applies from equivalent period 11.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    6) Refunds/chargebacks?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      If revenue is reversed, that period fee becomes $0; if after invoice, we issue a credit next invoice.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                    7) How do I verify you didn't overcharge?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground">
                      Audit any line item: it has a dashboard evidence link. No evidence, no bill.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-5xl mx-auto space-y-6">
            <p className="text-center text-muted-foreground">© Fridge Channel</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
`
void __legacyTrustPage

