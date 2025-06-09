import DashboardLayout from "../components/dashboard-layout"

const Profile: React.FC = () => {
  return (
    <div>
      <DashboardLayout pageName="Profile">
        <div>
          <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
          <p className="text-gray-700">This is where you can manage your profile settings.</p>
          {/* Add more profile-related content here */}
        </div>
      </DashboardLayout>
    </div>
  )
}

export default Profile
