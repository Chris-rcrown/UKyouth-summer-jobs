import React, { useEffect } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import Layout from "../components/auth-layout";
import Button from "../components/button";


const Verification: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  // Try reading from state; default to signup if missing
  const flow = searchParams.get("flow");

  // If user navigates here directly (no state), redirect back to start
  useEffect(() => {
    if (flow !== "reset" && flow !== "signup") {
      // Force them to the signup start rather than leaving them stuck
      navigate("/", { replace: true });
    }
  }, [flow, navigate]);

  const handleVerify = () => {
    if (flow === "reset") {
      navigate("/create-password", { replace: true });
    } else {
      navigate("/onboarding", { replace: true });
    }
  };

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <Layout className="md:w-1/2" />
        <div className="flex-1 bg-white flex flex-col px-4 py-6">
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{" "}
            <Link to="/support" className="font-semibold text-[#12BAE3]">
              Contact Support
            </Link>
          </p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div
              className="w-full max-w-sm space-y-6"
            >
              <div>
                <h2 className="text-lg font-bold">Verify Email Address</h2>
                <p className="text-gray-500 text-xs">
                  {flow === "reset"
                    ? "Enter the code we sent to reset your password"
                    : "Enter the code we sent to verify your email"}
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="verification-0" className="text-xs mb-3">
                  Verification Code
                </label>
                <div className="flex gap-2 justify-center">
                  {["A", "B", "C", "D", "E", "F"].map((char, i) => (
                    <input
                      key={`verification-${char}`}
                      type="text"
                      maxLength={1}
                      id={`verification-${i}`}
                      className="border border-gray-400 rounded w-10 h-10 text-center text-sm"
                    />
                  ))}
                </div>
              </div>
              <p className="text-center text-xs mb-6">
                Didn’t receive a code?{" "}
                <span className="text-[#12BAE3] cursor-pointer">Resend code</span>
              </p>
              <Button text="Verify email" onClick={handleVerify} type="button" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
