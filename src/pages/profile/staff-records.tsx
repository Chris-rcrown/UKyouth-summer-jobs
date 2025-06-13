import React from 'react';
import DashboardLayout from '../../components/dashboard-layout';

 
const StaffRecords:React.FC = () => {
    return (
        <div>
            <DashboardLayout pageName='Staff Records'>
                <div>
                    <h1 className="text-2xl font-bold mb-4">Staff Records</h1>
                    <p className="text-gray-700">This page will display the staff records.</p>
                    {/* Add more staff records related content here */}
                </div>
            </DashboardLayout>
        </div>
    );
};

export default StaffRecords;
