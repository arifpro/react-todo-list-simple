import React from 'react'
import './Main.css'

const Main = () => {
    const handleInput = () => {
        // 
    }
    const addItem = () => {
        // 
    }
    return (
        <div id="mainDiv">
            <header>
                <form id="to-do-form">
                    <input type="text" placeholder="Enter Text" onChange={() => handleInput()} />
                    <button type="submit" onClick={() => addItem()}>Add</button>
                </form>
            </header>
        </div>
    )
}

export default Main
