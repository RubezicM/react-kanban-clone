import { DragDropContext } from 'react-dnd-beautiful'
import { LanesContext } from './LanesContext'
import React, { useContext } from 'react'


export const DragDropContainer = ({children}) => {
  const { tasks, columns, dispatch } = useContext(LanesContext)

  const reorderArray = (arr, fromIndex, toIndex) => {
    let element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);

    return arr
  }

  const onDragEnd = result => {

    const { destination, source, draggableId } = result

    if(!destination) return

    if(destination.droppableId ===  source.droppableId && destination.index === source.index) return


    const column = columns[source.droppableId]
    const newTaskIds = Array.from(column.tasksId)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)
    dispatch({type:'REORDER_TASKS', payload: {
        ...column,
        tasksId: newTaskIds
      }})
    // console.log(result)
    // // console.log(tasks)
    // // console.log(columns)
    // const sourceColumn = columns[result.source.droppableId]
    // const targetColumn = columns[result.destination.droppableId]
    // const sourceIndex = result.source.index
    // const targetIndex = result.destination.index
    // const newOrder = reorderArray(sourceColumn.tasksId,sourceIndex,targetIndex)
    // sourceColumn.tasksId = newOrder
    //
    // const kmecolumns = {...columns, sourceColumn}
    // console.log(newOrder)

    // return newOrder

    // return sourceColumn === targetColumn ? reorderArray(sourceColumn.tasksId,sourceIndex,targetIndex) : null
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    {children}
  </DragDropContext>

}
