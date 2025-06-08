import React from "react";
import Button from "../components/button";
import { useNavigate, Link } from "react-router-dom";
import Layout from "../components/auth-layout";

type FormValues = {
  email: string;
  password: string;
};

type FormErrors = Record<keyof FormValues, string>;
type Touched = Record<keyof FormValues, boolean>;

// validators for each field
const validators: {
  [K in keyof FormValues]: (value: FormValues[K]) => string;
} = {
  email: (v) => {
    if (!v.trim()) return "Email is required";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? ""
      : "Please enter a valid email address";
  },
  password: (v) =>
    v ? "" : "Password is required"
};

const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState<FormValues>({
    email: "",
    password: ""
  });
  const [errors, setErrors] = React.useState<FormErrors>({
    email: "",
    password: ""
  });
  const [touched, setTouched] = React.useState<Touched>({
    email: false,
    password: false
  });

  // validate single field
  const validateField = (field: keyof FormValues, value: FormValues[keyof FormValues]) => {
    const error = validators[field](value);
    setErrors((e) => ({ ...e, [field]: error }));
    return error;
  };

  // validate all fields
  const validateForm = () => {
    const newErrors = (Object.keys(validators) as (keyof FormValues)[])
      .reduce((acc, field) => {
        acc[field] = validators[field](form[field]);
        return acc;
      }, {} as FormErrors);
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    const field = id as keyof FormValues;
    setForm((prev) => ({ ...prev, [field]: value }));

    // revalidate if already touched
    if (touched[field]) {
      validateField(field, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.id as keyof FormValues;
    setTouched((t) => ({ ...t, [field]: true }));
    validateField(field, form[field]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // mark all touched
    setTouched({ email: true, password: true });
    // validate and navigate if OK
    if (validateForm()) {
      navigate("/success");
    }
  };

  const isValid = Object.values(errors).every((e) => !e);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left panel */}
        <Layout className="w-1/2" />

        {/* Right panel */}
        <div className="flex-1 bg-white flex flex-col px-4 py-6">
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{" "}
            <Link to="/support" className="font-semibold text-[#12BAE3]">
              Contact Support
            </Link>
          </p>

          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-full max-w-sm space-y-6">
              <div className="space-y-1">
                <h2 className="text-lg font-bold">Login to your Account</h2>
                <p className="text-gray-500 text-xs">
                  Get started with the summer job programme
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    className="border border-gray-400 rounded px-4 py-2 text-sm"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-xs mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className="border border-gray-400 rounded px-4 py-2 text-sm"
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.password && errors.password && (
                    <span className="text-red-500 text-xs">
                      {errors.password}
                    </span>
                  )}
                </div>

                {/* Forgot password */}
                <div className="flex justify-end">
                  <Link
                    to="/forgot-password"
                    className="text-xs text-[#12BAE3] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit */}
                <Button text="Login" onClick={handleSubmit} disabled={!isValid} />

                {/* Sign up link */}
                <p className="text-center text-xs text-gray-500">
                  Don’t have an account?{" "}
                  <Link to="/" className="text-[#12BAE3] cursor-pointer">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
