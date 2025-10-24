// Drag and Drop utilities for CV Editor
export interface DragItem {
  id: string
  type: 'experience' | 'education' | 'skill' | 'project'
  data: any
}

export interface DropResult {
  sourceIndex: number
  destinationIndex: number
  item: DragItem
}

export class DragDropService {
  private static instance: DragDropService

  static getInstance(): DragDropService {
    if (!DragDropService.instance) {
      DragDropService.instance = new DragDropService()
    }
    return DragDropService.instance
  }

  // Create a drag item from component data
  createDragItem(id: string, type: DragItem['type'], data: any): DragItem {
    return {
      id,
      type,
      data
    }
  }

  // Handle drag start
  handleDragStart(e: React.DragEvent, item: DragItem) {
    e.dataTransfer.setData('application/json', JSON.stringify(item))
    e.dataTransfer.effectAllowed = 'move'
    
    // Add visual feedback
    const target = e.target as HTMLElement
    target.style.opacity = '0.5'
  }

  // Handle drag end
  handleDragEnd(e: React.DragEvent) {
    const target = e.target as HTMLElement
    target.style.opacity = '1'
  }

  // Handle drag over
  handleDragOver(e: React.DragEvent) {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
  }

  // Handle drop
  handleDrop(
    e: React.DragEvent, 
    onReorder: (result: DropResult) => void,
    items: any[],
    getItemIndex: (item: any) => number
  ) {
    e.preventDefault()
    
    try {
      const dragItem: DragItem = JSON.parse(e.dataTransfer.getData('application/json'))
      const dropTarget = e.currentTarget as HTMLElement
      const dropIndex = getItemIndex(dropTarget.dataset.itemId || '')
      
      if (dropIndex !== -1) {
        const sourceIndex = items.findIndex(item => item.id === dragItem.id)
        
        if (sourceIndex !== -1 && sourceIndex !== dropIndex) {
          onReorder({
            sourceIndex,
            destinationIndex: dropIndex,
            item: dragItem
          })
        }
      }
    } catch (error) {
      console.error('Drop handling failed:', error)
    }
  }

  // Reorder array items
  reorderItems<T extends { id: string }>(items: T[], sourceIndex: number, destinationIndex: number): T[] {
    const result = Array.from(items)
    const [removed] = result.splice(sourceIndex, 1)
    result.splice(destinationIndex, 0, removed)
    return result
  }

  // Add drop zone styling
  addDropZoneStyles(element: HTMLElement, isOver: boolean) {
    if (isOver) {
      element.classList.add('border-primary', 'bg-primary/5', 'border-dashed')
    } else {
      element.classList.remove('border-primary', 'bg-primary/5', 'border-dashed')
    }
  }
}

export const dragDropService = DragDropService.getInstance()

