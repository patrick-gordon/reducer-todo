import React from 'react'

export default function TodoList({ todoArray, toggleTodo }) {
    return (
        <div>
           {todoArray.map(todo => (
           <div key={todo.id} onClick={() => toggleTodo(todo.id)} className={todo.completed ? 'completed' : ''}>
                {todo.item}
           </div>
           ))}
        </div>
    )
}
