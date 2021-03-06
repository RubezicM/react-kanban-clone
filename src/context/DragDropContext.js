import { DragDropContext } from 'react-dnd-beautiful'
import { LanesContext } from './LanesContext'
import React, { useContext } from 'react'


export const DragDropContainer = ({ children }) => {
  const { columns,columnOrder, dispatch } = useContext(LanesContext)

  const onDragEnd = result => {

    const { destination, source, draggableId, type } = result

    if (!destination) return

    if (destination.droppableId === source.droppableId && destination.index === source.index) return

    if (type === 'column') {
      const newColumnOrder = [...columnOrder]
      newColumnOrder.splice(source.index, 1)
      newColumnOrder.splice(destination.index, 0,draggableId)

      dispatch({
        type: 'REORDER_COLUMNS',payload: {
          columnOrder: newColumnOrder
        }
      })
      return
    }

    const startColumn = columns[source.droppableId]
    const finishColumn = columns[destination.droppableId]

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn.tasksId)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      dispatch({
        type: 'REORDER_TASKS_IN_COLUMN', payload: {
          ...startColumn,
          tasksId: newTaskIds
        }
      })
      return
    }


    // moving from one col to another
    const newTaskIds = Array.from(startColumn.tasksId)
    const goalTaskIds = Array.from(finishColumn.tasksId)
    newTaskIds.splice(source.index, 1)
    goalTaskIds.splice(destination.index, 0, draggableId)

    dispatch({
      type: 'MOVE_TASK_TO_COLUMN', payload: {
        ...columns,
        [source.droppableId]: {
          ...startColumn,
          tasksId: newTaskIds
        },
        [destination.droppableId]: {
          ...finishColumn,
          tasksId: goalTaskIds
        }
      }
    })
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    {children}
  </DragDropContext>

}
