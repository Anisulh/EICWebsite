export interface SalahTiming {
    date: string;
    fajr: string;
    zuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
}

export interface SalahTimetable {
    [key: string]: SalahTiming[];
}
