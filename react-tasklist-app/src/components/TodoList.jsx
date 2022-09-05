import { React, useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';
import '../asset/todoList.css'

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
 // const [editOpen, setEditOpen] = useState(null);


  const onAddTodo = todo => {
    /*expresion regular: /^\s*$/ Esencialmente busca líneas en blanco/vacías.
    El método test() ejecuta una búsqueda de una coincidencia entre una expresión regular y una
     cadena especificada. 
      Devuelve verdadero o falso || /^\s*$/.test(todo.text).
    */
    if (!todo.text) return alert('el campo esta vacio')// por ahora

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const updateTodo= (id, newText)=>{

    const newTodos= todos.map((todo)=>{

      if(id=== todo.id){
        todo.text= newText
      }
      return todo;
    })

    setTodos(newTodos);
  };


  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);

    console.log(newTodos);
  };
    
  
  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);

    setTodos(newTodos);
  };

  return (
    <div className=' container '>

      <header className='component-header'>
        <h1>¡Hola! ¿Cuáles son las tareas de hoy? </h1>

        <TodoForm
          onSubmit={onAddTodo}
        />
      </header>

      <div className=''>
        <div className=''>
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}                        
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </div>
  )
}
