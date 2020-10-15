import { ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import { List } from '@material-ui/core';

//Componente Todo
//Props -> propiedades - Lo que nos viene de App.js en forma de parametro
function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary={props.text} secondary="TODO: remove" />
            </ListItem>
        </List>
    )
}

export default Todo
