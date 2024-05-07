import React from 'react'
import { useRef } from 'react'

const Additem = ({newItems,setNewItems,hSubmit}) => {
    const inputRef=useRef()
  return(  
  <form action="" className='addForm' onSubmit={ hSubmit}>
    <label htmlFor="additem"> AddItem</label>
    <input 
        autoFocus
        ref={inputRef}
        type="text"
        id='additem'
        placeholder='addItem'
        required
        value= {newItems}
        onChange={(e) => setNewItems(e.target.value)}
        

    />
    <button
        type='submit'
        aria-label ='AddItem'
        onClick={() => inputRef.current.focus()}
        
    > + </button>
    
    
  </form>
  )
}

export default Additem