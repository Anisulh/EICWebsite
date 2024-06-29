import { useEffect, useState } from 'react';
import getTodayTimings from '../utils/getTodayTimings';
import { getPrayerTimings } from '../utils/apiService';
import SalahTimetable from '../pages/SalahTimetable';

export default function Home() {
    const [todayTimings, setTodayTimings] = useState<any>(null);
    const [liveTimings, setLiveTimings] = useState<any>(null);

    useEffect(() => {
        setTodayTimings(getTodayTimings());

        const fetchLiveTimings = async () => {
            const timings = await getPrayerTimings();
            setLiveTimings(timings);
        };

        fetchLiveTimings();
    }, []);

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center py-8'>
            <header className='w-full bg-primary text-white text-center py-8'>
                <h1 className='text-2xl font-bold'>Elmhurst Islamic Center</h1>
                <p className='text-sm mt-2'>
                    Dedicated to serving the Islamic community within Elmhurst,
                    Queens
                </p>
            </header>

            <main className='flex flex-col items-center w-full px-4 mt-8 space-y-8'>
                <section className='bg-white shadow-md rounded-lg p-6 w-full max-w-3xl'>
                    <p className='text-lg text-center mb-4'>
                        Elmhurst Islamic Center serves the spiritual, religious,
                        and communal needs of the Muslim community by means of
                        nurturing their faith, upholding their values, and
                        fostering the well-being of the community through
                        worship, charity, education, outreach, and civic
                        engagement.
                    </p>
                    <p className='text-lg text-center'>
                        Our goal is to become a model Muslim community that
                        strives to attain the highest ideals by the adherence to
                        the Quran and Sunnah.
                    </p>
                </section>

                <button className='bg-secondary text-white py-2 px-4 rounded-full shadow-md hover:bg-secondary-dark'>
                    Donation Information
                </button>

                <section className='w-full max-w-3xl'>
                    <h2 className='text-xl font-bold text-center mb-4 text-primary'>
                        Salah Timings for Today
                    </h2>
                    {todayTimings ? (
                        <SalahTimetable
                            liveTimings={liveTimings}
                            todayTimings={todayTimings}
                        />
                    ) : (
                        <p>Timings not available for today.</p>
                    )}
                </section>
            </main>
        </div>
    );
}
