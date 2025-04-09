
import  { useState } from "react";
import { InputText } from "primereact/inputtext";
import Duration from "../Duration/Duration";
import TourType from "../TourType/TourType";
import { Button } from 'primereact/button';
import waveImg from '../../assets/heroImg/wave (4).svg';


export default function Hero() {
    const [value, setValue] = useState('');
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);

    //function to handele the change in the calender as a prop from the duration component
    const handleDateChange = (start: Date | null, end: Date | null) => {
      setStartDate(start);
      setEndDate(end);
    };
    
   //function to transform the date to a string
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
  return (
    <>
      <div>
      <div className="bg-[url('/image.png')] rounded-md bg-no-repeat bg-center bg-cover w-full h-[500px]">
        <div className="flex flex-col items-center md:pt-32 pt-22 text-secondTextColor">
            <h2 className="font-bold xl:text-5xl md:text-2xl text-xl tracking-wide">Your world of joy</h2>
            <p className="md:pt-10 pt-4 text-sm text-center max-md:px-2">From local escapes to far-flung adventures, find what makes you happy anytime, anywhere</p>
            <div className="md:mt-14 mt-6 bg-bgHome rounded-md py-5 px-8  md:items-center max-md:content-start flex max-md:flex-col  md:gap-5">
                <div className="flex ">
                    <div className="card flex justify-content-center items-center">
                        <InputText id="where" className='w-8 h-8 border-2 rounded border-borderGrayInputs ' value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <div  className="text-sm ps-2">
                        <label >
                            <h6 className="text-mainTextColor">Where</h6>
                            <p className="text-textGrayColor">Search destinations</p>
                        </label>
                    </div>
                </div>
                <div className="flex max-md:my-3">
                    <div className="card flex justify-content-center">

                      <Duration onDateChange={handleDateChange}/>
                    </div>
                    <div  className="text-sm ps-2 text-mainTextColor">
                        <label >
                          <h6 className="text-mainTextColor">When</h6>
                          <div className="flex text-textBlack text-sm">
                            <p className="pe-2"> {formatDate(startDate)} -</p>
                            <p> {formatDate(endDate)}</p>
                          </div>
                        </label>
                    </div>
                </div>
                <TourType/>
                <div className="card flex justify-content-center lg:ps-22 md:ps-5 max-md:mt-4">
                  <Button 
                    unstyled={true}
                    className="text-bgHome
                     bg-bgButtonOrange 
                     text-sm rounded border-0 
                     px-6 cursor-pointer py-2"
                    label="Search" /> 
                </div>
            </div>
            
        </div>
      </div>
      <div className="absolute left-0 right-0 lg:bottom-[180px]   bottom-[30px] h-22 ">
              <img src={waveImg}  alt='wave'/>
            </div>
      </div>
    </>
  )
}








   


        
    
            





     
