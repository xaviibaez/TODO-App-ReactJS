import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import React from 'react';
import './Todo.css'
import { List } from '@material-ui/core';
import db from './firebase'

//Componente Todo
//Props -> propiedades - Lo que nos viene de App.js en forma de parametro
function Todo(props) {
    return (
        <List className="todo__list">
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                {/* Tenemos que entrar dentro del objeto todo */}
                <ListItemText primary={props.todo.todo} secondary="TODO: remove" />
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
    )
}

export default Todo
