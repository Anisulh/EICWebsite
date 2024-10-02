import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import

const Admin = () => {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [announcement, setAnnouncement] = useState('');
    const [expiryTime, setExpiryTime] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    const handleLogin = () => {
        if (password === adminPassword) {
            setAuthenticated(true);
            navigate('/home'); // Redirect to the home page after login (change the path as needed)
        } else {
            alert('Incorrect password');
        }
    };

    const handleAnnouncementSubmit = () => {
        const announcementData = {
            text: announcement,
            expiry: new Date(expiryTime).getTime(),
        };

        localStorage.setItem('announcement', JSON.stringify(announcementData));
        alert('Announcement posted!');
        setAnnouncement('');
        setExpiryTime('');
    };

    if (!authenticated) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <h2 className='text-2xl font-bold mb-4'>Admin Login</h2>
                <input
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='mb-4 p-2 border border-gray-300 rounded'
                />
                <button
                    onClick={handleLogin}
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'
                >
                    Login
                </button>
            </div>
        );
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <h2 className='text-2xl font-bold mb-4'>Post an Announcement</h2>
            <textarea
                placeholder='Announcement text'
                value={announcement}
                onChange={(e) => setAnnouncement(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded w-1/2'
            />
            <input
                type='datetime-local'
                value={expiryTime}
                onChange={(e) => setExpiryTime(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded'
            />
            <button
                onClick={handleAnnouncementSubmit}
                className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'
            >
                Submit Announcement
            </button>
        </div>
    );
};

export default Admin;
