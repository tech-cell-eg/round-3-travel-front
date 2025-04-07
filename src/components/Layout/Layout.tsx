import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Outlet/>
      </div>
      <Footer/>
    </div>
    </>
  )
}