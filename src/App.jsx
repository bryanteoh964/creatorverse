import React from 'react'
import { useRoutes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'

import './App.css'

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/add_creators",
          element: <AddCreator />
        },
        {
          path: "/edit_creators",
          element: <EditCreator />
        },
        {
          path: "/show_creators",
          element: <ShowCreators />
        }, 
        {
          path: "/view_creators",
          element: <ViewCreator />
        }
      ]
    }
  ])
  return element
}

export default App
