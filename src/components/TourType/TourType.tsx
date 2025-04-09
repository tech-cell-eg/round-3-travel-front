import { InputText } from "primereact/inputtext";
import { useState } from "react";

export default function TourType() {
        const [value, setValue] = useState('');
    
  return (
    <>
        <div className="flex">
            <div className="card flex justify-content-center items-center">
                <InputText id="where" className='w-8 h-8 border-2 rounded border-borderGrayInputs ' value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <div  className="text-sm ps-2">
                <label >
                    <h6 className="text-mainTextColor">Tour Type</h6>
                    <p className="text-textGrayColor">All Tours</p>
                </label>
            </div>
        </div>
    </>
  )
}
