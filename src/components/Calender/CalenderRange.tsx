import { useState } from "react";
import { Calendar } from "primereact/calendar";

interface CalenderRangeProps {
  onDateChange: (start: Date | null, end: Date | null) => void;
}

const CalenderRange = ({ onDateChange }: CalenderRangeProps) => {
  const [dateRange, setDateRange] = useState<(Date | null)[] | null>(null);

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
