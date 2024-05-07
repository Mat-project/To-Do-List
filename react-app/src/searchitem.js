import React from 'react'

const searchItem = ({search,setSearch}) => {
  return (
    <form action="" className='searchForm' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="search">search</label>
        <input
         type="text" 
         id='search'
         role='searchbox'
         placeholder='search items'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}

         />
    </form>
  )
}

export default searchItem