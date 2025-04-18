
import { useState } from "react";
import EditableDropdown from "../DropdownSelect/DropdownSelect";

interface TourTypeProps {
  onTourTypeSelect: (tourType: any) => void;
}

export default function TourType({ onTourTypeSelect }: TourTypeProps) {
  const [_, setSelectedTourType] = useState<string | { name: string } | null>(null);

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

