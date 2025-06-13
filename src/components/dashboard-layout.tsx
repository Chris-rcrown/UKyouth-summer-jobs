import React, { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface DashboardLayoutProps {
pageName: string;
ldp?: string;
showRegister?: boolean;
children?: ReactNode;
className?: string;
}
const UserName = localStorage.getItem('UserName') || 'User';
const UserRrole = localStorage.getItem('UseRrole') || 'Role';
const navItems = [
{ href: '/overview', label: 'Overview', iconSrc: '/dashboard.svg' },
{ href: '/referrer-records', label: 'Referral Records', iconSrc: '/help_outline.svg' },
{ href: '/registration-records', label: 'Registration Records', iconSrc: '/Frame.svg' },
{ href: '/user-management', label: 'User Management', iconSrc: '/Frame.svg' },
{ href: '/profile', label: 'Profile', iconSrc: '/material-symbols_account-circle-outline.svg', iconClass: 'w-5 h-5' }
];
const DashboardLayout: React.FC<DashboardLayoutProps> = ({
     pageName, ldp, showRegister = false, children }) => {
        const [sidebarOpen, setSidebarOpen] = useState(false);
        const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
        // Lock scroll when side bar is open on mobile
        useEffect(() => {
            document.body.style.overflow = sidebarOpen ? 'hidden' : 'auto';
            return () => {
                document.body.style.overflow = 'auto'; // Reset on unmount
            };
        },[sidebarOpen])
        const navigate = useNavigate();
    return ( 
        <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="lg:hidden">
                    {sidebarOpen && (
                        <div
                            className="fixed inset-0 z-3 bg-opacity-30"
                            onClick={() => setSidebarOpen(false)}
                            aria-label="Close sidebar overlay"
                        />
                    )}
                </div>
                <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:fixed inset-y-0 left-0 z-40 w-[60vw] max-w-[252px] md:w-1/4 lg:w-1/7 bg-[#12BAE3] flex flex-col p-4 transform transition-transform duration-300 ease-in-out`}
                    style={{ height: '100vh', top: 0 }}>
                    <div className=" flex flex-row-reverse items-center justify-center mb-1" >
                        {/* <span className=' text-white font-bold text-lg'> Menu</span> */}
                        <button onClick ={()=> setSidebarOpen(false)} className='absolute top-1 right-1 lg:hidden'>
                            <svg className='w-6 h-6 text-white' fill='none'stroke='currentColor'viewBox='0 0 24 24'>
                                <path strokeLinecap='round'strokeLinejoin='round'strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <button
                            type="button"
                            className="flex-shrink-0  cursor-pointer focus:outline-none"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            aria-label="Toggle sidebar"
                        >
                            <img
                                src="/White SJP logo 2.svg"
                                alt="summer-jobs logo"
                                className="w-40 md:w-64 h-24 mb-6 object-contain"
                            />
                        </button>
                    </div>

                    <nav className="flex-1 flex flex-col justify-between">
                        <ul className="space-y-6">
                            {navItems.slice(0, navItems.length - 1).map((item) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="flex items-center text-white hover:bg-[#406872] rounded px-3 py-2"
                                    >
                                        {item.iconSrc && (
                                            <img
                                                src={item.iconSrc}
                                                alt={`${item.label} icon`}
                                                className="mr-4 md:w-6 md:h-6"
                                            />
                                        )}
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                            {/* Profile dropdown */}
                            <li className="relative">
                                <button
                                    className="flex items-center w-full text-white hover:bg-[#406872] rounded px-3 py-2 focus:outline-none"
                                    onClick={() => setProfileDropdownOpen((open) => !open)}
                                    aria-haspopup="true"
                                    aria-expanded={profileDropdownOpen}
                                >
                                    <img
                                        src={navItems[navItems.length - 1].iconSrc}
                                        alt="Profile icon"
                                        className="mr-4 md:w-6 md:h-6"
                                    />
                                    <span>{navItems[navItems.length - 1].label}</span>
                                    <svg
                                        className={`ml-16 w-4 h-4 transition-transform ${profileDropdownOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {profileDropdownOpen && (
                                    <ul className="absolute left-0 mt-1 w-40 rounded-lg bg-[#12BAE3] shadow-lg z-50">
                                        <li>
                                            <a
                                                href="/profile"
                                                className="block px-4 py-2 rounded text-white text-sm hover:bg-[#406872]"
                                            >
                                                My Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/staff-record"
                                                className="block px-4 py-2 rounded text-white text-sm hover:bg-[#406872]"
                                            >
                                                Staff Record
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </ul>

                        <div className="flex items-center space-x-4 mt-6">
                            <img src="/logout.svg" alt="logout icon" className="w-6 h-6" />
                            <button onClick={()=> {
                                navigate('/sign-in')
                            }} className="text-white hover:underline cursor-pointer">
                                Logout
                            </button>
                        </div>
                    </nav>
                </aside>

                {/* Main content */}
                <main className="flex-1 bg-white">
                    {/* Header */}
                    <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between w-full bg-white p-6 border-b border-gray-300  shadow-md">
                        <div className='lg:hidden flex items-center '>
                            <button className=' mr-4' onClick={() => setSidebarOpen(true)}>
                                <svg className='w-6 text-gray-700' fill='none'stroke='currentColor 'viewBox='0 0 24 24' >
                                    <path strokeLinecap='round' strokeLinejoin='round'strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            </button>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-800 relative lg:left-70">{pageName}</h1>
                        <div className="flex flex-col md:flex-row items-center mr-4">
                            {/* <img src="/material-symbols_notifications.svg" alt="notifications icon" className="w-6 h-6" /> */}
                            <img src="/Avatar-Light.svg " alt="profile icon" className="w-6 md:w-15 md:h-12" />
                            {/* <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button> */}
                            <div className='hidden md:block' >
                                <p className="text-black font-semibold text-md md:text-lg">{UserName}</p>
                                <p className = 'text-sm md:text-md text-gray-400'>{UserRrole}</p>
                            </div>
                        </div>
                    </header>
                    <div className="h-[88px] lg:h-[88px]" /> {/* Spacer to offset fixed header height */}

                    {/* Content area */}
                    <section className="p-6">
                    <div className="flex justify-between items-center mb-6">
                        {ldp && (
                        <p className="text-lg font-semibold text-gray-700">{ldp}</p>
                        )}
                        {showRegister && (
                            <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded hover:bg-blue-600">
                            Register a Young Person
                            </button>
                )} </div>
                    {/* Place for nested content */}
                    <div className='relative lg:left-70 lg:max-w-[1500px] flex justify-center items-center'>
                        {children}
                    </div>
                    </section>
                </main>
        </div>

);
};
export default DashboardLayout;

