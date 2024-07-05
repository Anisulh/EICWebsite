export default function AskImam() {
    return (
        <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden md:max-w-2xl'>
                <div className='md:flex'>
                    <div className='p-8 w-full'>
                        <div className='uppercase tracking-wide text-sm text-teal-500 font-semibold mb-1'>
                            Ask Imam
                        </div>
                        <h2 className='block mt-1 text-lg leading-tight font-medium text-black'>
                            Submit Your Question
                        </h2>
                        <p className='mt-2 text-gray-500'>
                            Use this form to ask our Imam any questions you may
                            have.
                        </p>
                        <form className='mt-6 space-y-6'>
                            <div>
                                <label
                                    htmlFor='name'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Name <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    required
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm bg-white border'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Email{' '}
                                    <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm bg-white border'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='phone'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Phone
                                </label>
                                <input
                                    type='tel'
                                    name='phone'
                                    id='phone'
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm bg-white border'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='subject'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Subject{' '}
                                    <span className='text-red-500'>*</span>
                                </label>
                                <input
                                    type='text'
                                    name='subject'
                                    id='subject'
                                    required
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm bg-white border'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor='message'
                                    className='block text-sm font-medium text-gray-700'
                                >
                                    Message{' '}
                                    <span className='text-red-500'>*</span>
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    rows={4}
                                    required
                                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm bg-white border'
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                                >
                                    Submit Question
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
