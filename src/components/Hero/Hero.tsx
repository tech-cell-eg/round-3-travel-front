
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Duration from "../Calender/CalenderRange";
import TourType from "../TourType/TourType";
import { Button } from 'primereact/button';
import WhereDestination from "../WhereDestination/WhereDestaination";

export default function Hero() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [selectedCity, setSelectedCity] = useState<{id: string, name: string} | null>(null);
  const [selectedTourType, setSelectedTourType] = useState<{id: string, name: string} | null>(null);
  
  // Handle date range selection
  const handleDateChange = (start: Date | null, end: Date | null) => {
    setStartDate(start);
    setEndDate(end);
  };

  // Handle city selection
  const handleCitySelect = (city: {id: string, name: string} | null) => {
    setSelectedCity(city);
  };

  // Handle tour type selection
  const handleTourTypeSelect = (tourType: {id: string, name: string} | null) => {
    setSelectedTourType(tourType);
  };

  // Handle search button click
  const handleSearch = () => {
    const params = new URLSearchParams();
    
    // Add destination parameters
    if (selectedCity) {
      params.append("destination_id", selectedCity.id);
      params.append("destination_name", selectedCity.name); // For display purposes
    }
    
    // Add date parameters
    if (startDate) {
      params.append("start_date", startDate.toISOString().split('T')[0]);
    }
    
    if (endDate) {
      params.append("end_date", endDate.toISOString().split('T')[0]);
    }
    
    // Add tour type parameters
    if (selectedTourType) {
      params.append("tour_type_id", selectedTourType.id);
      params.append("tour_type_name", selectedTourType.name); // For display purposes
    }
    
    // Navigate to list page with all parameters
    navigate(`/list?${params.toString()}`);
  };

  return (
    <div>
      <div className="bg-[url('/Section.png')] rounded-md bg-no-repeat bg-center bg-cover w-full h-[550px]">
        <div className="flex flex-col items-center md:pt-32 pt-22 text-secondTextColor">
          <h2 className="font-bold xl:text-5xl md:text-2xl text-xl tracking-wide">Your world of joy</h2>
          <p className="md:pt-10 pt-4 text-sm text-center max-md:px-2">From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
          
          <div className="md:mt-14 mt-6 bg-bgHome rounded-md py-5 px-8 md:items-center max-md:content-start flex max-md:flex-col md:gap-5">
            {/* Where Destination Section */}
            <div className="flex">
              <div className="card flex justify-content-center items-center">
                <WhereDestination onCitySelect={handleCitySelect} />
              </div>
              <div className="text-sm ps-2">
                <label>
                  <h6 className="text-mainTextColor">Where</h6>
                  <p className="text-textGrayColor">
                    {selectedCity ? selectedCity.name : "Search destinations"}
                  </p>       
                </label>
              </div>
            </div>
            
            {/* When - Date Section */}
            <div className="flex max-md:my-3">
              <div className="card flex justify-content-center w-8">
                <Duration onDateChange={handleDateChange} />
              </div>
              <div className="text-sm ps-2 text-mainTextColor">
                <label>
                  <h6 className="text-mainTextColor">When</h6>
                  <div className="flex text-textBlack text-sm">
                    {startDate && <p className="pe-2">{startDate.toLocaleDateString()}</p>}
                    {endDate && <p>{endDate.toLocaleDateString()}</p>}
                    {!startDate && !endDate && <p>Select dates</p>}
                  </div>
                </label>
              </div>
            </div>
            
            {/* Tour Type Section */}
            <div className="flex">
              <TourType onTourTypeSelect={handleTourTypeSelect}/>
              <div className="text-sm ps-2">
                <label>
                  <h6 className="text-mainTextColor">Tour Type</h6>
                  <p className="text-textGrayColor">
                    {selectedTourType ? selectedTourType.name : "All Tours"}
                  </p>       
                </label>
              </div>
            </div>
            
            {/* Search Button */}
            <div className="card flex justify-content-center lg:ps-22 md:ps-5 max-md:mt-4">
              <Button 
                unstyled={true}
                className="text-bgHome bg-bgButtonOrange text-sm rounded border-0 px-6 cursor-pointer py-2"
                label="Search"
                onClick={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}