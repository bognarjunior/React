import React from 'react';

export default (props) => {
  function toogleChecked (event) {
    event.preventDefault();
    props.toogleChecked(props.item.id)
  }

  function deleteTodo (event) {
    event.preventDefault();
    props.removeItem(props.item.id)
  }

  return (
    <li className={props.item.checked} >
      <span onClick={toogleChecked}>
        {props.item.text}
      </span>
      <span className="close" onClick={deleteTodo}>×</span>
    </li>
  )
}