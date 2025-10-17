import { NextResponse } from 'next/server'
import { getComponents } from '@/lib/services/data-service'

export async function GET() {
  try {
    const components = await getComponents()
    return NextResponse.json(components)
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch components' },
      { status: 500 }
    )
  }
}
