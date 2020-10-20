import { ListItem, ListItemAvatar, ListItemText, Modal, Button } from '@material-ui/core';
import { List } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React , { useState } from 'react';
import './Todo.css';
import db from './firebase';
import { makeStyles } from '@material-ui/core/styles';

//Style para el modal
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

//Componente Todo
//Props -> propiedades - Lo que nos viene de App.js en forma de parametro
function Todo(props) {
    const classes = useStyles();
    //Variable para saber si el modal esta abierto o no
    const [open, setOpen] = useState(false);
    //Input del modal para hacer update del todo
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };

    //Update todo con el input text
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true });

        setOpen(false)
    }
    return (
        <>
        {/* React fragment */}
        {/* Modal edit todo, se abrira cuando la variable open = true */}
        <Modal open={open} onClose={e => setOpen(false)}>
            {/* Importamos el style del modal */}
            <div className={classes.paper}>
                <h1>Modal</h1>
                {/* El valor inicial del input sera el del todo */}
                <input placeholder={props.todo.todo} input={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Edit</Button>
            </div>
        </Modal>
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                {/* Tenemos que entrar dentro del objeto todo */}
                <ListItemText primary={props.todo.todo} secondary="TODO: remove" />
            </ListItem>
            {/* Cuando le damos al boton se activa onClick que abre el modal */}
            <button onClick={e => setOpen(true)}>Edit</button>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
        </>
    )
}

export default Todo
