import { useContext } from 'react';
import { CalendarContext } from '@/contexts';
import { CalendarContextT } from '@/contexts/types.context';
const useCalendar = () => {
	const { setSelectedDate } = useContext(CalendarContext) as CalendarContextT;
	const setNewSelected = (day: Date) => {
		setSelectedDate(day);
	};
	return { setNewSelected, ...useContext(CalendarContext) };
};

export default useCalendar;
