// ==== Imports ====
import { useState, useRef } from "react";
//import { useParams } from "react-router-dom";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { BlockUI } from "primereact/blockui";
import { Calendar as CalendarIcon, CheckCircleIcon, XCircleIcon } from "lucide-react";
import { useGetQuery } from "../../lib/useGetQuery";
import "../../App.css";

// ==== Load Static Images ====
const images = import.meta.glob("../../assets/Dimages/*.png", { eager: true });
const imageList = Object.values(images).map((mod: any) => mod.default);

// ==== Component Start ====
export default function Dheader() {
  const [dateRange, setDateRange] = useState<Date[] | null>(null);
  const calendarRef = useRef<any>(null);
  const [activeButton, setActiveButton] = useState("");
  const [ticketCounts, setTicketCounts] = useState<{ [key: number]: number }>({});
  const [selectedExtras, setSelectedExtras] = useState<number[]>([]);
  

  //const { slug } = useParams();

  const {
    data: tours = {},
    isLoading,
    isError,
    error,
  } = useGetQuery("tours", `/tours/sunt-accusamus-iste`);

  const toursArray = tours?.data || [];

  const totalPrice = toursArray?.ticket_prices?.reduce((acc: number, ticket: any) => {
    const quantity = ticketCounts[ticket.id] || 0;
    return acc + quantity * ticket.price;
  }, 0);

  const handleButtonClick = (buttonName: string) => setActiveButton(buttonName);
  const handleTicketChange = (id: number, value: number | null) =>
    setTicketCounts((prev) => ({ ...prev, [id]: value || 0 }));
  const handleExtraToggle = (id: number) =>
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  const isBestseller = toursArray?.bestseller === "Yes";
const isFreeCancellation = toursArray?.free_cancellation === "Yes";


  return (
    <section className="">
      {/* === Breadcrumbs & Filters === */}
      <div className="p-6 flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
        <p>
          <span className="text-gray-400">Home</span> &gt;{" "}
          <span className="text-gray-400">Tours</span> &gt;{" "}
          <span className="text-black font-semibold">Phuket</span>
        </p>
        <p className="text-sm sm:text-base text-gray-800">
          THE 10 BEST Phuket Tours & Excursions
        </p>
      </div>

      <div className="p-6 flex gap-3">
  {[
    { key: "bestseller", label: "Bestseller", active: isBestseller },
    { key: "cancel", label: "Free cancellation", active: isFreeCancellation },
  ].map((btn) => (
    <Button
      key={btn.key}
      label={btn.label}
      onClick={() => handleButtonClick(btn.key)}
      className={`text-sm font-semibold px-4 py-2 rounded-2xl shadow-none transition duration-200 ${
        btn.active || activeButton === btn.key
          ? "text-bgButtonOrange bg-textFooter"
          : "bg-gray-200 text-black hover:bg-textFooter hover:text-bgButtonOrange"
      }`}
    />
  ))}
</div>


      {/* === Main Title + Details === */}
      <div className="p-6">
        <p className="w-1/2 text-2xl font-bold text-gray-800">{toursArray?.title}</p>

        <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6 px-4">
          <div className="flex gap-4 text-gray-600 text-base font-normal">
            <p className="text-lg">{toursArray?.rating} ({toursArray?.reviews_count})</p>
            <p>{toursArray?.destination?.name}</p>
            <p>{toursArray?.group_size} booked</p>
          </div>


        </div>

        {/* === Gallery === */}
        <div className="grid grid-cols-3 pt-4 grid-rows-2 gap-2 h-[400px]">
          <img src={imageList[3]} className="col-span-2 row-span-2 object-cover w-full h-full rounded-xl" />
          <img src={imageList[0]} className="col-span-1 row-span-1 object-cover w-full h-full rounded-xl" />
          <div className="grid grid-cols-2 gap-2 col-span-1 row-span-1">
            <img src={imageList[1]} className="object-cover w-full h-full rounded-xl" />
            <img src={imageList[2]} className="object-cover w-full h-full rounded-xl" />
          </div>
        </div>
      </div>

      {/* === Details Section === */}
      <div className="flex flex-col lg:flex-row gap-10 ps-10 py-10">
        <div className="flex-1">
          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 py-4">
            {[
              { label: "Duration", value: `${toursArray?.duration} days` },
              { label: "Group Size", value: `${toursArray?.group_size} people` },
              { label: "Ages", value: `${toursArray?.ages}` },
              { label: "Languages", value: `${toursArray?.languages}` },
            ].map((item, i) => (
              <div key={i} className="flex items-center p-2">
                <div className="w-5 h-5 border-2 border-gray-200 rounded-xl p-4 mr-4"></div>
                <div>
                  <p className="text-sm text-gray-700">{item.label}</p>
                  <p className="text-sm font-normal text-gray-500 mt-1">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="max-w-xl pb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#05073c] mb-4">Tour Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{toursArray?.description}</p>

            <h4 className="text-xl font-semibold text-[#05073c] mb-3">Tour Highlights</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {toursArray?.highlights?.map((item: any, i: number) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          <hr className="text-gray-300" />

          {/* What's Included */}
          <div className="py-12 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">What's included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <ul className="space-y-4">
                {toursArray?.included_amenities?.map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="text-green-300 mt-1" size={20} />
                    <span className="text-gray-700 text-sm">{item.name}</span>
                  </li>
                ))}
              </ul>

              <ul className="space-y-4">
                {toursArray?.excluded_amenities?.map((item: any, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircleIcon className="text-pink-300 mt-1" size={20} />
                    <span className="text-gray-700 text-sm">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="text-gray-300" />
        </div>

        {/* Booking Card */}
        <div className="w-[70%] max-h-[900px] lg:max-w-xs bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <div className="mb-4 flex gap-2">
            <h3 className="text-lg text-gray-700">From</h3>
            <p className="text-xl font-bold text-[#05073c]">{toursArray?.ticket_prices?.[0]?.price}$</p>
          </div>

          {/* Date Range Picker */}
          <div
            onClick={() => calendarRef.current?.show()}
            className="mb-4 p-4 rounded-2xl border border-gray-200 flex items-center gap-4 cursor-pointer hover:shadow"
          >
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

          <Calendar
            ref={calendarRef}
            value={dateRange}
            onChange={(e: any) => setDateRange(e.value)}
            selectionMode="range"
            readOnlyInput
            showButtonBar
            appendTo={document.body}
            touchUI
            placeholder="Select date range"
            className="hidden"
          />

          <BlockUI blocked={!dateRange?.[0] || !dateRange?.[1]}>
            {/* Tickets */}
            <div className="mb-4 pt-4">
              <h4 className="font-semibold mb-2 text-sm text-gray-700">Tickets</h4>
              <div className="text-sm space-y-3 text-gray-700">
                {toursArray?.ticket_prices?.map((ticket: any, index: number) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>
                      {ticket.ticket_type?.name} ({ticket.ticket_type?.age_min}–
                      {ticket.ticket_type?.age_max} years) ${ticket.price}
                    </span>
                    <InputNumber
                      value={ticketCounts[ticket.id] || 0}
                      onValueChange={(e: any) => handleTicketChange(ticket.id, e.value)}
                      showButtons
                      buttonLayout="horizontal"
                      min={0}
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      inputClassName="text-center w-6 px-1 text-sm border-none focus:ring-0"
                      className="flex items-center justify-between border border-gray-300 rounded-md overflow-hidden w-[100px] h-8 bg-white"
                      incrementButtonClassName="w-6 h-8 flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-200 text-gray-700"
                      decrementButtonClassName="w-6 h-8 flex items-center justify-center text-xs bg-gray-100 hover:bg-gray-200 text-gray-700"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2 text-sm text-gray-700">Add Extra</h4>
              {toursArray?.extras?.map((extra: any) => {
                const isSelected = selectedExtras.includes(extra.id);
                return (
                  <div
                    key={extra.id}
                    onClick={() => handleExtraToggle(extra.id)}
                    className="flex items-center justify-between cursor-pointer px-4 py-2 mb-2 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <Checkbox
                        inputId={`extra-${extra.id}`}
                        checked={isSelected}
                        onChange={() => handleExtraToggle(extra.id)}
                      />
                      <label htmlFor={`extra-${extra.id}`} className="text-sm text-gray-700">
                        {extra.name}
                      </label>
                    </div>
                    <span className="text-sm font-medium text-gray-600">${extra.price}</span>
                  </div>
                );
              })}
            </div>

            <hr className="text-gray-300" />

            <div className="flex pt-10 justify-between items-center font-semibold text-lg mb-4 text-[#05073c]">
              <span>Total:</span>
              <span>${totalPrice}</span>
            </div>

            <Button
              label="Book Now"
              className="w-full bg-orange-500 border-none hover:bg-orange-600 text-white font-medium rounded-xl py-4"
            />
          </BlockUI>
        </div>
      </div>
    </section>
  );
}
