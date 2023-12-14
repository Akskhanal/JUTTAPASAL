
  //import Footer from './Component/Footer/Footer'
import { ShoopingCartProvider } from './Component/Context/ShoppingCartContext'
import Header from './Component/Header/Header'
import { Outlet } from 'react-router-dom'



const Layout = () => {
  return (
   <>
   <ShoopingCartProvider>
   <Header/>
   <Outlet/>
   </ShoopingCartProvider>
   {/*<Footer/>*/}
   </>
  )
}

export default Layout