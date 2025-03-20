import { useState } from 'react'
import './App.css'

function App() {
 
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    setTodos(currentTodos=>[

        { id: crypto.randomUUID(), title: newItem, completed: false}
      
    ])
  }

  
  return (
    <>
      <form onSubmit={handleSubmit} className="todo-item-form">
        <div className="row-item">
          <label htmlFor="item">New item</label>
          <input type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} />
        </div>
        <button className="btn">Add {newItem}</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li>
          <label htmlFor="">
            <input type="checkbox" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button></li>
        <li>
            <label htmlFor="">
              <input type="checkbox" />
              Item 1
            </label>
            <button className="btn btn-danger">Delete</button>
        </li>
       
      </ul>
    </>
  )
}

export default App
