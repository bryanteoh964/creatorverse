import React from 'react'
import Card from '../components/Card.jsx'
import Nav from '../components/Nav.jsx'

const ShowCreators = () => {
  return (
    <div>
      <Nav />
      <div class="grid">
            <Card />
            <Card />
            <Card />
        </div>
        {/* <div class="grid">
            <Card />
            <Card />
            <div></div>
        </div> */}
    </div>
  )
}

export default ShowCreators