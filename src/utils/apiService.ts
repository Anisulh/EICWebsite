const API_BASE_URL = 'https://api.aladhan.com/v1';
const API_METHOD = 2; // Example: Islamic Society of North America (ISNA)
const CITY = 'Elmhurst';
const COUNTRY = 'United States';

export const getPrayerTimings = async () => {
    try {
        const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        const response = await fetch(
            `${API_BASE_URL}/timingsByCity?city=${CITY}&country=${COUNTRY}&method=${API_METHOD}&date=${today}`
        );
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data.timings;
    } catch (error) {
        console.error('Error fetching prayer timings:', error);
        return null;
    }
};
