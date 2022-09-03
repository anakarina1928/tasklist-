import { React, useState } from 'react'

export const TodoForm = ({onSubmit}) => {
   
    const [input, setInput] = useState('');
    
    const onInputChange = event => {
        console.log(event.target.value);
        setInput(event.target.value);// capturamos el valor
    }

    const createObjectWithIdentifierAndText = event => {
        event.preventDefault();

         onSubmit({
             id: Math.floor(Math.random()*10000),/*generamos un numero aleatorio como id*/
             text: input,
            completed: false,
 
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

            <button
                onClick={createObjectWithIdentifierAndText}
                className='todo-button' >
                Agregar
            </button>

        </form>
    )
}
