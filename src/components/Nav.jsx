import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
        <div>
            <h1>Welcome to the Creatorverse!</h1>
            <nav class="grid">
                <Link to="/">Show Creators</Link>
                <Link to="/add">Add Creators</Link>
                <Link to="/edit">Edit Creators</Link>
                <Link to="/creator/0">View Creators</Link>
            </nav>
            <br />
        </div>
  )
}

export default Nav