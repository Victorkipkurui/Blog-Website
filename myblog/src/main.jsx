import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Services from './pages/Services.jsx';
import Singleblog from './Singleblog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path: '/',
      element: <Home></Home>
    },{
      path: '/about',
      element: <About></About>
    },{
      path: '/blogs',
      element: <Blogs></Blogs>
    },{
      path: '/services',
      element: <Services></Services>
    },{
      path: '/contacts',
      element: <Contacts></Contacts>
    },{
      path: '/blogs/:id',
      element: <Singleblog></Singleblog>,
      loader: ({params})=>fetch(`http://localhost:3000/blogs/'${params.id}`)
    }
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
