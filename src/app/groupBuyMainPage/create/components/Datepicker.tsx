import React, { useState } from 'react';

const DatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="date"
        value={selectedDate || ''}
        onChange={handleDateChange}
        className="px-2 py-1 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {selectedDate && <p className="mt-2 text-sm">Selected Date: {selectedDate}</p>}
    </div>
  );
};

export default DatePicker;