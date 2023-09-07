import React, { useState } from 'react';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col ">
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
