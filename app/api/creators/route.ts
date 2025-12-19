import { NextRequest, NextResponse } from 'next/server'
import { supabaseServerClient } from '@/lib/supabase-client'

const ITEMS_PER_PAGE = 10

type CreatorRow = {
  creator_id: string
  creator_name: string
  newsletter_name: string | null
  website_url: string | null
  creator_signature_image_url: string | null
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1', 10) || 1

  const supabase = supabaseServerClient()

  if (!supabase) {
    return NextResponse.json({
      tasks: [],
      total: 0,
      page: 1,
      totalPages: 0,
    })
  }

  const from = (page - 1) * ITEMS_PER_PAGE
  const to = from + ITEMS_PER_PAGE - 1

  // Get total count
  const { count, error: countError } = await supabase
    .from('creator')
    .select('*', { count: 'exact', head: true })

  if (countError) {
    console.error('Error counting creators from Supabase', countError)
  }

  const total = count || 0
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  // Get paginated data
  const { data, error } = await supabase
    .from('creator')
    .select('creator_id, creator_name, newsletter_name, website_url, creator_signature_image_url')
    .order('created_at', { ascending: true })
    .range(from, to)

  if (error) {
    console.error('Error loading creators from Supabase', error)
    return NextResponse.json({
      tasks: [],
      total,
      page,
      totalPages,
    })
  }

  // Map to task format
  const mapCreatorToTask = (creator: CreatorRow) => {
    const logoSource = creator.newsletter_name || creator.creator_name
    const logoInitial = logoSource.charAt(0).toUpperCase() || '?'

    return {
      id: creator.creator_id,
      logo: logoInitial,
      logoImageUrl: creator.creator_signature_image_url || null,
      creatorName: creator.creator_name,
      newsletterName: creator.newsletter_name || '—',
      websiteUrl: creator.website_url || '#',
    }
  }

  const tasks = (data as CreatorRow[]).map(mapCreatorToTask)

  return NextResponse.json({
    tasks,
    total,
    page,
    totalPages,
  })
}


