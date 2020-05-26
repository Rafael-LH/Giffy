// Packages
import React from 'react'
import { Link } from 'wouter'

const Gif = ({ title, url, id }) => (
  <>
    <h4>{title}</h4>
    <Link href={`/gif/${id}`}>
      <img src={url} alt={title} id={`#${id}`} />
    </Link>
  </>
)
export default Gif