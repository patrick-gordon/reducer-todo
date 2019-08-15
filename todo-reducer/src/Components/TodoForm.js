import React, { useState } from 'react'

const TodoForm = ({ addTodo}) => {
  const [item, setItem] = useState('')
  const handleChange = event => setItem(event.target.value);
  const handleSubmit = event => {
    event.preventDefault();
    addTodo(item);
    setItem('');

  }
  return(
    <form onSubmit={handleSubmit}>
      <input type='text' 
            name='item' 
            placeholder='todo' 
            onChange={handleChange}
      />
      <button type='submit'>ADD TODO</button>
    </form>
  )
}

export default TodoForm