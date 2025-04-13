import { useState } from "react";
import Duration from "../Calender/CalenderRange";
import TourTypeList from "./TourTypeList";
import FilterPrice from "./FilterPrice";
import DurationList from "./DurationList";
import LanguageList from "./LanguageList";
import RatingList from "./RatingList";

export default function List() {
  const [_, setStartDate] = useState<Date | null>(null);
  const [__, setEndDate] = useState<Date | null>(null);
  const [___, setSelectedPrices] = useState<string[]>([]);
  const [____, setSelectedTourTypes] = useState<string[]>([]);
  const [_____, setSelectedDuration] = useState<string[]>([]);
  const [______, setSelectedLanguage] = useState<string[]>([]);
  const [_______, setSelectedRating] = useState<string[]>([]);

  //selected dates
  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  //selected price
  const handlePriceChange = (prices: string[]) => {
    setSelectedPrices(prices);
  };

  //selected duration
  const handleDurationChange = (duration: string[]) => {
    setSelectedDuration(duration);
  };

  //selected tour type
  const handleTourTypeChange = (tourTypes: string[]) => {
    setSelectedTourTypes(tourTypes);
  };

  //selected language
  const handleLanguageChange = (language: string[]) => {
    setSelectedLanguage(language);
  };

  //selected rating
  const handleRatingChange = (rating: string[]) => {
    setSelectedRating(rating);
  };

  return (
    <div className="w-3/4 mx-auto text-mainTextColor pt-10">
      <div className="flex w-full justify-between text-sm">
        <p>Home&gt;Tours&gt;Phuket</p>
        <p>THE 10 BEST Phuket Tours & Excursions</p>
      </div>

      <h3 className="pt-10 md:font-bold font-semibold lg:text-3xl md:text-2xl text-lg">
        Explore all things to do in Phuket
      </h3>

      <div className="flex flex-wrap gap-5 mt-10">
        <div className="w-full md:w-1/4 border rounded-t-lg border-borderGrayInputs">
          <div className="bg-bgButtonOrange rounded-t-lg py-10">
            <div className="w-fit mx-auto">
              <p className="text-secondTextColor">When are you traveling?</p>
              <div className="bg-white w-fit h-fit rounded-lg">
                <Duration onDateChange={handleDateChange} />
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="pb-3">
              <TourTypeList onTourTypeChange={handleTourTypeChange} />
            </div>
            <div className="h-[1px] bg-borderGrayInputs mx-auto"></div>
            <div className="pb-3">
              <FilterPrice onPriceChange={handlePriceChange} />
            </div>
            <div className="h-[1px] bg-borderGrayInputs mx-auto"></div>
            <div className="pb-3">
              <DurationList onDurationChange={handleDurationChange} />
            </div>
            <div className="h-[1px] bg-borderGrayInputs mx-auto"></div>
            <div className="pb-3">
              <LanguageList onLanguageChange={handleLanguageChange} />
            </div>
            <div className="h-[1px] bg-borderGrayInputs mx-auto"></div>
            <div className="pb-3">
              <RatingList onRatingChange={handleRatingChange} />
            </div>

          </div>
        </div>

        <div className="w-full md:w-4/6 me-3">
          <div className="flex">
          </div>
        </div>
      </div>
    </div>
  );
}
