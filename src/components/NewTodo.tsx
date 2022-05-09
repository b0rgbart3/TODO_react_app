import React, {useRef} from "react";
import './Todos.css';

type NewTodoProps = {
    addNewTodo: (text:string) => void;
}

const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (e:React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.addNewTodo(enteredText);

    };

    return <form onSubmit={todoSubmitHandler}>
        <div className='newTodoform'>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef}/>
            <button type="submit">ADD TODO</button>
        </div>
   
    </form>;
};

export default NewTodo;