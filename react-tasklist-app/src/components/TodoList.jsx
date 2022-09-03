import { React, useState } from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo';


export const TodoList = () => {
  const [todos, setTodos] = useState([]);
 


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


  const completeTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
   
    console.log(newTodos);
  };

  const deleteTodo = (id) => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    
    setTodos(newTodos);
  };
  /*
      const completeTodo = id => {
          let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
              todo.isComplete = !todo.isComplete;
            }
            return todo;
          });
          setTodos(updatedTodos);
        };
  */


  return (
    <div>
      <h1>¿cuáles son las tareas para hoy? </h1>

      <TodoForm
        onSubmit={onAddTodo}
      />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
       
      />
    </div>
  )
}
