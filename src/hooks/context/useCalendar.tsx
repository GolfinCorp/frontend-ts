import { useContext } from 'react';
import { CalendarContext } from '@/contexts';
const useCalendar = () => {
  const { setSelectedDate } = useContext(CalendarContext);
  const setNewSelected = (day: Date) => {
    setSelectedDate(day);
  };
  return { setNewSelected, ...useContext(CalendarContext) };
};

export default useCalendar;
