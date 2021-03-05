// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState } from 'react'



export default function ToDoList(props) {
    const handleChange = (e, toDo) => {
        props.toggle(toDo.id, e)
    } 
    return(
        <div className='ToDos'>
            {props.toDos.map(toDo => {
                console.log(toDo)
                return(
                    <p>{toDo.task} 
                        <input 
                            type="checkbox"
                            name="checkbox"
                            checked={toDo.complete}
                            value={toDo.complete}
                            onChange={(e) => handleChange(e, toDo)}
                            />
                    </p>
                )
            })}
        </div>
    )
}