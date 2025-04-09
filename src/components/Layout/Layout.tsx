import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='bg-bgHome md:px-5 '>
      <Navbar/>
      <div className='pt-5 w-full'>
        
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
    </>
  )
}