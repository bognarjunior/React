import React, { useState, useEffect } from 'react';
import TodoList from './todoList';

export default function TodoApp() {
  const [text, setText] = useState('');
  const [items, setTodo] = useState([]);

  
  useEffect(() => {
    changeTitle()
  });

  function changeTitle() {
    document.title = `${text !== '' ? `Adicionando ${text} na lista` : ` Você tem ${items.length} tarefas na lista`}`;
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.length) {
      return;
    }

    const newItem = {
      text: text,
      checked: null,
      id: Date.now()
    }; 

    setTodo(items.concat(newItem));
    setText('');
  }

  function toogleChecked(id) {
    setTodo(
      items.map( todo => {
        if (todo.id === id) {
          if (todo.checked === null) {
            todo.checked = 'checked'
          } else {
            todo.checked = null
          }
        }
        return todo;
      })
    )
  }

  function removeItem(id) {
    setTodo(
      items.filter(todo => todo.id !== id)
    )
  }

  return (
    <div>
      <div id="myDIV" className="header">
        <h2 style={{margin: 5}}>Lista de tarefas</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="myInput"
            onChange={handleChange}
            placeholder="Digite o que fazer..."
            value={text}
          />
          <button className="addBtn"> Adicionar </button>
        </form>
      </div>
      <TodoList items={items} toogleChecked={toogleChecked} removeItem={removeItem}/>
    </div>
  );

}
