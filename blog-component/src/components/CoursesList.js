import React from 'react';
import Course from './Course';

export default (props) => {
  return (
    <div>
      {props.list.map(course => <Course title={course}/>)}
    </div>
  )
}
