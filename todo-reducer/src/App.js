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

  return (
    <div className="App">
      <TodoList todoArray={state.todoArray} />
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
