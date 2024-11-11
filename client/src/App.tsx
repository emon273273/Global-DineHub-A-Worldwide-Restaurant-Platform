import { useState } from 'react'

import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './pages/auth/Login'
import MainLayout from './MainLayout'
import SIgnup from './pages/auth/Signup'

const approuter=createBrowserRouter([{

  path:"/",
  element:<MainLayout/>,
},
{
  path:"/login",
  element:<Login/>
},
{
  path:"/signup",
element:<SIgnup/>
}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <RouterProvider  router={approuter}></RouterProvider>
    </>
  )
}

export default App
