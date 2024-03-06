import { useState } from 'react';
import { AddTodo } from './AddTodo';

export function App() {
    const [todos, setTodos] = useState([
        { id: 1, name: 'react', done: false },
        { id: 2, name: 'vue', done: false },
        { id: 3, name: 'angular', done: false },
    ])

    const addTodo = (name) => {
        if (!name.trim()) {
            return;
        }

        const todo = {
            id: Date.now(),
            name,
            done: false
        };

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const removeTodo = (id) => {
        const remtodo = todos.filter(el => el.id !== id);
        setTodos(remtodo);
    }

    const doneTodo = (id) => {
        const donetodo = todos.map(el => {
            if (el.id === id) el.done = !el.done;
            return el;
        });

        setTodos(donetodo);
    }

    return (
        <div className='App'>
            <h1>Todo List</h1>

            <AddTodo addTodo={addTodo} />

            <div className='todoList'>
                {
                    todos.map(el =>
                        <div className={el.done ? 'Todo done' : 'Todo'}>
                            <span onClick={() => doneTodo(el.id)}>
                                {el.name}
                            </span>

                            <span onClick={() => removeTodo(el.id)} className='times'>
                                &times;
                            </span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
