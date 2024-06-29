import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropDown from "../ui/DropDown";

const ServicesMenu = [
  { label: "Weekend School", link: "/weekend-school" },
  { label: "Nikah", link: "/nikah" },
  { label: "Counseling", link: "/counseling" },
  { label: "Social Relief", link: "/social-relief" },
];

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='w-full border-b bg-primary text-white'>
            <div className='flex justify-between items-center px-4 py-2'>
                <Link to='/' className='mr-4'>
                    <img src='/logo.svg' alt='EICLogo' className='h-8' />
                </Link>
                <button onClick={toggleMenu} className='md:hidden'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M4 6h16M4 12h16m-7 6h7'
                        />
                    </svg>
                </button>
                <div
                    className={`flex-col md:flex-row md:flex md:items-center ${
                        isOpen ? 'flex' : 'hidden'
                    }`}
                >
                    <Link to='/' className='block px-2 py-1 md:px-4'>
                        Home
                    </Link>
                    <DropDown label="Services" menuItems={ServicesMenu} />
                    <Link to='/donate' className='block px-2 py-1 md:px-4'>
                        Donate
                    </Link>
                    <Link to='/expansion' className='block px-2 py-1 md:px-4'>
                        Expansion
                    </Link>
                    
                </div>
            </div>
        </nav>
    );
}
