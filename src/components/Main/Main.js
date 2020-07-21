import React, { useState } from 'react'
import './Main.css'
import ListItem from '../ListItem/ListItem'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

const Main = () => {
    const [item, setItem] = useState([])
    const [currentItem, setCurrentItem] = useState({text:'', key:''})
    const handleInput = (e) => {
        setCurrentItem({
            text: e.target.value,
            key: Date.now()
        })
    }
    const addItem = (e) => {
        e.preventDefault()
        if (currentItem.text !== '') {
            const items = [...item, currentItem]
            setItem(items)
            setCurrentItem({text: '', key: ''})
        }
    }
    const deleteItem = (key) => {
        const filteredItems = item.filter(element => element.key!==key)
        setItem(filteredItems)
    }
    return (
        <div id="mainDiv">
            <header>
                <form id="to-do-form"  onSubmit={addItem}>
                    <input type="text" 
                        placeholder="Enter Text" 
                        value={currentItem.text} 
                        onChange={handleInput} 
                    />
                    <button type="submit">Add</button>
                </form>
            </header>
            <ListItem items={item} deleteItem={deleteItem}/>
        </div>
    )
}

export default Main
