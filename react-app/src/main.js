import React from 'react'

const content = ({items,click,del}) => {





    return (                   
        <main>
           <ul>
               {items.map((item) => (
                <li className='item' key={item.id}>
                    <input type="checkbox" checked={item.cheacked}  onChange={() =>click(item.id)}/>
                    <label> {item.item} </label>
                    <button onClick={() =>del(item.id)} className='butn'>delete</button>
                </li>
               ))} 
           </ul>
        </main>
    
    )
               }

export default content