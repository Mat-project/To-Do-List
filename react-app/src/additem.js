import React, { useRef, useState } from 'react'
import { HiPlus } from 'react-icons/hi'

const Additem = ({newItems, setNewItems, hSubmit, addItems}) => {
    const inputRef = useRef()
    const [selectedCategory, setSelectedCategory] = useState('General')
    const [taskText, setTaskText] = useState('')
    
    const categories = [
        'General', 'Work', 'Home', 'Study', 'Personal', 
        'Shopping', 'Health'
    ]
    
    const handleSubmit = (e) => {
      e.preventDefault()
      
      if (!taskText.trim()) {
        // Don't submit if task text is empty
        return
      }
      
      // Format the task with the selected category
      const formattedTask = `${selectedCategory}: ${taskText.trim()}`
      console.log("Submitting formatted task:", formattedTask);
      
      // Make sure we're calling the correct function
      if (typeof addItems === 'function') {
        addItems(formattedTask);
      } else {
        // Fallback to the original submission method if addItems is not passed
        setNewItems(formattedTask);
        hSubmit(e);
      }
      
      // Clear the task text input
      setTaskText('')
    }
    
    // For debugging
    console.log("Current newItems value:", newItems)
    
    return (  
      <div className="add-task-container">
        <form className='add-task-form' onSubmit={handleSubmit}>
          <div className="add-task-input-group">
            <select 
              className="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <input 
                autoFocus
                ref={inputRef}
                type="text"
                id='additem'
                className="add-task-input"
                placeholder='Add task description'
                required
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
            />
          </div>
          <button
              type='submit'
              className="add-task-button"
              aria-label='Add Task'
          >
            <div className="button-content">
              <HiPlus className="add-icon" />
              <span>Add</span>
            </div>
            <div className="button-background"></div>
          </button>
        </form>
        {taskText.trim() && (
          <div className="category-helper">
            <p>Preview: <strong>{selectedCategory}: {taskText}</strong></p>
          </div>
        )}
      </div>
    )
}

export default Additem