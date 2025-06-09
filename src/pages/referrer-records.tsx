import React from 'react'
import DashboardLayout from '../components/dashboard-layout'

const ReferralRecords: React.FC = () => {
  return (
    <div>
      <DashboardLayout pageName='Referral Records'>
        <div>
          <h1 className="text-2xl font-bold mb-4">Referral Records</h1>
          <p className="text-gray-700">This page will display the referral records.</p>
          {/* Add more referral records related content here */}
        </div>
      </DashboardLayout>
    </div>
  )
}

export default ReferralRecords
