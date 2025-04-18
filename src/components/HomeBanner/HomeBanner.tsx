import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export default function HomeBanner() {
  return (
    <>
       <div className="text-mainTextColor mx-10 bg-[url('/Frame.png')] rounded-md bg-no-repeat bg-center bg-cover mt-16 ">
         <div className="py-26 ps-16">
            <h3 className="text-xl md:text-3xl font-bold leading-[1.3]">Grab up to <span className="text-bgButtonOrange">35% off </span>
            <br/>on your favorite <br/>Destination</h3>
            <p className="pt-6 pb-10">Limited time offer, don't miss the opportunity</p>
            <div className="card">
                <Link to={'/list'}>
                    <Button 
                    unstyled={true}
                    className="text-bgHome
                        bg-bgButtonOrange 
                        text-sm rounded-lg border-0 
                        px-6 cursor-pointer py-2"
                    label="Book Now" /> 
                </Link>
            </div>
         </div>
       </div>
    </>
  )
}
