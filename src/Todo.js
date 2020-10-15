import React from 'react'

//Props -> propiedades
function Todo(props) {
    return (
        <div>
            <li>{props.text}</li>
        </div>
    )
}

export default Todo
