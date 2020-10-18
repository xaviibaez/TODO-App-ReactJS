import { ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React , { useState } from 'react';
import './Todo.css'
import { List } from '@material-ui/core';
import db from './firebase'

//Componente Todo
//Props -> propiedades - Lo que nos viene de App.js en forma de parametro
function Todo(props) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
        {/* React fragment */}
        {/* Modal edit todo, se abrira cuando la variable open = true */}
        <Modal open={open} onClose={e => setOpen(false)}>
            <div>
                <h1>Modal</h1>
                <button onClick={e => setOpen(false)}></button>
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
