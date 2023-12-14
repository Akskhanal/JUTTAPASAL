import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Route,  RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Component/Home/Home.tsx'
import Adidas from './Component/Adidas/Adidas.tsx'
import Nike from './Component/Nike/Nike.tsx'




const  router =createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home/>}/>
     <Route path='/adidas' element={<Adidas/>}/>
     <Route path='/nike' element={<Nike/>}/>
</Route>
    
))
















ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <ChakraProvider>
     <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </ChakraProvider>
   
)


