import React from 'react';
import Layout from '../components/auth-layout';
import Button from '../components/button';
import { Link, useNavigate } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const navigate = useNavigate()

    const HandleNext = async()=> {
        navigate(
          {pathname: "/verify-email", search: "?flow=reset"},
          {replace: true}
        );
    }
  return (
    <div className="h-[100vh] overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left panel */}
        <Layout className="md:w-1/2"/>
        
        {/* Right panel */}
        <div className="md:w-1/2 flex-1 bg-white flex flex-col px-4 py-6">
          {/* Top support link */}
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{" "}
            <Link to="/support" className="font-semibold text-[#12BAE3]">Contact Support</Link>
            
          </p>

          {/* Main form box */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-full max-w-sm space-y-4 flex flex-col gap-[24px]">
              {/* Header */}
              <div className="flex flex-col gap-[6px]">
                <h2 className="text-lg font-bold">Reset Password</h2>
                <p className="text-gray-500 text-xs">
                  Get started with the summer job programme
                </p>
              </div>

              {/* Form */}
              <form action=" " className="space-y-3">
                {/* Email */}
                <div className="flex flex-col mb-6">
                  <label htmlFor="email" className="text-xs mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    className="border border-gray-400 rounded px-4 py-3 text-sm"
                  />
                </div>

                
                {/* Submit */}

                <Button text="Continue" onClick={HandleNext} type="button"/>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
