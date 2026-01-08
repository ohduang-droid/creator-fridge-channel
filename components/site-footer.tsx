import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-6">
          <nav className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <a
              href="https://calendly.com/billy-fridgechannels/fridge-channel-pilot-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Contact
            </a>
            <span>·</span>
            <Link href="/trust" className="hover:underline">
              Trust Center
            </Link>
          </nav>
          <p className="text-center text-muted-foreground">© Fridge Channel</p>
        </div>
      </div>
    </footer>
  )
}

