import React from 'react'

const Card = (props) => {
  return (
    <div>
      <article class="card">
        <img
          src={props.imageURL}
        />
        <h3>Creator Name: {props.name}</h3>
        <h5>URL: {props.url}</h5>
        <span>Description: {props.description}</span>
      </article>
    </div>
  )
}

export default Card