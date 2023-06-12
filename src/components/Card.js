import React from 'react'

export const Card = (prop) => {
  return (
    <div className='card'>
        <h4>Name: {prop.comida.title}</h4>
        <img src={prop.comida.images[1]} alt={prop.comida.title} />
        <p>Price: USD ${prop.comida.price}</p>
        <p>Description: {prop.comida.description}</p>
    </div>
  )
}

export default Card
