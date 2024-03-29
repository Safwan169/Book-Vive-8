import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'
import ListedBooks from './ListedBooks.jsx'
import Read from './Read.jsx'
import Nav from './Nav.jsx'
import Cart from './Cart.jsx'
import Books from './Books.jsx'
import Details from './Details.jsx'
import Error from './Error.jsx'
import About from './About.jsx'
import Staionnary from './Staionnary.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement:<Error></Error>,
    children: [{
      path:'/details/:id',
      loader:()=>fetch('/Data.json'),
      element:<Details></Details>
    },
      {
        path: '/',
        loader: () => fetch('/Data.json'),

        element: <Books></Books>
      },
      {

        path: '/listedbooks',
        loader:()=>fetch('/Data.json'),
        element: <ListedBooks></ListedBooks>,
      }, {
        path: '/read',
        loader:()=>fetch('/Data.json'),

        element: <Read></Read>

      },
       {
        path: '/about',

        element: <About></About>

      },{
        path:'/stationary',
        loader:()=>fetch('/stationary.json'),
        element:<Staionnary></Staionnary>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
