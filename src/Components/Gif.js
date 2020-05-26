import React from 'react'

const Gif = ({ title, url }) => (
  <>
    <h4>{title}</h4>
    <img src={url} alt={title} />
  </>
)
export default Gif