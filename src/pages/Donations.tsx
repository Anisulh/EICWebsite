const donationQuotes = [
    {
        text: 'Who will lend to Allah a good loan which Allah will multiply many times over? It is Allah ˹alone˺ who decreases and increases ˹wealth˺. And to Him you will ˹all˺ be returned.',
        source: 'Quran 2:245',
    },
    {
        text: "The Prophet ﷺ (peace be upon him) said: 'Charity does not decrease wealth'",
        source: 'Ṣaḥīḥ Muslim 2588',
    },
    {
        text: "Those who spend their wealth [in Allah's way] by night and by day, secretly and publicly - they will have their reward with their Lord. And no fear will there be concerning them, nor will they grieve. The Prophet ﷺ said 'The shade of the believer on the Day of Resurrection is his charity.'",
        source: 'Quran 2:274 & Musnad Aḥmad 23490',
    },
];

export default function Donations() {
    return (
        <div className='min-h-screen flex flex-col items-center'>
            <header className='w-full bg-gradient-to-r from-teal-600 to-teal-800 text-white text-center py-12 md:py-20 px-4 shadow-lg'>
                <h1 className='text-4xl md:text-5xl font-bold mb-2'>
                    Support Our Masjid
                </h1>
                <p className='text-lg md:text-xl mt-2 opacity-90'>
                    Your generosity helps us serve the community
                </p>
            </header>

            <main className='flex flex-col items-center w-full px-4 py-8 space-y-12 max-w-6xl mx-auto'>
                <section className='bg-white rounded-lg p-8 w-full text-center shadow-md'>
                    <h2 className='text-2xl md:text-3xl font-bold text-teal-700 mb-6'>
                        Why Donate?
                    </h2>
                    <p className='text-lg text-gray-700 leading-relaxed mb-8'>
                        Your donations help us maintain the masjid, support
                        educational programs, provide community services, and
                        extend our outreach efforts. Every contribution, big or
                        small, makes a difference in our community.
                    </p>
                    <button className='bg-yellow-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105'>
                        Donate Now
                    </button>
                </section>

                <section className='w-full'>
                    <h2 className='text-2xl md:text-3xl font-bold text-center mb-6 text-teal-700'>
                        The Virtues of Charity
                    </h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {donationQuotes.map((quote, index) => (
                            <div
                                key={index}
                                className='bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300'
                            >
                                <p className='text-gray-700 mb-4 italic'>
                                    "{quote.text}"
                                </p>
                                <p className='text-teal-600 font-semibold'>
                                    {quote.source}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className='bg-teal-50 rounded-lg p-8 w-full text-center shadow-md'>
                    <h2 className='text-2xl md:text-3xl font-bold text-teal-700 mb-6'>
                        Ways to Donate
                    </h2>
                    <ul className='text-lg text-gray-700 space-y-4'>
                        <li>Online through our secure payment system</li>
                        <li>Setting up recurring monthly donations</li>
                        <li>Cash donations at the masjid</li>
                        <li>Zelle</li>
                    </ul>
                </section>
            </main>

            <footer className='w-full bg-gray-800 text-white text-center py-4 mt-12'>
                <p>&copy; 2024 Elmhurst Islamic Center. All rights reserved.</p>
            </footer>
        </div>
    );
}
