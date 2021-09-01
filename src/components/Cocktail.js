import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({id, image, name}) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt="" />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <Link to={`/characters/${id}`} className='btn- btn primary'>
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
