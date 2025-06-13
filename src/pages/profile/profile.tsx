import DashboardLayout from "../../components/dashboard-layout"
import { useState } from 'react';

interface ProfileInfo {
  fullName: string;
  emailAddress: string;
  area: string;
  borough: string;
  ldp: string;
  role: string;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileInfo>({
    fullName: 'Corina McCoy',
    emailAddress: 'corina@gmail.com',
    area: 'Name of Area',
    borough: 'Name of Borough',
    ldp: 'Name of LDP',
    role: 'Name of Role'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const saveChanges = () => {
    // Implement your save logic here (e.g., API call)
    console.log('Saving changes:', profile);
    setIsEditing(false);
  };

  return (
    <DashboardLayout pageName="Profile">"
    <div className="bg-white p-6 rounded-lg shadow-md min-h-screen w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium text-gray-900">Profile Information</h3>
        {!isEditing && (
          <button 
            onClick={() => setIsEditing(true)}
            className="flex items-center px-3 py-1.5 bg-[#12BAE3] text-white text-sm font-medium rounded-full hover:bg-[#487581] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
              <path d="M13 6.586V13H10.414L17.586 6.586 13 0 5 6.586 2.414 4l5 5zm1 5.586c-.566 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
            </svg>
            Edit
          </button>
        )}
      </div>

      {isEditing ? (
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={profile.fullName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
              />
            </div>
            <div>
              <label htmlFor="emailAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={profile.emailAddress}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
              />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
                Area
              </label>
              <select
                id="area"
                name="area"
                value={profile.area}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
              >
                <option value="Name of Area">Name of Area</option>
                {/* Add actual options here */}
              </select>
            </div>
            <div>
              <label htmlFor="borough" className="block text-sm font-medium text-gray-700 mb-1">
                Borough
              </label>
              <select
                id="borough"
                name="borough"
                value={profile.borough}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
              >
                <option value="Name of Borough">Name of Borough</option>
                {/* Add actual options here */}
              </select>
            </div>
            <div>
              <label htmlFor="ldp" className="block text-sm font-medium text-gray-700 mb-1">
                LDP
              </label>
              <select
                id="ldp"
                name="ldp"
                value={profile.ldp}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
              >
                <option value="Name of LDP">Name of LDP</option>
                {/* Add actual options here */}
              </select>
            </div>
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={profile.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#12BAE3]"
              >
                <option value="Name of Role">Name of Role</option>
                {/* Add actual options here */}
              </select>
            </div>
          </div>
          <button
            onClick={saveChanges}
            className="w-full md:w-auto px-4 py-2 bg-[#12BAE3] text-white rounded-md hover:bg-[#487581] transition duration-150 ease-in-out"
          >
            Save Changes
          </button>
        </form>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-medium text-gray-900">{profile.fullName}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-medium text-gray-900">{profile.emailAddress}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Area</p>
            <p className="font-medium text-gray-900">{profile.area}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Borough</p>
            <p className="font-medium text-gray-900">{profile.borough}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">LDP</p>
            <p className="font-medium text-gray-900">{profile.ldp}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Role</p>
            <p className="font-medium text-gray-900">{profile.role}</p>
          </div>
        </div>
      )}
      </div>
      </DashboardLayout>
  );
};

export default Profile;