import React from 'react'

const Card = (props) => {
  return (
    <div>
      <article class="card">
        <img
          src={props.imageURL}
          className="card-img"
        />
        <div class="grid">
          <h3>{props.name}</h3>
        </div>
        <span>{props.description}</span>
      </article>
    </div>
  )
}

export default Card