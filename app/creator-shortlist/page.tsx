"use client"

import Link from 'next/link'

import { Navigation } from '@/components/navigation'
import { TaskList, type Task } from '@/components/ui/task-list'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { supabaseServerClient } from '@/lib/supabase-client'

type CreatorRow = {
  creator_id: string
  creator_name: string
  newsletter_name: string | null
  website_url: string | null
}

const mapCreatorToTask = (creator: CreatorRow): Task => {
  const logoSource = creator.newsletter_name || creator.creator_name
  const logoInitial = logoSource.charAt(0).toUpperCase() || '?'

  return {
    id: creator.creator_id,
    logo: logoInitial,
    creatorName: creator.creator_name,
    newsletterName: creator.newsletter_name || '—',
    websiteUrl: creator.website_url || '#',
  }
}

const loadCreators = async (): Promise<Task[]> => {
  const supabase = supabaseServerClient()

  if (!supabase) {
    return []
  }

  const { data, error } = await supabase
    .from('creator')
    .select('creator_id, creator_name, newsletter_name, website_url')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error loading creators from Supabase', error)
    return []
  }

  return (data as CreatorRow[]).map(mapCreatorToTask)
}

export default async function CreatorShortlistPage() {
  const creatorTasks = await loadCreators()

  return (
    <div className="min-h-screen bg-[#F7F7F4]">
      <Navigation />

      <main>
        <section className="relative pt-24 pb-16 overflow-hidden">
          {/* Background image and gradient same as hero */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/science-hero-bg.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(20px) brightness(1.05)',
              transform: 'scale(1.05)',
            }}
          />
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent/30 via-[#F7F7F4]/20 to-[#F7F7F4]" />

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6 pt-0 pb-8">
              <h1 className="mt-0 text-3xl md:text-5xl font-bold text-white">
                Creator Shortlist
              </h1>
              <p className="text-lg md:text-xl text-white/95 space-y-4">
                <span>
                  We&apos;re building Fridge Channel with a small set of creators we{' '}
                  <em>really</em> want to work with
                </span>
                <br />
                <br />
                <span className="font-semibold">❓ Know someone on this list?</span>
                <br />
                <span>
                  Make an intro. If we end up working together, we&apos;ll send you an{' '}
                  <span className="font-semibold">FC Gift</span> as a thank-you.
                </span>
                <br />
                <br />
                <span className="font-semibold">
                  ❓ Are you a creator and your name is on this list?
                </span>
                <br />
                <span>
                  Reach out — you&apos;re qualified for a{' '}
                  <span className="font-semibold">Big FC Gift</span> (and we&apos;ll fast-track your
                  setup).
                </span>
              </p>
              {/* CTA at bottom of top hero-like area */}
              <div className="pt-4 flex items-center justify-center">
              <Link href="/booking">
                <ShimmerButton
                    className="shadow-2xl transition-transform duration-300 hover:scale-110 w-full sm:w-auto px-8"
                  background="rgba(0, 0, 0, 1)"
                  shimmerColor="#ffffff"
                >
                  <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white lg:text-lg">
                    Contact FC
                  </span>
                </ShimmerButton>
              </Link>
            </div>
            </div>
          </div>
        </section>

        <section className="bg-background/60">
          <div className="container mx-auto px-4 py-8">
            <TaskList title="Who we’re looking for" tasks={creatorTasks} />
          </div>
        </section>
      </main>
    </div>
  )
}


