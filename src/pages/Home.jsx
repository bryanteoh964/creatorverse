import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '@picocss/pico/css/pico.min.css'

const Home = () => {
  return (
    <div>
        <h1>Welcome to the Creatorverse!</h1>
        <nav class="grid">
            <Link to="/show_creators">Show Creators</Link>
            <Link to="/add_creators">Add Creators</Link>
            <Link to="/edit_creators">Edit Creators</Link>
            <Link to="/view_creators">View Creators</Link>
        </nav>
        <br />
        <Outlet />
    </div>
  )
}

export default Home