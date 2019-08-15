import React from 'react'

export default function TodoList({ todoArray }) {
    return (
        <div>
           {todoArray.map(todo => <div key={todo.id}>{todo.item}</div>)}
        </div>
    )
}
