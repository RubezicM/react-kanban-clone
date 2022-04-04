import React, { useContext, useEffect, useState } from 'react';
import Card from './Card'
import { LanesContext } from '../context/LanesContext'
import { Droppable } from 'react-dnd-beautiful'

function Column ({ lane, tasks }) {
  return (
    <div className="card bg-base-100 card-bordered inline-flex rounded-none mr-3 pt-5 pb-5 pl-2 pr-2">
      <h2 className="card-title">{lane.title}</h2>
      <Droppable droppableId={lane.id}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task, index) => {
              return <Card key={task.id} task={task} index={index}/>
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default Column;
