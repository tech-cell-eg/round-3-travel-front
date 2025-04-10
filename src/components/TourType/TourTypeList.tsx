import { useState } from "react";
import TourType from "../TourType/TourType";

export default function TourTypeList() {
    const [visible, setVisible] = useState(false);
    const [_, setSelectedTourType] = useState<string | { name: string } | null>(null);

    // selected tour from the dropdown for tour type from TourType component
  // and set it to the state
  const handleTourTypeSelect = (tourType: any) => {
    setSelectedTourType(tourType);    
  };

    return (
        <div>
            <p
                onClick={() => setVisible(!visible)}
                className="text-blue-600 underline cursor-pointer w-fit"
            >
                                <p>Tour Type</p>

               </p>

            {visible && (
                <div className="mt-2">
                                   <TourType onTourTypeSelect={handleTourTypeSelect}/>

                </div>
            )}
        </div>
    );
}
