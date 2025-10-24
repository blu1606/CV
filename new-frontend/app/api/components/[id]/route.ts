import { NextResponse, NextRequest } from 'next/server'
import { updateComponent, deleteComponent, getComponentById } from '@/lib/services/data-service'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(`🔔 API /api/components/${params.id} - GET called`)
  try {
    const component = await getComponentById(params.id)
    if (!component) {
      return NextResponse.json(
        { error: 'Component not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(component)
  } catch (error) {
    console.error('API Error fetching component:', error)
    return NextResponse.json(
      { error: 'Failed to fetch component' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(`🔔 API /api/components/${params.id} - PUT called`)
  try {
    const body = await request.json()
    const updatedComponent = await updateComponent(params.id, body)
    
    if (!updatedComponent) {
      return NextResponse.json(
        { error: 'Failed to update component' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(updatedComponent)
  } catch (error) {
    console.error('API Error updating component:', error)
    return NextResponse.json(
      { error: 'Failed to update component' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log(`🔔 API /api/components/${params.id} - DELETE called`)
  try {
    const success = await deleteComponent(params.id)
    
    if (!success) {
      return NextResponse.json(
        { error: 'Failed to delete component' },
        { status: 400 }
      )
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API Error deleting component:', error)
    return NextResponse.json(
      { error: 'Failed to delete component' },
      { status: 500 }
    )
  }
}
