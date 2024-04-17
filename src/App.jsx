import Nav from './nav.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './contact.jsx'
import Footer from './rating.jsx'
import Price from './price.jsx'
import Bmical from './bmical.jsx'

import './App.css'
import {createBrowserRouter ,RouterProvider,} from "react-router-dom"


const router= createBrowserRouter([
    {
     path: "/",
     element: <><Nav></Nav><Home></Home></>
    },
    {
      path: "/About",
      element: <><Nav></Nav><About></About></>
     },
     {
      path: "/Contact",
      element: <><Nav></Nav><Contact></Contact></>
     },
     {
      path: "/Price",
      element: <><Nav></Nav><Price></Price></>
     },
     {
      path: "/bmical",
      element: <><Nav></Nav><Bmical></Bmical></>
     }
])



function App() {
 

  return (
    <>
     
    <RouterProvider router={router}/>
    <Footer></Footer> 
    </>
  )
}

export default App
