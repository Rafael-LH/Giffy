import React from 'react'

const SearchGif = ({ handleSearch, handleChange }) => (
  <form onSubmit={handleSearch}>
    <input type="text" name='search' placeholder='Search Giphy' onChange={handleChange} />
  </form>
)
export default SearchGif