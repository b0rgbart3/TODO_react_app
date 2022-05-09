import React, {useState} from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/todo';



function App() {
  const [todos, setTodos] = useState<Todo[]>( [{id: 't1', text: 'Finish the course'}]);
  const addNewTodo = (text: string) => {
    console.log(text);
    const newTodo: Todo = {
      id: Math.random().toString(),
      text: text
    }
    const newTodoList = (prevTodos: Todo[]) => [...prevTodos, newTodo];

    setTodos(newTodoList);
  };

  const todoDeleteHandler = (todoId: string) => {
    // this will update our state var with a filtered array
    setTodos(prevTodos => {
      return prevTodos.filter(item => item.id !== todoId);
    })
  };

  return (
    <div className="App">
      <NewTodo addNewTodo={addNewTodo}  />
     <TodoList items={todos} onDelete={todoDeleteHandler} />
    </div>
  );
}

export default App;
