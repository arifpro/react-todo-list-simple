import React, { useState, useEffect } from 'react'
import './Main.css'
import ListItem from '../ListItem/ListItem'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

const Main = () => {
    const [items, setItem] = useState([])
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
            const newItems = [...items, currentItem]
            setItem(newItems)
            setCurrentItem({text: '', key: ''})
        }
    }
    const deleteItem = (key) => {
        const filteredItems = items.filter(element => element.key!==key)
        setItem(filteredItems)
    }
    const setUpdate = (text, key) => {
        console.log(text)
        const newItems = items
        newItems.map(element => {
            if (element.key === key) {
                console.log(element.key===key)
                element.text = text
            }
        })
        console.log(newItems)
        setItem(newItems)
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
            <ListItem 
                items={items} 
                deleteItem={deleteItem}
                setUpdate={setUpdate}
            />
        </div>
    )
}

export default Main
