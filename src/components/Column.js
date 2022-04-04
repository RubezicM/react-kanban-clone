import React from 'react';

function Column ({ lane }) {

  console.log(lane)
  // console.log(props)
  return (
    <div className={'card w-48 bg-base-100 card-bordered inline-flex rounded-none mr-3'}>
      <h2 className="card-title">Card title!</h2>
    </div>
  );
}

export default Column;
