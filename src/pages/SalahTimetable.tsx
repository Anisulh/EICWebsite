import React from 'react';
import { convertTo12HourFormat } from '../utils/timeUtils';

interface SalahTimetableProps {
    liveTimings?: { [key: string]: string } | null;
    todayTimings?: { [key: string]: string } | null;
}

const SalahTimetable: React.FC<SalahTimetableProps> = ({
    liveTimings,
    todayTimings,
}) => {
    const prayerTimes = [
        { name: 'Fajr', adhan: 'Fajr', iqamah: 'fajr' },
        { name: 'Zuhr', adhan: 'Dhuhr', iqamah: 'zuhr' },
        { name: 'Asr', adhan: 'Asr', iqamah: 'asr' },
        { name: 'Maghrib', adhan: 'Maghrib', iqamah: 'maghrib' },
        { name: 'Isha', adhan: 'Isha', iqamah: 'isha' },
        { name: 'Jumuah', adhan: '1:15 PM', iqamah: '1:30' },
    ];

    return (
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <h3 className='text-xl font-bold text-white bg-teal-600 p-2 text-center'>
                Today's Prayer Times
            </h3>
            <div className='p-2'>
                <table className='w-full text-sm'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='p-2 text-left font-semibold text-gray-700'>
                                Prayer
                            </th>
                            <th className='p-2 text-left font-semibold text-gray-700'>
                                Starts
                            </th>
                            <th className='p-2 text-left font-semibold text-gray-700'>
                                Iqamah
                            </th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-100'>
                        {prayerTimes.map((prayer) => (
                            <tr key={prayer.name}>
                                <td className='p-2 font-medium text-gray-900'>
                                    {prayer.name}
                                </td>
                                <td className='p-2 text-gray-700'>
                                    {prayer.name !== 'Jumuah'
                                        ? liveTimings
                                            ? convertTo12HourFormat(
                                                  liveTimings[prayer.adhan]
                                              )
                                            : '-'
                                        : prayer.adhan}
                                </td>
                                <td className='p-2 text-gray-700'>
                                    {prayer.name !== 'Jumuah'
                                        ? todayTimings?.[prayer.iqamah] || '-'
                                        : prayer.iqamah}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalahTimetable;
