import { useState ,useRef} from "react";
import { Calendar } from "primereact/calendar";
import { Calendar as CalendarIcon } from "lucide-react";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";

import "../../App.css";
const images = import.meta.glob("../../assets/Dimages/*.png", {
  eager: true,
});
const imageList = Object.values(images).map((mod: any) => mod.default);

export default function Dheader() {
  const [dateRange, setDateRange] = useState<Date[] | null>(null);
  const calendarRef = useRef<any>(null);
  const [servicePerBooking, setServicePerBooking] = useState(false);
  const [servicePerPerson, setServicePerPerson] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <section className="">
      <div className="p-6 flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
        <p>
          <span className="text-gray-400">Home</span> &gt;{" "}
          <span className="text-gray-400">Tours</span> &gt;{" "}
          <span className="text-black font-semibold">Phuket</span>
        </p>
        <p className="text-sm sm:text-base  text-gray-800">
          THE 10 BEST Phuket Tours & Excursions
        </p>
      </div>
      <div className="p-6 flex gap-3">
        <Button
          label="Bestseller"
          onClick={() => handleButtonClick("bestseller")}
          className={`text-sm font-semibold px-4 py-2 rounded-2xl shadow-none transition duration-200
            ${
              activeButton === "bestseller"
                ? "text-bgButtonOrange  bg-textFooter"
                : "bg-gray-200 text-black hover:bg-textFooter hover:text-bgButtonOrange"
            }`}
        />

        <Button
          label="Free cancellation"
          onClick={() => handleButtonClick("cancel")}
          className={`text-sm font-semibold px-4 py-2 rounded-2xl shadow-none transition duration-200
            ${
              activeButton === "cancel"
                ? "text-bgButtonOrange  bg-textFooter"
                : "bg-gray-200 text-black hover:bg-textFooter hover:text-bgButtonOrange"
            }`}
        />
      </div>
      <div>
        <p className="w-1/2 text-2xl p-6 font-bold text-gray-800">
          Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
          Tour
        </p>
        <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 px-10">
          {/* Ratings in a Row */}
          <div className="flex flex-row gap-4 text-gray-600 text-base font-normal">
            <p className="text-lg">4.8 (269)</p>
            <p>Paris, France</p>
            <p>30K+ booked</p>
          </div>

          {/* Share & Wishlist Buttons */}
          <div className="flex gap-2">
            <Button
              label="Share"
              onClick={() => handleButtonClick("share")}
              className={`text-sm font-semibold px-4 py-2 rounded-2xl shadow-none transition duration-200
        ${
          activeButton === "share"
            ? "text-bgButtonOrange bg-textFooter"
            : "bg-gray-200 text-black hover:bg-textFooter hover:text-bgButtonOrange"
        }`}
            />
            <Button
              label="Wishlist"
              onClick={() => handleButtonClick("wishlist")}
              className={`text-sm font-semibold px-4 py-2 rounded-2xl shadow-none transition duration-200
        ${
          activeButton === "wishlist"
            ? "text-bgButtonOrange bg-textFooter"
            : "bg-gray-200 text-black hover:bg-textFooter hover:text-bgButtonOrange"
        }`}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 pt-4 grid-rows-2 gap-2 h-[400px]">
          <img
            src={imageList[3]}
            alt="main"
            className="col-span-2 row-span-2 object-cover w-full h-full rounded-xl"
          />

          <img
            src={imageList[0]}
            alt="top-right"
            className="col-span-1 row-span-1 object-cover w-full h-full rounded-xl"
          />

          <div className="grid grid-cols-2 gap-2 col-span-1 row-span-1">
            <img
              src={imageList[1]}
              alt="bottom-left"
              className="object-cover w-full h-full rounded-xl"
            />
            <div className="relative">
              <img
                src={imageList[2]}
                alt="bottom-right"
                className="object-cover w-full h-full rounded-xl"
              />

              <button className="absolute bottom-1 right-0 md:bottom-4 md:right-4 bg-[#05073c] text-xs sm:text-sm font-semibold text-white px-3 py-1.5 sm:px-2 sm:py-1 rounded-xl shadow hover:bg-white hover:text-[#05073c] transition duration-200">
                See all photos
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 ps-10 py-10">
      {/* Info Grid */}
      <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 py-4">

{[{ label: 'Duration', value: '3 days' },
  { label: 'Group Size', value: '10 people' },
  { label: 'Ages', value: '18–99 yrs' },
  { label: 'Languages', value: 'English, Japanese' }].map((item, i) => (
    <div key={i} className="flex items-center p-2">
      <div className="w-5 h-5 border-2 border-gray-200 rounded-xl p-4 mr-4"></div>
      <div>
        <p className="text-sm text-gray-700">{item.label}</p>
        <p className="text-sm font-normal text-gray-500 mt-1">{item.value}</p>
      </div>
    </div>
  ))}
</div>
<div className="max-w-xl">
    <h2 className="text-3xl md:text-4xl font-bold text-[#05073c] mb-4">
      Tour Overview
    </h2>
    <p className="text-gray-700 mb-6 leading-relaxed">
      The Phi Phi archipelago is a must-visit while in Phuket, and this
      speedboat trip whisks you around the islands in one day. Swim over the
      coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at
      Bamboo Island, and visit Monkey Beach and Maya Bay, immortalized in
      "The Beach." Boat transfers, snacks, buffet lunch, snorkeling
      equipment, and Phuket hotel pickup and drop-off all included.
    </p>

    <h4 className="text-xl font-semibold text-[#05073c] mb-3">
      Tour Highlights
    </h4>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      <li>
        Experience the thrill of a speedboat to the stunning Phi Phi Islands
      </li>
      <li>Be amazed by the variety of marine life in the archipelago</li>
      <li>
        Enjoy relaxing in paradise with white sand beaches and azure
        turquoise water
      </li>
      <li>Feel the comfort of a tour limited to 35 passengers</li>
      <li>Catch a glimpse of the wild monkeys around Monkey Beach</li>
    </ul>
    </div>
  </div>


  {/* Booking Card */}
  <div className="w-[70%] lg:max-w-xs bg-white p-6  rounded-xl shadow-md border border-gray-100">
  {/* Header */}
    <div className="mb-4 flex gap-2">
      <h3 className="text-lg text-gray-700">From</h3>
      <p className="text-xl font-bold text-[#05073c]">$1,200</p>
    </div>

    <div>
      {/* Custom Date Card */}
{/* Date Range Picker */}
<div onClick={() => calendarRef.current?.show()} className="mb-4 p-4 rounded-2xl border border-gray-200 flex items-center gap-4 cursor-pointer hover:shadow">
  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
    <CalendarIcon className="w-5 h-5 text-gray-500" />
  </div>
  <div>
    <p className="text-lg font-semibold text-[#05073C]">Date Range</p>
    <p className="text-base text-gray-800">
      {dateRange && dateRange[0]
        ? `${dateRange[0].toLocaleDateString("en-US", {
            month: "long",
            day: "2-digit",
          })} - ${
            dateRange[1]
              ? dateRange[1].toLocaleDateString("en-US", {
                  month: "long",
                  day: "2-digit",
                })
              : "Select end date"
          }`
        : "Select date range"}
    </p>
  </div>
</div>

{/* Calendar component for range selection */}
<Calendar
  ref={calendarRef}
  value={dateRange}
  onChange={(e: any) => setDateRange(e.value)}
  selectionMode="range"
  readOnlyInput
  showButtonBar
  appendTo={document.body} // or remove if unnecessary
  touchUI
  placeholder="Select date range"
  className="hidden" // hide the calendar input itself
/>



    </div>

{/* Time */}
<div className="mb-4 p-4 rounded-2xl border border-gray-200 flex items-center gap-4">
  <div className="w-10 h-10 bg-gray-100 rounded-xl" /> {/* Placeholder for icon */}
  <div>
    <p className="text-lg font-semibold text-[#05073C]">Time</p>
    <p className="text-base text-gray-500">Choose time</p>
  </div>
</div>


    {/* Tickets */}
    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-sm text-gray-700">Tickets</h4>
      <div className="text-sm space-y-1 text-gray-700">
        <div className="flex justify-between">
          <span>Adult (18+ years)</span><span>$282.00 x 3</span>
        </div>
        <div className="flex justify-between">
          <span>Youth (13-17 years)</span><span>$168.00 x 2</span>
        </div>
        <div className="flex justify-between">
          <span>Children (0-12 years)</span><span>$80.00 x 4</span>
        </div>
      </div>
    </div>

    {/* Extras */}
    <div className="mb-4">
      <h4 className="font-semibold mb-2 text-sm text-gray-700">Add Extra</h4>
      <div className="flex items-center gap-2 mb-2">
        <Checkbox
          inputId="service1"
          checked={servicePerBooking}
          onChange={(e) => setServicePerBooking(e.checked!)}
        />
        <label htmlFor="service1" className="text-sm">Add Service per booking ($40)</label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          inputId="service2"
          checked={servicePerPerson}
          onChange={(e) => setServicePerPerson(e.checked!)}
        />
        <label htmlFor="service2" className="text-sm">
          Add Service per person ($40) <br />
          <span className="text-xs text-gray-500">Adult: $17.00 - Youth: $14.00</span>
        </label>
      </div>
    </div>

    {/* Total & Button */}
    <div className="flex justify-between items-center font-semibold text-lg mb-4 text-[#05073c]">
      <span>Total:</span>
      <span>$530.00</span>
    </div>

    <Button
      label="Book Now"
      className="w-full bg-orange-500 border-none hover:bg-orange-600 text-white font-medium rounded-xl py-4"
    />
  </div>
</div>

    </section>
  );
}
