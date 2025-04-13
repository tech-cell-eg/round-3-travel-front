import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { useGetQuery } from "../../lib/useGetQuery";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 29.7604, // Houston
  lng: -95.3698,
};
const markers = [
  { lat: 34.0522, lng: -118.2437 }, // Los Angeles
  { lat: 29.7604, lng: -95.3698 },  // Houston
  { lat: 25.7617, lng: -80.1918 },  // Miami
];

type DmapProps = {
  slug: string | undefined;
};

export default function Dmap({ slug }: DmapProps) {
  const [date, setDate] = useState(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const {
  //  data: tours = {},
    isLoading,
    isError,
    error,
  } = useGetQuery("tours", `/tours/${slug}`);

  const { data: faqResponse = {} } = useGetQuery("faq", `/faqs`);
  const faqData = Array.isArray(faqResponse.data) ? faqResponse.data : [];
  
 // const toursData = tours?.data || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div  className="w-[70%]">
      {/* Map Section */}
      <div className=" pb-20 py-12 ">
        <h2 className="text-3xl font-bold text-[#001F5F] mb-6">Tour Map</h2>
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ""}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
          >
            {markers.map((pos, i) => (
              <Marker key={i} position={pos} />
            ))}
          </GoogleMap>
        </LoadScript>
        <hr className="border border-gray-300 my-8" />
      </div>

      {/* Calendar Section */}
      <div className=" pb-10 ">
        <h2 className="text-3xl font-bold text-[#001F5F] mb-6">
          Availability Calendar
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <Calendar
            value={date}
            onChange={(e: any) => setDate(e.value)}
            selectionMode="single"
            inline
            numberOfMonths={2}
            showOtherMonths
            minDate={new Date()}
            className="!border-none"
          />
        </div>
        <hr className="w-full border border-gray-300 my-10" />
      </div>

      {/* FAQ Section */}
      <div className=" px-4 ">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">FAQ</h2>
        <Accordion
          activeIndex={activeIndex}
          onTabChange={(e: any) => setActiveIndex(e.index)}
          className="space-y-4"
        >
          {faqData.map((tab: any, index: number) => (
            <AccordionTab
              key={index}
              header={
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold">{tab?.question}</span>
                  <div
                    className={`w-3 h-3 rounded-full ml-2 transition-colors duration-300 ${
                      activeIndex === index ? "bg-orange-500" : "bg-gray-400"
                    }`}
                  ></div>
                </div>
              }
              contentClassName="bg-white shadow-md rounded-lg p-4"
            >
              <p className="text-gray-700">{tab?.answer}</p>
            </AccordionTab>
          ))}
        </Accordion>
        <hr className="w-full border border-gray-300 my-10" />
      </div>
    </div>
  );
}
