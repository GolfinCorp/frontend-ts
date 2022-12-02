import { getCurrentDate } from "@/helpers/getCurrentDate";
import { createContext, useState } from "react";
import { CalendarContextT } from "./types.context";
import { PropChildrenT } from "@/types";

type propsT = PropChildrenT;
export const CalendarContext = createContext<CalendarContextT | {}>({});
const CalendarProvider = ({ children }: propsT) => {
  const currentDate = getCurrentDate();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);
  const data = { selectedDate, setSelectedDate };

  return (
    <CalendarContext.Provider value={data}>{children}</CalendarContext.Provider>
  );
};

export default CalendarProvider;
