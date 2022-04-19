import React, { useContext } from 'react';
import { LanesContext } from '../context/LanesContext'
import Column from '../components/Column'
import styled from 'styled-components'
import { Droppable } from 'react-dnd-beautiful'

const Container = styled.div`
  display:flex;
`

const BoardsPage = () => {
  const { tasks, columns, columnOrder } = useContext(LanesContext)

  return (
    <div className={`p-2 pt-20 h-screen overflow-y-hidden`}>
      <Droppable droppableId='all-columns' direction='horizontal' type='column'>
        {provided=>(
          <Container { ...provided.droppableProps } ref={provided.innerRef}>
            {columns ? columnOrder.map((columnId,index) => {
              const column = columns[columnId]
              const _tasks = column.tasksId.map((taskID) => tasks[taskID] ?? tasks[taskID])
              return <Column key={index} lane={columns[columnId]} tasks={_tasks} index={index}/>
            }) : null}
            {provided.placeholder}

          </Container>
        )}
      </Droppable>
    </div>
  );
};

export default BoardsPage;
