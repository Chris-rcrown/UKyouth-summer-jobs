import React from 'react'
import DashboardLayout from '../components/dashboard-layout';

const RegistrationRecords: React.FC = () => {
  return (
    <div>
      <DashboardLayout pageName='Registration Records'>
        <div>
          <h1 className="text-2xl font-bold mb-4">Registration Records</h1>
          <p className="text-gray-700">This page will display the registration records.</p>
          {/* Add more registration records related content here */}
        </div>
      </DashboardLayout>
    </div>
  )
}

export default RegistrationRecords
