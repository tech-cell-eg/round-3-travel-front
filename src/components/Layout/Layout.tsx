import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>

    <div className='bg-bgHome md:px-5 '>
      <Navbar/>
        <div className="flex flex-col min-h-screen bg-bgHome">
        <div className="flex-grow py-10 pt-5 w-full w-full">
          <Outlet />
        </div>
        <Footer />
      </div>
      </div>

    </>
  )
}
