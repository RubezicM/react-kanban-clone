import React, { useContext, useState, useEffect, useRef } from 'react'

import { Droppable, Draggable } from 'react-dnd-beautiful'
import styled from 'styled-components'
import { LanesContext } from '../context/LanesContext'
import Card from './Card'


import Button from '@mui/material/Button'
import { MdDragIndicator } from 'react-icons/md'


import { v4 as uuidv4 } from 'uuid';

const Container = styled.div`
  margin: 0 8px 0 8px;
  border: 1px solid lightgray; 
  border-radius:2px;
  width: 220px;
  display: flex;
  background-color: white;
  flex-direction: column;
  margin-bottom: auto;
  `
const Title = styled.h3`
  padding: 8px;
  font-weight: bold;
  display:flex;
  align-items: center;
  cursor: pointer;
`
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 60px;
`
const AddNewTask = styled.div`
  padding: 8px;
  cursor: pointer;
`

const Input = styled.input`
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 2px;
  
  &:not(:last-child){
    margin-bottom: 8px;
  }
`

function Column ({ lane, tasks, index }) {

  const { dispatch } = useContext(LanesContext)
  const [addingNewTask, setAddingNewTask] = useState(false);
  const [task, setTask] = useState('');

  const inputTaskName = useRef(null);


  useEffect(()=>{
    if(addingNewTask) {
      inputTaskName.current.focus()
    }
  }, [addingNewTask])


  const handleTaskTyping = (e) => {
    const task = e.target.value
    setTask(task)
  }

  const handleShowInput = () => {
    setAddingNewTask(true)
  }


  const handleAddNewTask = () => {

    if(!task) {
      setAddingNewTask(false)
      return
    }

    const taskId = uuidv4()

    dispatch({type: 'ADD_NEW_TASK',
              payload: { task:{[taskId]: { id: taskId, content: task}},
                         taskId: taskId,
                         columnId: lane.id }})

    setAddingNewTask(false)
    setTask('')
  }


  const handleKeyPressInputTask = (e) => {
    if (e.key === 'Enter') {
      handleAddNewTask()
    }
  }

  return (
    <Draggable key={lane.id} draggableId={lane.id} index={index}>
      {provided=> (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Title { ...provided.dragHandleProps }>
            <MdDragIndicator style={{ margin: '0 10px' }}/>
            {lane.title}
          </Title>
          <Droppable droppableId={lane.id} type="task">
            {(provided, snapshot) => (
              <TaskList ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}>
                {tasks.map((task, index) => {
                  return <Card key={`${task.id}`} task={task} index={index} typeOfTask={lane.type}/>
                })}

                {provided.placeholder}
                {addingNewTask &&
                <Input type='text' value={task} ref={inputTaskName} onChange={handleTaskTyping} onBlur={handleAddNewTask} onKeyPress={handleKeyPressInputTask} placeholder='Task name..'/>}
              </TaskList>
            )}
          </Droppable>
          <AddNewTask onClick={handleShowInput}>
            <Button variant='contained' size='small' color='success'>+ Add new task</Button>
          </AddNewTask>
        </Container>
      )}
    </Draggable>

  );
}

export default Column;
