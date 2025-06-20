import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { RecoilRoot } from 'recoil'
const routes = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Register",
    element:<Signup/>
  },
  {
    path:"/Update",
    element:<></>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <RouterProvider router={routes}/>
    </RecoilRoot>
  </StrictMode>,
)
