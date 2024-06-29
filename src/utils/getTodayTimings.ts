import { SalahTimetable } from './types';
import salahTimetableData from './salahTimetable2024.json';

const salahTimetable: SalahTimetable = salahTimetableData;

const getTodayTimings = () => {
    const today = new Date();
    const month = today.toLocaleString('default', { month: 'long' });
    const day = today.getDate();

    const monthData = salahTimetable[month];

    if (!monthData) return null;

    for (const period of monthData) {
        const [start, end] = period.date.split('-').map(Number);
        if (day >= start && day <= end) {
            return period;
        }
    }

    return null;
};

export default getTodayTimings;
