import React from "react";
import Layout from "../components/auth-layout";
import Button from "../components/button";
import { useNavigate, Link } from "react-router-dom";
import { areaData } from "../Data/data";

const Onboarding: React.FC = () => {
  const userName = "User"; // Replace with actual user name logic
  const navigate = useNavigate();

  const [selectedArea, setSelectedArea] = React.useState("");
  const [selectedBorough, setSelectedBorough] = React.useState("");
  const [errors, setErrors] = React.useState<{ area?: string; borough?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!selectedArea) newErrors.area = "Please select an area";
    if (!selectedBorough) newErrors.borough = "Please select a borough";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      navigate("/success");
    }
  };

  // Build borough options based on selected area
  const boroughOptions =
    areaData
      .find((area) => area.value === selectedArea)
      ?.ldps.flatMap((ldp) => ldp.boroughs) || [];

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left panel */}
        <Layout className="md:w-1/2" />

        {/* Right panel */}
        <div className="flex-1 bg-white flex flex-col px-4 py-6">
          {/* Top support link */}
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{" "}
            <Link to="/support" className="font-semibold text-[#12BAE3]">
              Contact Support
            </Link>
          </p>

          {/* Main form box */}
          <div className="flex-1 flex flex-col justify-center items-center">
            <form
              onSubmit={handleContinue}
              className="w-full max-w-sm space-y-6"
              noValidate
            >
              <div>
                <h2 className="text-lg font-bold">Welcome, {userName}</h2>
                <p className="text-gray-500 text-xs">
                  Get started with the summer job programme
                </p>
              </div>

              {/* Area */}
              <div className="flex flex-col">
                <label htmlFor="area" className="text-xs mb-1">
                  Area
                </label>
                <select
                  id="area"
                  className="border border-gray-400 rounded px-3 py-2 text-sm"
                  value={selectedArea}
                  onChange={(e) => {
                    setSelectedArea(e.target.value);
                    setSelectedBorough("");
                    setErrors((errs) => ({ ...errs, area: undefined, borough: undefined }));
                  }}
                >
                  <option value="" disabled>
                    Select area
                  </option>
                  {areaData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.area && (
                  <span className="text-red-500 text-xs mt-1">{errors.area}</span>
                )}
              </div>

              {/* Borough */}
              <div className="flex flex-col">
                <label htmlFor="borough" className="text-xs mb-1">
                  Borough
                </label>
                <select
                  id="borough"
                  className="border border-gray-400 rounded px-3 py-2 text-sm"
                  value={selectedBorough}
                  onChange={(e) => {
                    setSelectedBorough(e.target.value);
                    setErrors((errs) => ({ ...errs, borough: undefined }));
                  }}
                  disabled={!selectedArea}
                >
                  <option value="" disabled>
                    {selectedArea ? "Select borough" : "Choose area first"}
                  </option>
                  {boroughOptions.map((borough) => (
                    <option key={borough.value} value={borough.value}>
                      {borough.label}
                    </option>
                  ))}
                </select>
                {errors.borough && (
                  <span className="text-red-500 text-xs mt-1">{errors.borough}</span>
                )}
              </div>

              {/* LDP */}
              <div className="flex flex-col">
                <label htmlFor="ldp" className="text-xs mb-1">
                  LDP
                </label>
                <select
                  id="ldp"
                  className="border border-gray-400 rounded px-3 py-2 text-sm"
                  value={
                    selectedArea && selectedBorough
                      ? areaData
                          .find((area) => area.value === selectedArea)
                          ?.ldps
                          .find((ldp) =>
                            ldp.boroughs.some((b) => b.value === selectedBorough)
                          )?.value ?? ""
                      : ""
                  }
                  disabled={!selectedArea || !selectedBorough}
                >
                  <option value="" disabled>
                    Your LDP will show here
                  </option>
                  {selectedArea && selectedBorough &&
                    areaData
                      .find((area) => area.value === selectedArea)
                      ?.ldps
                      .filter((ldp) =>
                        ldp.boroughs.some((b) => b.value === selectedBorough)
                      )
                      .map((ldp) => (
                        <option key={ldp.value} value={ldp.value}>
                          {ldp.name}
                        </option>
                      ))
                  }
                </select>
              </div>

              {/* Continue Button */}
              <Button
                text="Continue"
                type="submit"
                disabled={!selectedArea || !selectedBorough}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
