import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard-layout'
import { registrants } from '../../Data/registration';
import { FooterNavigation } from '../../components/button';

const RegistrationRecords: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

 

  const filteredRegistrant = registrants.filter((registrant) =>
    registrant.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRegistrant = filteredRegistrant.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredRegistrant.length / itemsPerPage);

  return (
    
    <div>
      <DashboardLayout pageName='Registration Records'>


    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg  text-gray-700 capitalize">total no. of registrants ({registrants.length})</h2>
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
          <button className="px-4 py-2 bg-gray-200 hover:bg-gray-400 rounded-lg flex items-center space-x-2 cursor-pointer">
            <span>Filter</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
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
            <th className="py-3 px-4 border-dashed border-blue-500  ">Borough</th>
            <th className="py-3 px-4 border-dashed border-blue-500 ">registration dates</th>
            <th className="py-3 px-4 border-dashed border-blue-500 ">gender</th>
            <th className="py-3 px-4 border-dashed border-blue-500 ">placement status</th>
            <th className="py-3 px-4 border-dashed border-blue-500 ">action</th>
          </tr>
        </thead>
        <tbody>
          {currentRegistrant.map((registrant, index) => (
            <tr key={registrant.serialNumber} className=" border-dashed border-blue-500 hover:bg-gray-100">
              <td className="py-3 px-4 flex items-center text-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>{indexOfFirstItem + index + 1}</span>
              </td>
              <td className="py-3 px-4">{registrant.fullName}</td>
              <td className="py-3 px-4">{registrant.borough}</td>
              <td className="py-3 px-4">{registrant.registrationDate}</td>
              <td className="py-3 px-4">{registrant.gender}</td>
              <td className="py-3 px-4 flex items-center space-x-2">
                <span
                  className={`
                    px-4 py-1 rounded-full flex items-center space-x-2
                    ${registrant.placementStatus === 'Pending' && 'bg-orange-100 text-orange-700 border border-orange-400'}
                    ${registrant.placementStatus === 'Controlled Group' && 'bg-green-100 text-green-700 border border-green-400'}
                  `}
                >
                  <span
                    className={`
                      w-3 h-3 rounded-full mr-2
                      ${registrant.placementStatus === 'Pending' && 'bg-orange-500'}
                      ${registrant.placementStatus=== 'Controlled Group' && 'bg-green-500'}
                    `}
                  ></span>
                  <span>
                    {registrant.placementStatus === 'Pending' && 'Pending'}
                    {registrant.placementStatus === 'Controlled Group' && 'Controlled Group'}
                  </span>
                </span>
              </td>
                <td className="py-3 px-4 relative">
                <Link
                  to={`/registration-form/${registrant.serialNumber}`}
                  className="focus:outline-none border-2 border-gray-500 transition-colors duration-150 px-4 py-2 cursor-pointer rounded-lg hover:bg-gray-300 bg-white"
                >
                  View More
                </Link>
                 
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

export default RegistrationRecords
