import React, { useState }  from 'react'
import DashboardLayout from '../components/dashboard-layout'
import AddUserModal from '../components/modals/addUserModal';
import FilterModal from '../components/modals/addFilterModal';


interface User {
  id: number;
  fullName: string;
  role: string;
  region: string;
  location: string;
}

const UserManagement: React.FC = () => {
  const [users] = useState<User[]>([
    { id: 1, fullName: 'David Elson', role: 'UK Youth Admin', region: 'London', location: 'Manchester' },
    { id: 2, fullName: 'Kurt Bates', role: 'LDP Admin', region: 'London', location: 'Manchester' },
    { id: 3, fullName: 'Ricky Smith', role: 'LDP Admin', region: 'London', location: 'Manchester' },
    { id: 4, fullName: 'Bradley Lawlor', role: 'LDP Admin', region: 'London', location: 'Manchester' },
    { id: 5, fullName: 'John Dukes', role: 'LDP Admin', region: 'London', location: 'Manchester' },
    { id: 6, fullName: 'Judith Rodriguez', role: 'LDP Admin', region: 'London', location: 'Manchester' },
    { id: 7, fullName: 'Patricia Sanders', role: 'LDP Admin', region: 'London', location: 'Manchester' },
    { id: 8, fullName: 'Frances Swann', role: 'LDP Admin', region: 'London', location: 'Manchester' }
  ]);

  const [isListView, setIsListView] = useState(true);
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const handleViewToggle = () => {
    setIsListView(!isListView);
  };

  // Removed unused handleAddUser function

  const handleEditUser = (userId: number) => {
    // Implement edit user logic here
    console.log(`Editing user ${userId}...`);
  };

  const handleDeleteUser = (userId: number) => {
    // Implement delete user logic here
    console.log(`Deleting user ${userId}...`);
  };

  return (
    <DashboardLayout pageName='User Management'>
      <div className="bg-gray-50 p-4 min-h-screen w-full">
        <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-normal text-gray-500">User Management (1546)</h2>
      <div className="flex space-x-2">
        <button 
          onClick={handleViewToggle}
          className={`px-4 py-2 rounded-md transition-colors ${
            isListView ? 'bg-[#12BAE3] text-white' : 'bg-gray-200 text-gray-700 font-semibold'
          }`}
        >
          Gallery View
        </button>
        <button 
          onClick={handleViewToggle}
          className={`px-4 py-2 rounded-md transition-colors ${
            !isListView ? 'bg-[#12BAE3] text-white' : 'bg-gray-200 text-gray-700 font-semibold'
          }`}
        >
          List View
        </button>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
          />
          <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <button onClick={() => setIsFilterOpen(true)} className="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md ml-2">Filter</button>
        <button
          onClick={() => setIsAddUserOpen(true)}
          className="px-4 py-2 bg-[#12BAE3] text-white font-semibold rounded-md ml-2"
        >
          + Add User
        </button>
      </div>
    </div>
    {isFilterOpen && (
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      />
    )}
    {isAddUserOpen && (
      <AddUserModal
        isOpen={isAddUserOpen}
        onClose={() => setIsAddUserOpen(false)}
      />
    )}

    {/* List View */}
    {isListView && (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roles</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    <div>{user.fullName}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.region}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button 
                    onClick={() => handleEditUser(user.id)}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-[#12BAE3] bg-blue-100 hover:bg-blue-200 focus:outline-none transition ease-in-out duration-150"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                      <path d="M13 6.586V13h2.828l-7.586 7.586a2 2 0 00-2.828 0L5 6.586 7.759 8.965 13 6.586z" />
                    </svg>
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDeleteUser(user.id)}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none transition ease-in-out duration-150"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {/* Gallery View */}
    {!isListView && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {users.map((user) => (
          <div 
            key={user.id}
            className="border-2 border-blue-200 p-4 rounded-lg hover:border-[#12BAE3]transition-all duration-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{user.fullName}</h3>
                <p className="text-sm text-gray-500">{user.role}</p>
                <p className="text-xs text-gray-400">Region: {user.region}, Location: {user.location}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleEditUser(user.id)}
                  className="p-1.5 bg-blue-100 text-[#12BAE3] rounded-full hover:bg-blue-200 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path d="M13 6.586V13h2.828l-7.586 7.586a2 2 0 00-2.828 0L5 6.586 7.759 8.965 13 6.586z" />
                  </svg>
                </button>
                <button 
                  onClick={() => handleDeleteUser(user.id)}
                  className="p-1.5 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserManagement;