import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import aboutus from './Pages/aboutus.jsx'
import ourprojects from './Pages/ourprojects.jsx'
import OurProjects from './components/OurProjects/OurProjects.jsx'

const router = createBrowserRouter([{
  path: '/aboutus', 
  element: <About />
},
{
  path:'/ourprojects',
  element:<OurProjects />
},

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
