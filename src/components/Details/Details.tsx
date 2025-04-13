import Dfooter from "../Dfooter/Dfooter";
import Dheader from "../Dheader/Dheader";
import DItinerary from "../Ditinerary/DItinerary";
import Dmap from "../Dmap-calender/Dmap";
import Dreviews from "../Dreviews/Dreviews";

export default function Details() {
  return (
    <div className="w-[90%] m-auto">
        <Dheader/>
        <DItinerary/>
        <Dmap/>
        <Dreviews/>
        <Dfooter/>


      
    </div>
  )
}
