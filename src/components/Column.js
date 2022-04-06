import React, { useContext, useState, useEffect } from 'react'
import Card from './Card'
import { Droppable } from 'react-dnd-beautiful'
import styled from 'styled-components'
import { LanesContext } from '../context/LanesContext'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { MdModeEditOutline } from 'react-icons/md'

const Container = styled.div`
  margin:8px;
  border: 1px solid lightgray; 
  border-radius:2px;
  width: 220px;
  display: flex;
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

const ModalStyle = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: orange;
  border: 2px solid #000;
  box-shadow: 24;
`

function Column ({ lane, tasks }) {
  const [title, setTitle] = useState('')
  const { dispatch } = useContext(LanesContext)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    setTitle(lane.title)
  }, [])


  const handleChangeTitle = (e) => {

    setTitle(e.target.value)

    dispatch({type:"UPDATE_COLUMN_TITLE", payload: { ...lane, title:e.target.value }})

  }

  const handleAddNewTask = () => {
    handleOpen()
  }

  return (
    <Container>
      <Title>
        <input type="text" value={title} onChange={handleChangeTitle}/>
        <MdModeEditOutline style={{ marginLeft: '10px' }}/>
      </Title>
      <Droppable droppableId={lane.id}>
        {(provided, snapshot) => (
          <TaskList ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}>
            {tasks.map((task, index) => {
              return <Card key={task.id} task={task} index={index}/>
            })}

            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
      <AddNewTask onClick={handleAddNewTask}>
        <Button variant='contained' size='small'>+ Add new task</Button>
      </AddNewTask>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalStyle>
          <h1>Hello now!</h1>
        </ModalStyle>

      </Modal>


    </Container>
  );
}

export default Column;
