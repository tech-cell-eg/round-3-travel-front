
import { useState } from "react";
import { useLocation } from "react-router-dom";
import TourTypeList from "./TourTypeList";
import FilterPrice from "./FilterPrice";
import LanguageList from "./LanguageList";
import RatingList from "./RatingList";
import ListResults from "./ListResults";
import { Language } from "./types";

export default function List() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  
  const destination = searchParams.get("destination");
  const startDate = searchParams.get("start_date");
  const endDate = searchParams.get("end_date");
  const tourType = searchParams.get("tour_type");

  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [selectedTourTypes, setSelectedTourTypes] = useState<string[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<Language[]>([]);
  const [selectedRating, setSelectedRating] = useState<string[]>([]);

  return (
    <div className="w-3/4 mx-auto text-mainTextColor pt-10">
      <div className="flex w-full justify-between text-sm">
        <p>Home &gt; Tours &gt; {destination || "All Destinations"}</p>
        <p>THE 10 BEST {destination || "Popular"} Tours & Excursions</p>
      </div>

      <h3 className="pt-10 md:font-bold font-semibold lg:text-3xl md:text-2xl text-lg">
        {destination ? `Tours in ${destination}` : "Explore all tours"}
        {tourType && ` - ${tourType}`}
      </h3>

      <div className="flex flex-wrap gap-5 mt-10">
        {/* Filters Sidebar */}
        <div className="w-full md:w-1/4 h-fit border rounded-t-lg border-borderGrayInputs">
          <div className="bg-bgButtonOrange rounded-t-lg py-10 px-4">
            <div className="w-fit mx-auto">
              <p className="text-secondTextColor">When are you traveling?</p>
              {startDate && endDate && (
                <div className="bg-white p-2 rounded-lg text-center">
                  <p>{new Date(startDate).toLocaleDateString()} to</p>
                  <p>{new Date(endDate).toLocaleDateString()}</p>
                </div>
              )}
            </div>
          </div>
          <div className="p-5">
            <TourTypeList onTourTypeChange={setSelectedTourTypes} />
            <div className="h-[1px] bg-borderGrayInputs mx-auto my-3" />
            <FilterPrice onPriceChange={setSelectedPrices} />
            <div className="h-[1px] bg-borderGrayInputs mx-auto my-3" />
            <LanguageList onLanguageChange={setSelectedLanguage} />
            <div className="h-[1px] bg-borderGrayInputs mx-auto my-3" />
            <RatingList onRatingChange={setSelectedRating} />
          </div>
        </div>

        {/* Results */}
        <div className="w-full md:w-4/6 me-3">
          <ListResults
            destination={destination}
            startDate={startDate}
            endDate={endDate}
            tourType={tourType}
            selectedPrices={selectedPrices}
            selectedTourTypes={selectedTourTypes}
            selectedLanguage={selectedLanguage}
            selectedRating={selectedRating}
          />
        </div>
      </div>
    </div>
  );
}