import React, { useState } from 'react'

const TodoForm = ({ addTodo, clearCompleted}) => {
  const [item, setItem] = useState('')
  const handleChange = event => setItem(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(item);
    setItem('');
  }

  const handleClear = e => {
    e.preventDefault();
    clearCompleted();
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' 
            name='item' 
            placeholder='todo' 
            onChange={handleChange}
      />
      <button type='submit'>ADD TODO</button>
      <button onClick={handleClear}>Clear Completed</button>
    </form>
  )
}

export default TodoForm