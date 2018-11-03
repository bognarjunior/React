import React from 'react';
import TodoItem from './todoItem';

export default (props) => {
  return (
    <ul id="myUL">
      {props.items.map(item => (
        <TodoItem 
          key={item.id} 
          item={item} 
          toogleChecked={props.toogleChecked} 
          removeItem={props.removeItem}
        />
      ))}
    </ul>
  )
}
