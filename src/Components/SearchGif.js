import React from 'react'

const SearchGif = ({ handleSearch, handleChange }) => (
  <form onSubmit={handleSearch} className='form-search'>
    <input type="text" name='search' placeholder='Search Giphy' onChange={handleChange} />
  </form>
)
export default SearchGif