import { useParams } from "react-router-dom";
import Dfooter from "../Dfooter/Dfooter";
import Dheader from "../Dheader/Dheader";
import DItinerary from "../Ditinerary/DItinerary";
import Dmap from "../Dmap-calender/Dmap";
import Dreviews from "../Dreviews/Dreviews";

export default function Details() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="w-[90%] m-auto">
      <Dheader slug={slug} />
      <DItinerary slug={slug} />
      <Dmap slug={slug} />
      <Dreviews slug={slug} />
      <Dfooter />
    </div>
  );
}
