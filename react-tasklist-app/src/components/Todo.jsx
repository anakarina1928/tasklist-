import { React, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TbEditCircle } from 'react-icons/tb';
import '../App.css'
//import { TodoForm } from './TodoForm'


export const Todo = ({ todos, completeTodo, deleteTodo,complete }) => {

  const [editTodo, setEditTodo] = useState({
    id: null,
    value: '',
  })
  /*el key debe ser el id que estamos creando, por ahora estoy colocando el index pero debo
  tratar de cambiarlo
  el todo.text deberia ser todo.value
  */
  return (
<>
    {todos.map((todo, index) => {

      return (

        <section
          className={todo.completed === true ? 'todo-row complete' : 'todo-row'}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <div className='icons'>
            <RiCloseCircleLine 
            onClick={()=> deleteTodo(todo.id)}
            className='todo-delete-icon'
            />
            <TbEditCircle
             
            
            />

          </div>

        </section>
      )
    })}

</>
  )
}
