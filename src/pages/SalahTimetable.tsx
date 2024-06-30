import React from "react";
import { convertTo12HourFormat } from "../utils/timeUtils";

interface SalahTimetableProps {
  liveTimings?: { [key: string]: string } | null;
  todayTimings?: { [key: string]: string } | null;
}

const SalahTimetable: React.FC<SalahTimetableProps> = ({
  liveTimings,
  todayTimings,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-x-auto">
      {todayTimings ? (
        <>
          <h3 className="text-xl font-semibold mb-4">
            Salah Timings for Today
          </h3>
          <table className="min-w-full text-center mb-8">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Prayer</th>
                <th className="border px-2 py-1">Starts</th>
                <th className="border px-2 py-1">
                  Iqamah
                  <br />
                  (call to prayer)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Fajr</td>
                <td className="border px-2 py-1">
                  {liveTimings
                    ? convertTo12HourFormat(liveTimings.Fajr)
                    : "Loading..."}
                </td>
                <td className="border px-2 py-1">{todayTimings.fajr}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Zuhr</td>
                <td className="border px-2 py-1">
                  {liveTimings
                    ? convertTo12HourFormat(liveTimings.Dhuhr)
                    : "Loading..."}
                </td>
                <td className="border px-2 py-1">{todayTimings.zuhr}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Asr</td>
                <td className="border px-2 py-1">
                  {liveTimings
                    ? convertTo12HourFormat(liveTimings.Asr)
                    : "Loading..."}
                </td>
                <td className="border px-2 py-1">{todayTimings.asr}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Maghrib</td>
                <td className="border px-2 py-1">
                  {liveTimings
                    ? convertTo12HourFormat(liveTimings.Maghrib)
                    : "Loading..."}
                </td>
                <td className="border px-2 py-1">{todayTimings.maghrib}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Isha</td>
                <td className="border px-2 py-1">
                  {liveTimings
                    ? convertTo12HourFormat(liveTimings.Isha)
                    : "Loading..."}
                </td>
                <td className="border px-2 py-1">{todayTimings.isha}</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Jumuah</td>
                <td className="border px-2 py-1">1:15 PM (Khutbah)</td>
                <td className="border px-2 py-1">1:30 PM (Iqamah)</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <p>Timings not available for today.</p>
      )}
    </div>
  );
};

export default SalahTimetable;
