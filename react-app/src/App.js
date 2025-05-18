import Header from "./header";
import Content from "./main";
import Additem from "./additem";
import { useState, useEffect } from 'react'
import SearchItem from "./searchitem";

function App(){
  const [items,setItems] = useState(
    JSON.parse(localStorage.getItem('list')) || []
   )
  const [newItems,setNewItems] =useState('')
  const [search,setSearch] =useState('')


  const click =(id) =>{
    const listItems=items.map((item) => 
    item.id===id ?{...item,checked:!item.checked} : item )
    setItems(listItems)
    localStorage.setItem("list",JSON.stringify(listItems))
}
const del=(id) =>{
    const listItems=items.filter(item => 
    item.id!==id )
    setItems(listItems)
    localStorage.setItem("list",JSON.stringify(listItems))
}


  const addItems = (item) => {
    // Skip adding if item is empty or only whitespace
    if (!item || !item.trim()) {
      console.log("Skipping empty item");
      return;
    }
    
    console.log("Adding item:", item);
    
    const id = items.length ? items[items.length-1].id + 1 : 1
    const addNewItems = {id, checked: false, item: item.trim()}
    
    console.log("New item object:", addNewItems);
    
    const listItems = [...items, addNewItems]
    setItems(listItems)
    localStorage.setItem("list", JSON.stringify(listItems))
  }
  
  const hSubmit = (e) => {
    e.preventDefault()
    // Only add the item if it's not empty
    if (newItems && newItems.trim()) {
      addItems(newItems)
      setNewItems('')
    }
  }
  
  // Clean up existing empty items when the component loads
  useEffect(() => {
    const cleanedItems = items.filter(item => item.item && item.item.trim());
    if (cleanedItems.length !== items.length) {
      setItems(cleanedItems);
      localStorage.setItem("list", JSON.stringify(cleanedItems));
    }
  }, [items]); // Add items as a dependency to ensure proper cleanup

  return(
    <div className="App">
        <Header title="Task Manager" /> 
        <div className="app-container">
          <Additem 
            newItems={newItems}
            setNewItems={setNewItems}
            hSubmit={hSubmit}
            addItems={addItems}  // Make sure addItems is passed as a prop
          />
          <SearchItem
            search={search}
            setSearch={setSearch}
          />
          <Content 
            items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
            click={click}
            del={del}
          />
        </div>

    </div>
  );
}
export default App;