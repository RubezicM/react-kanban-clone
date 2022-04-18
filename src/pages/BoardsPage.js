import React, { useContext, useState, useEffect } from 'react';
import { LanesContext } from '../context/LanesContext'
import Column from '../components/Column'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import Button from '@mui/material/Button'

const Container = styled.div`
  display:flex;
`

const AddNewLaneButton = styled(Button)`
  align-self:start;
`

const BoardsPage = (props) => {
  const { tasks, columns, dispatch } = useContext(LanesContext)

  const onAddNewLane = () => {
    //
      /*
      * 'column-2': {
      id: 'column-2',
      title: 'Review',
      tasksId: ['task-5', 'task-6']
    }
      *
      * */

    const id = uuidv4()
    const lane = {
      [id]: {
        id: id,
        title: null,
        tasksId: []
      }
    }

    dispatch({ type: 'ADD_LANE', payload: { ...lane } })
  }

  return (
    <div className={`p-2 pt-20 h-screen overflow-y-hidden`}>
      <Container>
      {columns ? Object.keys(columns).map((lane,index)=> {
        const _tasks = columns[lane].tasksId.map(taskID => tasks[taskID] ?? tasks[taskID])
        return <Column key={index} lane={columns[lane]} tasks={_tasks}/>
      }) : null }
        <AddNewLaneButton variant='contained' size='small' onClick={onAddNewLane}>+ Add New Lane</AddNewLaneButton>
      </Container>

    </div>
  );
};

export default BoardsPage;
