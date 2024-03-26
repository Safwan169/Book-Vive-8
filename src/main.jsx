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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/home',
        loader: () => fetch('Data.json'),

        element: <Books></Books>
      },
      {

        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>,
      }, {
        path: '/read',
        element: <Read></Read>

      },{
        path:'/details/:id',
        loader:()=>fetch('Data.json'),
        element:<Details></Details>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
