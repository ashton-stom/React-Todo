import React, { useState } from 'react'



export default function ToDoForm(props) {
    const [input, setInput] = useState("")
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            props.add(input)}}>
            <input
                name='todo'
                type='textbox'
                placeholder='What to do...'
                value={input}
                onChange={e => setInput(e.target.value)}
                min='1'
            />
            <button>Add</button>
            <button onClick={(e) => {
                e.preventDefault()
                props.clear()}}>Clear Completed</button>
        </form>
    )
}