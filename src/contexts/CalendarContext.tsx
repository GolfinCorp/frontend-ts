import { getCurrentDate } from "@/helpers/getCurrentDate";
import { createContext, useState } from "react";

export const CalendarContext = createContext({});

type propsT = {
  children: React.ReactNode;
};
const CalendarProvider = ({ children }: propsT) => {
  const currentDate = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const data = { selectedDate, setSelectedDate };

  return (
    <CalendarContext.Provider value={data}>{children}</CalendarContext.Provider>
  );
};

export default CalendarProvider;
