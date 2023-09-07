import React, { FC } from 'react';

interface Props {
  selectedDate: string | null;
  setSelectedDate: (date: string) => void;
}

const DatePicker: FC<Props> = ({ selectedDate, setSelectedDate }) => {
  
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <input
        type="date"
        value={selectedDate || ''}
        onChange={handleDateChange}
        className="text-xs px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DatePicker;
