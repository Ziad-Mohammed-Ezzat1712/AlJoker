import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import OurCar from './Components/OurCar/OurCar';
import BlogPage from './Components/BlogPage/BlogPage';
import About from './Components/About/About';

import BlogDetails from './Components/BlogDetails/BlogDetails';
import Brands from './Components/Brands/Brands';
import Order from './Components/Order/order';







// eslint-disable-next-line no-unused-vars
let x = createBrowserRouter([
  {path : "" , element:<Layout/>,children:[
    {path : "ourcars",element:<OurCar/> },
    {path : "blog",element:<BlogPage/> },
    {path : "about",element:<About/> },
    {path : "order",element:<Order/> },
    {path : "brands",element:<Brands/> },
    {path : "/blog/:id",element:<BlogDetails /> },
  ]},
{index : true,element:<Home/>}]

)

function App() {


  return(
  
  <>
 
      <RouterProvider router={x}></RouterProvider>
 
  </>
  )
}

export default App;
