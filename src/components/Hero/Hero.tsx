import { useState } from "react";
import Duration from "../Duration/Duration";
import TourType from "../TourType/TourType";
import { Button } from 'primereact/button';
import WhereDestination from "../WhereDestination/WhereDestaination";

export default function Hero() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | { name: string } | null>(null);
  const [selectedTourType, setSelectedTourType] = useState<string | { name: string } | null>(null);
  // function to handle the change in the calendar as a prop from the duration component
  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };
  
  // function to transform the date to a string
  const formatDate = (date: Date | null) => {
    if (date) {
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    return "Not selected";
  };

  // selected city from the dropdown for destination from WhereDestination component
  // and set it to the state
  const handleCitySelect = (city: any) => {
    setSelectedCity(city);  
  };

  // selected tour from the dropdown for tour type from TourType component
  // and set it to the state
  const handleTourTypeSelect = (tourType: any) => {
    setSelectedTourType(tourType);    
  };

  return (
    <>
      <div>
        <div className="bg-[url('/Section.png')] rounded-md bg-no-repeat bg-center bg-cover w-full h-[550px]">
          <div className="flex flex-col items-center md:pt-32 pt-22 text-secondTextColor">
            <h2 className="font-bold xl:text-5xl md:text-2xl text-xl tracking-wide">Your world of joy</h2>
            <p className="md:pt-10 pt-4 text-sm text-center max-md:px-2">From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
            <div className="md:mt-14 mt-6 bg-bgHome rounded-md py-5 px-8  md:items-center max-md:content-start flex max-md:flex-col  md:gap-5">
              <div className="flex ">
                <div className="card flex justify-content-center items-center">
                  <WhereDestination onCitySelect={handleCitySelect} />
                </div>
                <div className="text-sm ps-2">
                  <label>
                    <h6 className="text-mainTextColor">Where</h6>
                    <p className="text-textGrayColor">
                    {selectedCity ? 
                      typeof selectedCity === 'object' && 'name' 
                      in selectedCity ? selectedCity.name : selectedCity : "Search destinations"
                    }
                  </p>       
                  </label>
                </div>
              </div>
              <div className="flex max-md:my-3">
                <div className="card flex justify-content-center">
                  <Duration onDateChange={handleDateChange} />
                </div>
                <div className="text-sm ps-2 text-mainTextColor">
                  <label >
                    <h6 className="text-mainTextColor">When</h6>
                    <div className="flex text-textBlack text-sm">
                      <p className="pe-2">{formatDate(startDate)} -</p>
                      <p>{formatDate(endDate)}</p>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex">
                <TourType onTourTypeSelect={handleTourTypeSelect}/>
                <div className="text-sm ps-2">
                  <label>
                    <h6 className="text-mainTextColor">Tour Type</h6>
                    <p className="text-textGrayColor">
                    {selectedTourType ? 
                      typeof selectedTourType === 'object' && 'name' 
                      in selectedTourType ? selectedTourType.name : selectedTourType : "All Tours"
                    }
                  </p>       
                  </label>
                </div>
              </div>
              <div className="card flex justify-content-center lg:ps-22 md:ps-5 max-md:mt-4">
                <Button 
                  unstyled={true}
                  className="text-bgHome bg-bgButtonOrange text-sm rounded border-0 px-6 cursor-pointer py-2"
                  label="Search" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
