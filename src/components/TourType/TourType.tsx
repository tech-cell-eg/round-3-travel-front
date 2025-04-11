

import { useState } from "react";
import EditableDropdown from "../DropdownSelect/DropdownSelect"


interface TourTypeProps {
  onTourTypeSelect: (tourType: any) => void;
}

export default function TourType({ onTourTypeSelect }: TourTypeProps) {
  const [_, setSelectedTourType] = useState<string | { name: string } | null>(null);

  //to handle the selected tour type and send it to the parent component
  const handleTourTypeChange = (tourType: any) => {
    setSelectedTourType(tourType);
    onTourTypeSelect(tourType);   
  };

  return (
    <div className="card flex justify-content-center items-center">
      <EditableDropdown 
        onCitySelect={handleTourTypeChange} 
        endpoint="tour-categories"  
      />
    </div>
  );
}



