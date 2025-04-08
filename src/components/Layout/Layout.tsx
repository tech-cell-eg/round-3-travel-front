import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <div className='bg-bgHome'>
      <Navbar/>
      <div className=' py-10 w-full'>
        
        <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
    </>
  )
}