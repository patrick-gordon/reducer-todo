import React, {useReducer} from 'react';
import {initialState, reducer} from './Reducers/index'
import './App.css';

import TodoList from './Components/TodoList'
import TodoForm from './Components/TodoForm'

function App() {
  // const [state, setState] = useState(initialState)
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state', state)

  const addTodo = item => {
    dispatch({ type: 'ADD_TODO', payload: item });
  }

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id});
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <TodoList todoArray={state.todoArray} toggleTodo={toggleTodo} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
