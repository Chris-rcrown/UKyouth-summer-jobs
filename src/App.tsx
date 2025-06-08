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
         </Routes>
      </BrowserRouter>  
    
  )
}

export default App
