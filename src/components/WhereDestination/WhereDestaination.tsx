import { useState } from "react";
import EditableDropdown from "../DropdownSelect/DropdownSelect"

interface WhereDestinationProps {
  onCitySelect: (city: any) => void;
}

export default function WhereDestination({ onCitySelect }: WhereDestinationProps) {
  const [_, setSelectedCity] = useState<string | { name: string } | null>(null);

    //to handle the selected destination and send it to the parent component
  const handleCityChange = (city: any) => {
    setSelectedCity(city);
    onCitySelect(city);  
  };

  return (
    <div className="card flex justify-content-center items-center">
      <EditableDropdown 
        onCitySelect={handleCityChange} 
        endpoint="destinations"    
      />
    </div>
  );
}

