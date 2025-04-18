
import { useState } from "react";
import { useLocation } from "react-router-dom";
import TourTypeList from "./TourTypeList";
import FilterPrice from "./FilterPrice";
import LanguageList from "./LanguageList";
import RatingList from "./RatingList";
import ListResults from "./ListResults";
import { Language } from "./types";
import CalenderRange from "../Calender/CalenderRange";

export default function List() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const destinationId = searchParams.get("destination_id");
  const destinationName = searchParams.get("destination_name");
  const tourTypeId = searchParams.get("tour_type_id");
  const tourTypeName = searchParams.get("tour_type_name");
  const startDate = searchParams.get("start_date");
  const endDate = searchParams.get("end_date");
  const searchTerm = searchParams.get("search");

  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);
  const [selectedTourTypes, setSelectedTourTypes] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language[]>([]);
  const [selectedRating, setSelectedRating] = useState<string[]>([]);
  
  //date range state
  const [dateRange, setDateRange] = useState<{
    startDate: string | null;
    endDate: string | null;
  }>({ 
    startDate: startDate, 
    endDate: endDate 
  });
//handle date change function
  const handleDateChange = (start: Date | null, end: Date | null) => {
    setDateRange({
      startDate: start?.toISOString().split('T')[0] || null,
      endDate: end?.toISOString().split('T')[0] || null
    });
  };

  return (
    <div className="w-3/4 mx-auto text-mainTextColor pt-10">
      <div className="flex w-full justify-between text-sm">
        <p>Home &gt; Tours &gt; {destinationName || "All Destinations"}</p>
        <p>THE 10 BEST {destinationName || "Popular"} Tours & Excursions</p>
      </div>

      <h3 className="pt-10 md:font-bold font-semibold lg:text-3xl md:text-2xl text-lg">
        {destinationName ? `Tours in ${destinationName}` : "Explore all tours"}
        {tourTypeName && ` - ${tourTypeName}`}
        {searchTerm && ` - Search: "${searchTerm}"`}
      </h3>

      <div className="flex flex-wrap gap-5 mt-10">
        <div className="w-full md:w-1/4 h-fit border rounded-t-lg border-borderGrayInputs">
          <div className="bg-bgButtonOrange rounded-t-lg py-10 px-4">
            <div className="w-fit mx-auto">
              <p className="text-secondTextColor">When are you traveling?</p>
              <div className="w-fit bg-white rounded-lg">
                <CalenderRange 
                  onDateChange={handleDateChange}
                  initialStartDate={dateRange.startDate ? new Date(dateRange.startDate) : null}
                  initialEndDate={dateRange.endDate ? new Date(dateRange.endDate) : null}
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <TourTypeList 
              onTourTypeChange={setSelectedTourTypes} 
              initialSelectedTypes={selectedTourTypes}
            />
            <div className="h-[1px] bg-borderGrayInputs mx-auto my-3" />
            <FilterPrice 
              onPriceChange={(min, max) => {
                setMinPrice(min);
                setMaxPrice(max);
              }} 
              initialMinPrice={minPrice}
              initialMaxPrice={maxPrice}
            />
            <div className="h-[1px] bg-borderGrayInputs mx-auto my-3" />
            <LanguageList 
              onLanguageChange={setSelectedLanguage} 
              initialSelectedLanguages={selectedLanguage}
            />
            <div className="h-[1px] bg-borderGrayInputs mx-auto my-3" />
            <RatingList 
              onRatingChange={setSelectedRating} 
              initialSelectedRatings={selectedRating}
            />
          </div>
        </div>

        <div className="w-full md:w-4/6 me-3">
          <ListResults
            searchTerm={searchTerm}
            destinationId={destinationId}
            // destinationName={destinationName}
            startDate={dateRange.startDate}
            endDate={dateRange.endDate}
            tourTypeId={tourTypeId}
            // tourTypeName={tourTypeName}
            minPrice={minPrice}
            maxPrice={maxPrice}
            selectedTourTypes={selectedTourTypes}
            selectedLanguage={selectedLanguage}
            selectedRating={selectedRating}
          />
        </div>
      </div>
    </div>
  );
}