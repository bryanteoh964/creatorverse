import React from 'react'
import { Link } from 'react-router-dom'

import '@picocss/pico/css/pico.min.css'
import '../App.css'

const Nav = () => {
  return (
        <div>
            <h1>Explore the Creatorverse!</h1>
            <div className="nav-bar">
              <div class="grid">
                <div></div>
                <nav class="grid">
                    <Link to="/">Creator Gallery</Link>
                    <Link to="/add" role="button">Add a Creator</Link>
                </nav>
                <div></div>
              </div>
            </div>
            <br />
        </div>
  )
}

export default Nav