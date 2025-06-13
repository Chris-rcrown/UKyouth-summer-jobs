import React from 'react';
import DashboardLayout from '../../components/dashboard-layout';

 
import { useState } from 'react';

// Types
interface StaffMember {
  id: number;
  fullName: string;
  email: string;
  area: string;
  borough: string;
  ldp: string;
  role: string;
}

// Main Staff Records Page Component
const StaffRecords = () => {
  const [staffList] = useState<StaffMember[]>([
    { id: 1, fullName: 'John Dukes', email: 'john@gmail.com', area: 'Area Name', borough: 'Manchester', ldp: 'Birmingham', role: 'LDP Admin' },
    // Add more staff members...
  ]);

  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const toggleRowExpansion = (id: number) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const openEditModal = (staff: StaffMember) => {
    setSelectedStaff(staff);
    setIsEditModalOpen(true);
  };

  const openDeactivateModal = (staff: StaffMember) => {
    setSelectedStaff(staff);
    setIsDeactivateModalOpen(true);
  };

  const handleSaveEdit = (updatedStaff: StaffMember) => {
    // Implement save logic here
    console.log('Saving changes:', updatedStaff);
    setIsEditModalOpen(false);
  };

  const handleDeactivate = () => {
    if (selectedStaff) {
      // Implement deactivation logic here
      console.log('Deactivating:', selectedStaff);
      setIsDeactivateModalOpen(false);
    }
  };

    return (
        <DashboardLayout pageName='Staff Records' >
      
    <div className="bg-gray-50 p-6">
      {/* Staff Table */}
      <div className="bg-white rounded-lg shadow-md border-2 border-blue-200 mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">S/N</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email Address</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borough</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">LDP</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {staffList.map((staff) => (
              <React.Fragment key={staff.id}>
                <tr 
                  className={`border-b ${expandedRow === staff.id ? 'border-blue-300' : ''}`}
                  onClick={() => toggleRowExpansion(staff.id)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{staff.fullName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{staff.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{staff.borough}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{staff.ldp}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{staff.role}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); openEditModal(staff); }}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path d="M13 6.586V13h2.828l-7.586 7.586a2 2 0 00-2.828 0L5 6.586 7.759 8.965 13 6.586z" />
                      </svg>
                      Edit
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); openDeactivateModal(staff); }}
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Deactivate
                    </button>
                  </td>
                </tr>
                {expandedRow === staff.id && (
                  <tr>
                    <td colSpan={7} className="px-6 py-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Area</p>
                          <p className="font-medium text-gray-900">{staff.area}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Borough</p>
                          <p className="font-medium text-gray-900">{staff.borough}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">LDP</p>
                          <p className="font-medium text-gray-900">{staff.ldp}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Role</p>
                          <p className="font-medium text-gray-900">{staff.role}</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
          <button className="px-4 py-2 text-sm font-medium text-gray-700">Prev</button>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md">1</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700">2</button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700">3</button>
            <span className="px-4 py-2 text-sm text-gray-700">...</span>
            <button className="px-4 py-2 text-sm font-medium text-gray-700">10</button>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-gray-700">Next</button>
        </div>
      </div>

      {/* Staff Profile View Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center p-4 z-10">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mt-20">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Staff Profile</h3>
              <button onClick={() => setSelectedStaff(null)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4 space-y-4">
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="font-medium text-gray-900">{selectedStaff.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-medium text-gray-900">{selectedStaff.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Area</p>
                <p className="font-medium text-gray-900">{selectedStaff.area}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Borough</p>
                <p className="font-medium text-gray-900">{selectedStaff.borough}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">LDP</p>
                <p className="font-medium text-gray-900">{selectedStaff.ldp}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-medium text-gray-900">{selectedStaff.role}</p>
              </div>
              <div className="flex justify-end space-x-3">
                <button 
                  onClick={() => openEditModal(selectedStaff)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                    <path d="M13 6.586V13h2.828l-7.586 7.586a2 2 0 00-2.828 0L5 6.586 7.759 8.965 13 6.586z" />
                  </svg>
                  Edit
                </button>
                <button 
                  onClick={() => openDeactivateModal(selectedStaff)}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Deactivate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Staff Profile Modal */}
      {isEditModalOpen && selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-20">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-blue-600">Edit Staff Profile</h3>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); handleSaveEdit(selectedStaff); }} className="px-6 py-4 space-y-4">
              <div>
                <label htmlFor="editFullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="editFullName"
                  defaultValue={selectedStaff.fullName}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="editEmail" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="editEmail"
                  defaultValue={selectedStaff.email}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="editArea" className="block text-sm font-medium text-gray-700 mb-1">Area</label>
                <select
                  id="editArea"
                  defaultValue={selectedStaff.area}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Area Name">Area Name</option>
                  {/* Add actual area options here */}
                </select>
              </div>
              <div>
                <label htmlFor="editBorough" className="block text-sm font-medium text-gray-700 mb-1">Borough</label>
                <select
                  id="editBorough"
                  defaultValue={selectedStaff.borough}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Manchester">Manchester</option>
                  {/* Add actual borough options here */}
                </select>
              </div>
              <div>
                <label htmlFor="editLDP" className="block text-sm font-medium text-gray-700 mb-1">LDP</label>
                <select
                  id="editLDP"
                  defaultValue={selectedStaff.ldp}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Birmingham">Birmingham</option>
                  {/* Add actual LDP options here */}
                </select>
              </div>
              <div>
                <label htmlFor="editRole" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  id="editRole"
                  defaultValue={selectedStaff.role}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="LDP Admin">LDP Admin</option>
                  {/* Add actual role options here */}
                </select>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Deactivate Confirmation Modal */}
      {isDeactivateModalOpen && selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-30">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="p-6 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Do you want to deactivate this staff profile?</h3>
              <p className="mt-2 text-sm text-gray-500">
                This action cannot be undone. The staff profile and all associated data will be permanently removed.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={() => setIsDeactivateModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeactivate}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Yes, deactivate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
            </div>
    </DashboardLayout>
  );
};

export default StaffRecords;
