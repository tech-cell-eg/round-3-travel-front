import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

const Duration = ({ onDateChange }: { onDateChange: (start: Date | null, end: Date | null) => void }) => {
  const [dateRange, setDateRange] = useState<(Date | null)[] | null>(null);
  const [__, setStartDate] = useState<Date | null>(null);
  const [_, setEndDate] = useState<Date | null>(null);

  //   date of this day 
  const today = new Date();

//date of tomorrow
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  //date of two months later
  const twoMonthsLater = new Date(today);
  twoMonthsLater.setMonth(today.getMonth() + 2);

  // for update the startDate and endDate when dateRange changes
  useEffect(() => {
    if (dateRange && dateRange.length === 2) {
      setStartDate(dateRange[0]);
      setEndDate(dateRange[1]);
    }
  }, [dateRange]);   

//function to handle the change in the calender
const handleCalendarChange = (e: any) => {
    const selectedRange = e.value;
    if (selectedRange && selectedRange.length === 2) {
      setDateRange(selectedRange); //     for makesure the dateRange is updated
  
      // send the selected range to the parent component
      onDateChange(selectedRange[0], selectedRange[1]);
    }
  };
  return (
    <div>
      <Calendar
        className="w-8 h-8 border-2 rounded border-borderGrayInputs"
        value={dateRange}  
        onChange={handleCalendarChange}  
        selectionMode="range"  
        minDate={tomorrow}   
        maxDate={twoMonthsLater}  
      />
      
      
    </div>
  );
};

export default Duration;
