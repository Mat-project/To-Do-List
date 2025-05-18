import React from 'react'
import { HiSearch } from 'react-icons/hi'

const SearchItem = ({search, setSearch}) => {
  return (
    <div className='search-form-container'>
      <div className="search-form">
        <HiSearch className="search-icon" />
        <input
          type="text" 
          id='search'
          className="search-input"
          placeholder='Search tasks...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button 
            className="clear-search" 
            onClick={() => setSearch('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchItem