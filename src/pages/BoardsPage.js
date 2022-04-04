import React, { useContext, useState } from 'react';
import { LanesContext } from '../context/LanesContext'
import Column from '../components/Column'


const BoardsPage = (props) => {
  const { lanes, dispatch } = useContext(LanesContext)
  console.log(lanes)
  const onAddNewLane = () => {
    dispatch({ type: 'ADD_LANE', payload: {name:'Title#1',tasks: [], order: 0} })

    console.log(lanes)
  }
  // lanes: [
  // {// name: "Lane#1",
  //    tasks: [ {name:task#1}, ... ],
  //    order: 0 },
  // {...},
  // {...} ]

  return (
    <div className={`p-2 pt-20 bg-blue-500 h-screen overflow-y-hidden`}>
      <div className={'whitespace-nowrap flex center'}>
      {lanes.length > 0 ? lanes.map((lane,index)=> {
        return <Column key={index} lane={lane}/>
      }) : null }
        <button onClick={onAddNewLane} className={'btn btn-primary btn-sm'}>+ Add New Lane</button>
      </div>

    </div>
  );
};

export default BoardsPage;
