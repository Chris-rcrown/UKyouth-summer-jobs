import { useState } from 'react';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FilterModal = ({ isOpen, onClose }: FilterModalProps) => {
  const [role, setRole] = useState('');
  const [region, setRegion] = useState('');
  const [location, setLocation] = useState('');

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement filter logic here
    console.log({ role, region, location });
    onClose();
  };

  const handleReset = () => {
    setRole('');
    setRegion('');
    setLocation('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-[#12BAE3]">Filter by</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleApply} className="px-6 py-4 space-y-4">
          <div>
            <label htmlFor="filterRole" className="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select
              id="filterRole"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
            >
              <option value="">Select role</option>
              {/* Add actual role options here */}
            </select>
          </div>
          <div>
            <label htmlFor="filterRegion" className="block text-sm font-medium text-gray-700 mb-1">Region</label>
            <select
              id="filterRegion"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
            >
              <option value="">Select region</option>
              {/* Add actual region options here */}
            </select>
          </div>
          <div>
            <label htmlFor="filterLocation" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <select
              id="filterLocation"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
            >
              <option value="">Select location</option>
              {/* Add actual location options here */}
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Reset
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#12BAE3] text-white rounded-md hover:bg-[#4d7d89]"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;