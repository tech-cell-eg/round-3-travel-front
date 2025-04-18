
import { useState } from "react";
import EditableDropdown from "../DropdownSelect/DropdownSelect";

interface City {
  id: string;
  name: string;
}

interface WhereDestinationProps {
  onCitySelect: (city: City | null) => void;
}

export default function WhereDestination({ onCitySelect }: WhereDestinationProps) {
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  //handle the selected destination and send it to hero component
  const handleCityChange = (city: City | null) => {
    setSelectedCity(city);
    onCitySelect(city);
  };

  //dropdown props
  const dropdownProps = {
    onCitySelect: handleCityChange,
    endpoint: "destinations",
    selectedItem: selectedCity,
    itemLabel: "name"
  };

  return (
    <div className="card flex justify-content-center items-center">
      <EditableDropdown 
        {...dropdownProps}
      />
    </div>
  );
}