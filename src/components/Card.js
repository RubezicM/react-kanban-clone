import React from 'react';
import { Draggable } from 'react-dnd-beautiful'

function Card ({ task, index }) {


  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div className="card bg-base-100 shadow-xl card-bordered"
             {...provided.draggableProps}
             {...provided.dragHandleProps}
              ref={provided.innerRef}>
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p>{task.content}</p>
        </div>
      </div>)}

    </Draggable>
  );
}

export default Card;
