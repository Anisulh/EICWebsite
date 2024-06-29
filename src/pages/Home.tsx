import { useEffect, useState } from "react";
import getTodayTimings from "../utils/getTodayTimings";
import { getPrayerTimings } from "../utils/apiService";
import SalahTimetable from "../pages/SalahTimetable";

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
    <div className=" min-h-screen flex flex-col items-center">
      <header className="w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center py-12 px-4 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Elmhurst Islamic Center
        </h1>
        <p className="text-lg md:text-xl mt-2 opacity-90">
          Dedicated to serving the Islamic community within Elmhurst, Queens
        </p>
      </header>

      <main className="flex flex-col items-center w-full px-4 py-8 space-y-12 max-w-6xl mx-auto">
        <section className="bg-white shadow-md rounded-lg p-8 w-full text-center">
          <p className="text-lg md:text-xl text-center mb-6 text-gray-700 leading-relaxed">
            Elmhurst Islamic Center serves the spiritual, religious, and
            communal needs of the Muslim community by means of nurturing their
            faith, upholding their values, and fostering the well-being of the
            community through worship, charity, education, outreach, and civic
            engagement.
          </p>
          <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed">
            Our goal is to become a model Muslim community that strives to
            attain the highest ideals by the adherence to the Quran and Sunnah.
          </p>
          <button className="bg-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 mt-12">
            Donation Information
          </button>
        </section>

        <section className="w-full bg-white rounded-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-green-700">
            Salah Timings for Today
          </h2>
          {todayTimings ? (
            <SalahTimetable
              liveTimings={liveTimings}
              todayTimings={todayTimings}
            />
          ) : (
            <p className="text-center text-gray-600">
              Timings not available for today.
            </p>
          )}
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center py-4 mt-12">
        <p>&copy; 2024 Elmhurst Islamic Center. All rights reserved.</p>
      </footer>
    </div>
  );
}
