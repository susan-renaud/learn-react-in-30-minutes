import React from 'react';
import TodoList from './TodoList'

function App() {
  return (
      < >
        <TodoList />
        <input type="text" />
        <button>Add Task</button>
        <button>Clear Complete</button>
        <div>0 Left To Do</div>
      </>
      )

}

export default App;
