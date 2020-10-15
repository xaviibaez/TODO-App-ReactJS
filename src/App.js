import React, { useState } from 'react';
import './App.css';

function App() {
  //Short time memory, al ser volvatil, cuando se añad contenido con el SetTodo, si no se envia a la bbdd se perdera.
  //Todos es el array con todas las task
  //SetTodos es la variable que usaremos para añadir task a Todos
  const [todos, setTodos] = useState(['task 0', 'task 1', 'task 2'])

  //Lo que se ponga en el pinput para añadirlo a la lista
  const [input, setInput] = useState('')

  //Esto se activara cuando le demos click al boton.
  const addTodo = (event) => {
    //Esto hara evitara el refresh
    event.preventDefault();

    //Añadimos el input a la list de todos con setTodo. los '...' son para no borrar lo que habia previamente
    //lista.add en java
    setTodos([...todos, input]);

    //Limpiamos el input
    setInput('')
  }

  return (
    <div className="App">
      <h1>To do</h1>
      {/* Lo ponemos en un form para asi poder dar enter */}
      <form>
        {/* El value que tendra sera input - onChange se encarga de ir escuchando, cada vez que hay un cambio lo seteamos con setInput
            Cada vez que se escribe una letra se actualiza y modifica el valor de input */}
        <input value={input} onChange={event => setInput(event.target.value)}/>
        
        {/* Llamamos al metodo que se activa on click event 
            El submit hara que se haga refresh
        */}
        <button type="submit" onKeyDownCapture={addTodo} onClick={addTodo}>Add Todo</button>
      </form>
      {/* Iteramos el array Todos -> foreach - El objeto todo es cada uno de estos */}
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
