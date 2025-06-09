import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Verification from './authentication-pages/verifyEmail';
import SignUp from './authentication-pages/signUp';
import SignIn from './authentication-pages/signIn';
import Onboarding from './authentication-pages/onboarding';
import Success from './authentication-pages/success';
import './App.css'
import ForgotPassword from './authentication-pages/forgotPassword';
import CreatePassword from './authentication-pages/createPassword';
import PswdSuccess from './authentication-pages/passwordUpdateSuccess';
import Overview from './pages/overview';
import ReferralRecords from './pages/referrer-records';
import RegistrationRecords from './pages/registration-record';
import UserMangement from './pages/user-mangement';
import Profile from './pages/profile';
import StaffRecords from './pages/staff-records';

function App() {

  return (
    
     
      <BrowserRouter>
         <Routes>
         <Route path="/" element={<SignUp />} />
         <Route path="/sign-in" element={<SignIn />} />
         <Route path="/verify-email" element={<Verification />} />
         <Route path='/forgot-password' element= {<ForgotPassword/>}/>
         <Route path='/create-password' element={<CreatePassword/>} />
         <Route path='/onboarding' element={<Onboarding/>}/>
         <Route path='/success' element={<Success/>}  />
         <Route path='/pswdchange' element= {<PswdSuccess/>} />
        <Route path='/overview' element={<Overview/> } />
        <Route path='/referrer-records' element={<ReferralRecords/>} />
        <Route path='/registration-records' element={<RegistrationRecords/>} />
        <Route path='/user-management' element={<UserMangement/>} />  
         <Route path='/profile' element = {<Profile/>} />
         <Route path='/staff-record' element={<StaffRecords/>} />
          <Route path='*' element={<h1>Page not found</h1>} />
         </Routes>
      </BrowserRouter>  
    
  )
}

export default App
