import React from 'react';
import { Draggable } from 'react-dnd-beautiful'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${props=> (props.isDragging ? 'lightgreen': 'white')}
`
function Card ({ task, index }) {

  const getItemStyle = (isDragging, styles) => {
    // change background colour if dragging
    return {
      background: isDragging ? "lightgreen" : "white",
      ...styles
    }

  };


  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
             {...provided.draggableProps}
             {...provided.dragHandleProps}
              ref={provided.innerRef}
              isDragging={snapshot.isDragging}>
          <h2 className="card-title">{task.title}</h2>
          <p>{task.content}</p>
      </Container>)}

    </Draggable>
  );
}

export default Card;
