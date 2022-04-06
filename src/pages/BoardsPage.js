import React, { useContext, useState, useEffect } from 'react';
import { LanesContext } from '../context/LanesContext'
import Column from '../components/Column'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'


const Container = styled.div`
  display:flex;
`

const BoardsPage = (props) => {
  const { columns, dispatch } = useContext(LanesContext)
  const { tasks, } = useContext(LanesContext)
  // const fillLanes = () => {
  //     dispatch({type:'PREFILL', payload: initialData})
  // }
  //
  // useEffect(()=>{
  //   fillLanes()
  // }, [data])



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
    console.log('id',id)
    const lane = {
      "new_lane": {
        id: "new_lane",
        title: 'new_lane',
        tasksId: []
      }
    }

    dispatch({ type: 'ADD_LANE', payload: { ...lane } })
    console.log(columns)
    console.log(tasks)
  }

  return (
    <div className={`p-2 pt-20 h-screen overflow-y-hidden`}>
      <Container>
      {columns ? Object.keys(columns).map((lane,index)=> {
        const _tasks = columns[lane].tasksId.map(taskID => tasks[taskID] ?? tasks[taskID])
        console.log(_tasks)
        return <Column key={index} lane={columns[lane]} tasks={_tasks}/>
      }) : null }
        <button onClick={onAddNewLane} className={'btn btn-primary btn-sm'}>+ Add New Lane</button>
      </Container>

    </div>
  );
};

export default BoardsPage;
