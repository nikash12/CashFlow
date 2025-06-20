import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:"/Login",
      element:<></>
    },
    {
      path:"/Register",
      element:<></>
    },
    {
      path:"/Update",
      element:<></>
    },
  ])
  return (
    <>
      <Navbar />
      <Dashboard/>
    </>
  )
}

export default App
