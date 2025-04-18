
import { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";

interface CalenderRangeProps {
  onDateChange: (start: Date | null, end: Date | null) => void;
  initialStartDate?: Date | null;
  initialEndDate?: Date | null;
}

const CalenderRange = ({ 
  onDateChange, 
  initialStartDate = null, 
  initialEndDate = null 
}: CalenderRangeProps) => {
  const [dateRange, setDateRange] = useState<(Date | null)[] | null>(null);

  useEffect(() => {
    if (initialStartDate && initialEndDate) {
      setDateRange([initialStartDate, initialEndDate]);
    }
  }, [initialStartDate, initialEndDate]);

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const twoMonthsLater = new Date(today);
  twoMonthsLater.setMonth(today.getMonth() + 2);

  const handleCalendarChange = (e: any) => {
    const selectedRange = e.value as (Date | null)[] | null;
    setDateRange(selectedRange);

    if (selectedRange && selectedRange.length === 2) {
      onDateChange(selectedRange[0], selectedRange[1]);
    } else {
      onDateChange(null, null);
    }
  };

  return (
    <div>
      <Calendar
        className="w-full h-8 border-2 rounded-lg border-borderGrayInputs"
        value={dateRange}
        onChange={handleCalendarChange}
        selectionMode="range"
        minDate={tomorrow}
        maxDate={twoMonthsLater}
        readOnlyInput
        placeholder="Select date range"
      />
    </div>
  );
};

export default CalenderRange;