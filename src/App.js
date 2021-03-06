import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'

function App() {
  //Use state -> Short time memory, al ser volvatil, cuando se añad contenido con el SetTodo, si no se envia a la bbdd se perdera.
  //Todos es el array con todas las task
  //SetTodos es la variable que usaremos para añadir task a Todos
  const [todos, setTodos] = useState([])

  //Lo que se ponga en el input para añadirlo a la lista
  const [input, setInput] = useState('')

  //Use effect es una funcion que carga los datos por primera vez cuando se entra en el componente 
  //y cada vez que el valor del segundo parametro es modificado
  useEffect(() => {
    //Cuando la base de datos carge, actualizaremos los todos recogiendolos de la collecion que toque.
    //onSanpshot -> se lanzara cada vez que la bbdd se modifique
    //docs -> es cada uno de los valores de la bbdd
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
      //Pasamos el objeto con el id y el contenido
      //doc.data() -> Array, doc.data().todo -> el valor
      setTodos(snapshot.docs.map(doc => ({id : doc.id, todo: doc.data().todo})));
    })
  }, []);

  //Esto se activara cuando le demos click al boton.
  const addTodo = (event) => {
    //Esto hara evitara el refresh
    event.preventDefault();

    //Añadimos el input a la list de todos con setTodo. los '...' son para no borrar lo que habia previamente
    //lista.add en java
    //setTodos([...todos, input]);

    //Añadimos a la bbdd el input - el tiempo cuando se hace el insert
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //Limpiamos el input
    setInput('')
  }

  return (
    <div className="App">
      <h1>To do</h1>
      {/* Lo ponemos en un form para asi poder dar enter */}
      <form>
        <FormControl>
          <InputLabel>New Task</InputLabel>
            {/* El value que tendra sera input - onChange se encarga de ir escuchando, cada vez que hay un cambio lo seteamos con setInput
              Cada vez que se escribe una letra se actualiza y modifica el valor de input */}
            <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        {/* Llamamos al metodo que se activa on click event 
            El submit hara que se haga refresh
            disabled !input para que no se pueda añadir un vacio " "
        */}
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Primary
        </Button>
      </form>

      {/* Iteramos el array Todos -> foreach - El objeto todo es cada uno de estos */}
      <ul>
        {todos.map(todo =>(
          //Le pasamos el todo que toque por parametro al componente Todo.js
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
