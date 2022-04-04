import React, { useContext, useState, useEffect } from 'react';
import { LanesContext } from '../context/LanesContext'
import Column from '../components/Column'
import initialData from '../shared/initialData'

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
    // dispatch({ type: 'ADD_LANE', payload: {name:'Title#1',tasks: [], order: 0} })

    console.log(columns)
    console.log(tasks)
  }

  return (
    <div className={`p-2 pt-20 bg-blue-500 h-screen overflow-y-hidden`}>
      <div className={'whitespace-nowrap flex center'}>
      {columns ? Object.keys(columns).map((lane,index)=> {
        const _tasks = columns[lane].tasksId.map(taskID => tasks[taskID] ?? tasks[taskID])
        console.log(_tasks)
        return <Column key={index} lane={columns[lane]} tasks={_tasks}/>
      }) : null }
        <button onClick={onAddNewLane} className={'btn btn-primary btn-sm'}>+ Add New Lane</button>
      </div>

    </div>
  );
};

export default BoardsPage;
