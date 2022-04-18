import React from 'react';
import { Draggable } from 'react-dnd-beautiful'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  border-radius: 2px;
  margin: 5px;
  text-decoration: ${props => (props.type === 'finished' ? 'line-through' : 'none')};
  color:   ${props => (props.type === 'finished' ? 'gray' : 'inherit')};
  &:not(:last-child){
    margin-bottom: 8px;
  } 
`
function Card ({ task, index, typeOfTask }) {

  return (
    <Draggable draggableId={`${task.id}`} index={index}>
      {(provided, snapshot) => (
        <Container
             {...provided.draggableProps}
             {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}
              type={typeOfTask}>
          <p>{task.content}</p>
      </Container>)}

    </Draggable>
  );
}

export default Card;
