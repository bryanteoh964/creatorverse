import React from 'react'
import { useRoutes } from 'react-router-dom'

import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import ViewCreator from './pages/ViewCreator.jsx'

import './App.css'

function App() {
  let element = useRoutes([
    {
      path: "/",
      element: <ShowCreators />,
    }, 
    {
      path: "/add",
      element: <AddCreator />,
    },
    {
      path: "/edit/:id",
      element: <EditCreator />,
    },
    {
      path: "/creator/:id",
      element: <ViewCreator />,
    }
  ])
  return element
}

export default App
