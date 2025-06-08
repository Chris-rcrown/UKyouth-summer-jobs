import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Layout from "../components/auth-layout";
import Button from "../components/button";

type LocationState = {
  flow?: 'signup' | 'reset';
};

const Verification: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: LocationState };

  const handleVerify = () => {
    if (state?.flow === 'reset') {
      // came from Forgot‑Password → go to Create New Password
      navigate('/create-password');
    } else {
      // default (or flow==='signup'): go to Onboarding
      navigate('/onboarding');
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <Layout className="w-1/2" />
        <div className="flex-1 bg-white flex flex-col px-4 py-6">
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{" "}
            <Link to="/support" className="font-semibold text-[#12BAE3]">
              Contact Support
            </Link>
          </p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <form onSubmit={e => {
              e.preventDefault();
              handleVerify();
            }}
            className="w-full max-w-sm space-y-6" noValidate>
              <div>
                <h2 className="text-lg font-bold">Verify Email Address</h2>
                <p className="text-gray-500 text-xs">
                  {state?.flow === 'reset'
                  ? 'Enter the code we sent to reset your password'
                  : 'Enter the code we sent to verify your email'}
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="verification-1" className="text-xs mb-3">
                  Verification Code
                </label>
                <div className="flex gap-2 justify-center">
                  {[0,1,2,3,4,5].map(i => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="border border-gray-400 rounded w-10 h-10 text-center text-sm"
                      id={`verification-${i}`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-center text-xs mb-6">
                Didn’t receive a code?{" "}
                <span className="text-[#12BAE3] cursor-pointer">
                  Resend code
                </span>
              </p>
              <Button text="Verify email" onClick={handleVerify} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
