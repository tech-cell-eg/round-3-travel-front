import { useParams } from "react-router-dom";
import Dfooter from "../Dfooter/Dfooter";
import Dheader from "../Dheader/Dheader";
import DItinerary from "../Ditinerary/DItinerary";
import Dmap from "../Dmap-calender/Dmap";
import Dreviews from "../Dreviews/Dreviews";
import { useEffect } from "react";

export default function Details() {
  const { slug } = useParams<{ slug: string }>();
    // ✅ Scroll to top-left corner when page mounts
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

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
