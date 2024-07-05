import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const donationQuotes = [
    {
        text: 'Who will lend to Allah a good loan which Allah will multiply many times over? It is Allah ˹alone˺ who decreases and increases ˹wealth˺. And to Him you will ˹all˺ be returned.',
        source: 'Quran 2:245',
    },
    {
        text: "The Prophet ﷺ (peace be upon him) said: 'Charity does not decrease wealth'",
        source: 'Ṣaḥīḥ Muslim 2588',
    },
    {
        text: "Those who spend their wealth [in Allah's way] by night and by day, secretly and publicly - they will have their reward with their Lord. And no fear will there be concerning them, nor will they grieve.",
        source: 'Quran 2:274',
    },
    {
        text: "The Prophet ﷺ said 'The shade of the believer on the Day of Resurrection is his charity.'",
        source: 'Musnad Aḥmad 23490',
    },
];

export default function Donations() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentQuoteIndex(
                (prevIndex) => (prevIndex + 1) % donationQuotes.length
            );
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    const goToPrevious = () => {
        setCurrentQuoteIndex((prevIndex) =>
            prevIndex === 0 ? donationQuotes.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentQuoteIndex(
            (prevIndex) => (prevIndex + 1) % donationQuotes.length
        );
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <header className='w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center py-16 px-4 shadow-lg'>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                    Support Our Masjid
                </h1>
                <p className='text-xl md:text-2xl opacity-90'>
                    Your generosity helps us serve the community
                </p>
            </header>

            <main className='flex-grow flex flex-col items-center w-full px-4 py-12 space-y-16 max-w-6xl mx-auto'>
                <section className='bg-white rounded-lg p-8 w-full text-center shadow-lg'>
                    <h2 className='text-3xl font-bold text-teal-700 mb-6'>
                        Why Donate?
                    </h2>
                    <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                        Your donations help us maintain the masjid, support
                        educational programs, provide community services, and
                        extend our outreach efforts. Every contribution, big or
                        small, makes a difference in our community.
                    </p>
                    <p className='text-lg text-teal-600 italic mb-8'>
                        "Whoever builds a mosque for Allah, Allah will build for
                        him a house like it in Paradise"
                        <span className='block text-sm mt-2 text-gray-600'>
                            - The Messenger of Allah ﷺ
                        </span>
                    </p>
                    <button className='bg-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105'>
                        Donate Now
                    </button>
                </section>

                <section className='w-full'>
                    <h2 className='text-3xl font-bold text-center mb-8 text-teal-700'>
                        The Virtues of Charity
                    </h2>
                    <div className='relative bg-white rounded-lg p-8 shadow-lg'>
                        <div className='min-h-[200px] flex items-center justify-center'>
                            <div className='text-center'>
                                <p className='text-lg text-gray-700 mb-4 italic'>
                                    "{donationQuotes[currentQuoteIndex].text}"
                                </p>
                                <p className='text-teal-600 font-semibold'>
                                    {donationQuotes[currentQuoteIndex].source}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={goToPrevious}
                            className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors'
                        >
                            <ChevronLeftIcon className='h-6 w-6' />
                        </button>
                        <button
                            onClick={goToNext}
                            className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-500 text-white p-2 rounded-full hover:bg-teal-600 transition-colors'
                        >
                            <ChevronRightIcon className='h-6 w-6' />
                        </button>
                    </div>
                </section>

                <section className='bg-teal-50 rounded-lg p-8 w-full text-center shadow-lg'>
                    <h2 className='text-3xl font-bold text-teal-700 mb-6'>
                        Ways to Donate
                    </h2>
                    <ul className='text-lg text-gray-700 space-y-4'>
                        <li>Online through our secure payment system</li>
                        <li>Setting up recurring monthly donations</li>
                        <li>Zelle</li>
                        <li>Cash donations at the Masjid</li>
                    </ul>
                </section>
            </main>

            <footer className='w-full bg-gray-800 text-white text-center py-6 mt-16'>
                <p>&copy; 2024 Elmhurst Islamic Center. All rights reserved.</p>
            </footer>
        </div>
    );
}
