import { React, useState } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TbEditCircle } from 'react-icons/tb';
import { FaRegCheckCircle } from 'react-icons/fa';

import '../asset/todo.css'
//import { TodoForm } from './TodoForm'


export const Todo = ({ todos, completeTodo, deleteTodo, updateTodo }) => {

  const [editTodo, setEditTodo] = useState({
    id: null,
    value: '',
  })

  // const editRef = useRef(null);

  const setModeEditingForTodo = (todoId, text) => {

    setEditTodo({
      id: todoId,
      value: text
    });
  };

  const onInputChange = (event, id) => {
    const newTodo = {
      id,
      value: event.target.value
    }
    setEditTodo(newTodo)

  }

  const handleKeyDown = (event) => {
    if (event.key == 'Enter') {
      updateTodo(editTodo.id, editTodo.value);
      setEditTodo({
        id: null,
        value: '',
      });
    }


  }

  return (
    <>

      <section className='container'>
        <ol className='list list-group list-group-numbered' >
          {todos.map((todo) => {

            return (

              <li
                className={todo.completed === true ? 'todo-row  completed list-group-item d-flex justify-content-between align-items-start' : 'todo-row list-group-item d-flex justify-content-between align-items-start'}
                key={todo.id}
              >
                <div key={todo.id} className={'ms-2 me-auto list-text-note'} >
                  <div class="fw-bold">
                    {todo.time}
                  </div>
                  {editTodo.id === todo.id ? <input type={'text'} onKeyDown={handleKeyDown} onChange={(event) => onInputChange(event, todo.id)} value={editTodo.value} placeholder={editTodo.value}></input> : todo.text}

                </div>

                <div className='icons '>
                  <FaRegCheckCircle
                   onClick={() => completeTodo(todo.id)}

                  />

                  <RiCloseCircleLine
                    onClick={() => deleteTodo(todo.id)}
                    className='todo-delete-icon'
                  />

                  <TbEditCircle
                    onClick={() => setModeEditingForTodo(todo.id, todo.text)}

                  />

                </div>

              </li>
            )
          })}
        </ol>

      </section>
    </>
  )
}
