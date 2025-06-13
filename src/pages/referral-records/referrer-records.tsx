import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard-layout'
import { referrals } from '../../Data/referral';
import { FooterNavigation } from '../../components/button';

const getUnique = <T, K extends keyof T>(arr: T[], key: K): T[K][] =>
  Array.from(new Set(arr.map(item => item[key])));

const ReferralRecords: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpenId, setDropdownOpenId] = useState<number | null>(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 10;

  // Get unique values for dropdowns
  const uniqueStatuses = getUnique(referrals, 'status');
  const uniqueLocations = getUnique(referrals, 'location');
  const uniqueGenders = getUnique(referrals, 'gender');

  const filteredReferrals = referrals.filter((referral) => {
    const matchesSearch = referral.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter ? referral.status === statusFilter : true;
    const matchesLocation = locationFilter ? referral.location === locationFilter : true;
    const matchesGender = genderFilter ? referral.gender === genderFilter : true;
    return matchesSearch && matchesStatus && matchesLocation && matchesGender;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentReferrals = filteredReferrals.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredReferrals.length / itemsPerPage);

  return (
    <div>
      <DashboardLayout pageName='Referral Records'>
        <div className="p-6 bg-gray-100 min-h-screen w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg  text-gray-700 capitalize">total no. of registrants ({referrals.length})</h2>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-5 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <svg
                  className="w-5 h-5 absolute md:left-55 top-2.5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              {/* Filter Button with Dropdown */}
              <div className="relative">
                <button
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg flex items-center space-x-2 cursor-pointer"
                  onClick={() => setShowFilters((prev) => !prev)}
                >
                  <span>Filter</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </button>
                {showFilters && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-20 flex flex-col space-y-2 min-w-[200px]">
                    <select
                      aria-label="Filter by status"
                      value={statusFilter}
                      onChange={e => setStatusFilter(e.target.value)}
                      className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
                    >
                      <option value="">All Status</option>
                      {uniqueStatuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                    <select
                      aria-label="Filter by location"
                      value={locationFilter}
                      onChange={e => setLocationFilter(e.target.value)}
                      className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
                    >
                      <option value="">All Locations</option>
                      {uniqueLocations.map(location => (
                        <option key={location} value={location}>{location}</option>
                      ))}
                    </select>
                    <select
                      aria-label="Filter by gender"
                      value={genderFilter}
                      onChange={e => setGenderFilter(e.target.value)}
                      className="px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
                    >
                      <option value="">All Genders</option>
                      {uniqueGenders.map(gender => (
                        <option key={gender} value={gender}>{gender}</option>
                      ))}
                    </select>
                    <button
                      className="mt-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      onClick={() => setShowFilters(false)}
                    >
                      Apply
                    </button>
                  </div>
                )}
              </div>
              <button className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg flex items-center space-x-2 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span>Export</span>
              </button>
            </div>
          </div>
          <table className="w-full border-collapse bg-white ">
            <thead>
              <tr className="text-left  capitalize text-sm">
                <th className="py-3 px-4 border-dashed border-blue-500">S/N</th>
                <th className="py-3 px-4 border-dashed border-blue-500 ">full name</th>
                <th className="py-3 px-4 border-dashed border-blue-500  ">location</th>
                <th className="py-3 px-4 border-dashed border-blue-500 ">Refferal Dates</th>
                <th className="py-3 px-4 border-dashed border-blue-500 ">Gender</th>
                <th className="py-3 px-4 border-dashed border-blue-500 ">Registration Status</th>
                <th className="py-3 px-4 border-dashed border-blue-500 ">action</th>
              </tr>
            </thead>
            <tbody>
              {currentReferrals.map((referral, index) => (
                <tr key={referral.id} className=" border-dashed border-blue-500 hover:bg-gray-100">
                  <td className="py-3 px-4 flex items-center text-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                    <span>{indexOfFirstItem + index + 1}</span>
                  </td>
                  <td className="py-3 px-4">{referral.fullName}</td>
                  <td className="py-3 px-4">{referral.location}</td>
                  <td className="py-3 px-4">{referral.referralDate}</td>
                  <td className="py-3 px-4">{referral.gender}</td>
                  <td className="py-3 px-4 flex items-center space-x-2">
                    <span
                      className={`
                        px-4 py-1 rounded-full flex items-center space-x-2
                        ${referral.status === 'Pending' && 'bg-orange-100 text-orange-700 border border-orange-400'}
                        ${referral.status === 'Registered' && 'bg-green-100 text-green-700 border border-green-400'}
                      `}
                    >
                      <span
                        className={`
                          w-3 h-3 rounded-full mr-2
                          ${referral.status === 'Pending' && 'bg-orange-500'}
                          ${referral.status === 'Registered' && 'bg-green-500'}
                        `}
                      ></span>
                      <span>
                        {referral.status === 'Pending' && 'Pending'}
                        {referral.status === 'Registered' && 'Registered'}
                      </span>
                    </span>
                  </td>
                  <td className="py-3 px-4 relative">
                    <button
                      className={`focus:outline-none transition-colors duration-150 px-1 py-1 cursor-pointer
                      rounded-full
                      ${dropdownOpenId === referral.id ? 'bg-gray-200 ' : ''}
                      hover:bg-gray-200
                      `}
                      style={{ borderRadius: '50%' }}
                      onClick={() =>
                        setDropdownOpenId(referral.id === dropdownOpenId ? null : referral.id)
                      }
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                      </svg>
                    </button>
                    {dropdownOpenId === referral.id && (
                      <div className="absolute right-4 top-10 bg-white border border-gray-200 rounded-xl shadow-lg p-2 z-10">
                        <Link
                          to={`/referral-form/${referral.id}`}
                          className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-xl"
                        >
                          View
                        </Link>
                        <button className="block w-full text-left px-4 py-2 text-[#12BAE3] hover:bg-blue-100 rounded-xl">Register</button>
                        <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-100 rounded-xl">Deactivate</button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <FooterNavigation
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              className='justify-between'
            />
          </div>
        </div>
      </DashboardLayout>
    </div>
  )
}

export default ReferralRecords
