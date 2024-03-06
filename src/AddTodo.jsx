import { useState } from 'react';

export function AddTodo({ addTodo }) {
    const [input, setInput] = useState('');

    const submit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    }

    return (
        <form onSubmit={submit}>
            <input
                type='text'
                placeholder='your todo...'
                value={input}
                onChange={e => setInput(e.target.value)}
            />

            <button>Add</button>
        </form>
    )

}