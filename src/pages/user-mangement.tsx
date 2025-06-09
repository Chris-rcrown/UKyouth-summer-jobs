import React from 'react'
import DashboardLayout from '../components/dashboard-layout'

const UserMangement: React.FC = () => {
  return (
    <div>
      <DashboardLayout pageName='User Management'>
        <div>
          <h1 className="text-2xl font-bold mb-4">User Management</h1>
          <p className="text-gray-700">This page will display user management functionalities.</p>
          {/* Add more user management related content here */}
        </div>
        </DashboardLayout>
    </div>
  )
}

export default UserMangement
