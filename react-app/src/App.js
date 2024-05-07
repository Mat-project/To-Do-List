import Header from "./header";
import Footer from "./footer";
import Main from "./main";
import Additem from "./additem";
import { useState } from 'react'
import Searchitem from "./searchitem";

function App(){
  const [items,setItems] = useState(
    JSON.parse(localStorage.getItem('list')) || []
   )
  const [newItems,setNewItems] =useState('')
  const [search,setSearch] =useState('')


  const click =(id) =>{
    const listItems=items.map((item) => 
    item.id===id ?{...item,cheacked:!item.cheacked} : item )
    setItems(listItems)
    localStorage.setItem("list",JSON.stringify(listItems))
}
const del=(id) =>{
    const listItems=items.filter(item => 
    item.id!==id )
    setItems(listItems)
    localStorage.setItem("list",JSON.stringify(listItems))
}


  const addItems =(item)=>{
    const id=items.length ? items[items.length-1].id +1 :1
    const addNewItems ={id,cheacked:false,item}
    const listItems =[...items,addNewItems]
    setItems(listItems)
    localStorage.setItem("list",JSON.stringify(listItems))

  }
  const hSubmit =(e) =>{
    e.preventDefault()
    addItems(newItems)
    setNewItems('')
    

  }
  return(
    <div>
        <Header title="list" /> 
        <Additem 
          newItems={newItems}
          setNewItems={setNewItems}
          hSubmit={hSubmit}
        />
        <Searchitem
        search={search}
        setSearch={setSearch}
        />
        <Main 
        items ={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        click={click}
        del={del}
        />
        <Footer />
    </div>
    
  );
}
export default App;