
import { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { useGetQuery } from '../../lib/useGetQuery';    

interface EditableDemoProps {
    onCitySelect: (city: any) => void;       
    endpoint: string;
}

export default function EditableDropdown({ onCitySelect, endpoint }: EditableDemoProps) {
    const [selectedItem, setSelectedItem] = useState(null);

    // Get the data from API using custom hook useGetQuery
    const { data, isLoading, isError, error } = useGetQuery(endpoint, `/${endpoint}`);

    // Handle loading and error states
    if (isLoading) {
        return (
            <div className="flex justify-content-center">
                <i className="pi pi-spin pi-spinner text-4xl"></i>
            </div>
        );
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    // Make sure the data is an array
    const groupedData = Array.isArray(data.data) ? data.data : [];

    //handle the change event
    const handleChange = (e: any) => {
        setSelectedItem(e.value);
        onCitySelect(e.value);
    };


    return (
        <div className="card flex justify-content-center">
            <Dropdown 
                value={selectedItem} 
                onChange={handleChange} 
                options={groupedData} 
                // Check if the endpoint is "tours"
                optionLabel={endpoint === 'tours' ? 'category.name' : 'name'}   
                editable={false} 
                readOnly={true}
                placeholder="Select an option" 
                className="w-8 h-8 border-2 border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 ease-in-out"
                dropdownIcon={<i className="pi pi-chevron-down  text-transparent" />}
                panelClassName="bg-white  ps-2 py-2 pe-5 border-0 "
            />
        </div>
    );
}

