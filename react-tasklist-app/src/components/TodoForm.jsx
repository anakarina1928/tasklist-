import { React, useState } from 'react'
import '../asset/TodoForm.css'

export const TodoForm = ({ onSubmit }) => {

    const [input, setInput] = useState('');

    const onInputChange = event => {
        console.log(event.target.value);
        setInput(event.target.value);// capturamos el valor
    }

    const createObjectWithIdentifierAndText = event => {
        event.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),/*generamos un numero aleatorio como id*/
            text: input,
            completed: false,
            time: new Date().toLocaleDateString('en-US'),
        });
        setInput('');

    }

    return (
        <form className='todo-form' onSubmit={createObjectWithIdentifierAndText}>
            <input
                className="todo-form--inputText"
                placeholder='Agrega tu tarea'
                value={input}
                name='text'
                onChange={onInputChange}

            />

           
        </form>
    )
}
