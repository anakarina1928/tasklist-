const addTodo = todo => {
    /*expresion regular: /^\s*$/ Esencialmente busca líneas en blanco/vacías.
    El método test() ejecuta una búsqueda de una coincidencia entre una expresión regular y una
     cadena especificada. Devuelve verdadero o falso.
    */ 
    if (!todo.text || /^\s*$/.test(todo.text)) return;
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const onAddTodo = (todo) => {

    const lowercaseCategory = todo.toLowerCase();

    if (!todos.includes(lowercaseCategory)) {
        const newTodo = [lowercaseCategory, ...todos];
        setTodos(newTodo); //creo un nuevo arreglo, OPERADOR SPRead agregando una copia de mi arreglo "categories" y agrego la nueva categoria
        //setOpen(true);
        console.log('text+id : ', ...todos);
    }

}
