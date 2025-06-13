import React, { useEffect } from 'react';
import Layout from '../components/auth-layout';
import { Link, useNavigate } from 'react-router-dom';

const Success: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/overview', {replace: true});
    }, 3000);

    // Cleanup if the component unmounts before timeout
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left panel */}
        <Layout className="md:w-1/2"/>
      
        {/* Right panel */}
        <div className="flex-1 bg-white flex flex-col px-4 py-6">
          {/* Top support link */}
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{" "}
            <Link to="/support" className="font-semibold text-[#12BAE3]">Contact Support</Link>

          </p>

          {/* Main container box */}
          <div className="flex-1 flex flex-col justify-center items-center gap-[24px]">
            <img src="/check circle.svg" alt="check" />
            <div className="w-full flex flex-col items-center   max-w-sm space-y-4">
              {/* Header */}
              <div className="text-center md:mb-[24px]">
                <h2 className="text-lg font-bold">Well done!</h2>
                <p className="text-gray-500 text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, commodi ea? Velit eius atque voluptates.
                </p>
              </div>

              <div>
                <p className='text-[#12BAE3] text-[14px] flex '><span><img src="/SpinnerGap.svg" alt="loading" /></span><span>Redirecting to the Home Page</span></p>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Success
