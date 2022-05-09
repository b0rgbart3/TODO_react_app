import React from 'react';
import { Todo } from '../models/todo';
import './Todos.css';

interface TodoListProps {
    items: Todo[];
    onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {


    return <ul className='list'>
        {props.items.map(todo => 
        <li 
        key={todo.id}>
            <span> {todo.text}</span>
            <button onClick={props.onDelete.bind(null, todo.id)}>DELETE</button>
        </li>)}

    </ul>;
};

export default TodoList;

