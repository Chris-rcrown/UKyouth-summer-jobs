import React from "react";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/auth-layout";

type FormValues = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
};

type FormErrors = Record<keyof Omit<FormValues, "terms">, string>;

type Touched = Record<keyof FormValues, boolean>;

// Field-level validators
const validators: {
  [K in keyof Omit<FormValues, "terms">]: (v: FormValues[K]) => string;
} = {
  name: (v: string) => (v.trim() ? "" : "Full name is required"),
  email: (v: string) => {
    if (!v.trim()) return "Email is required";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? ""
      : "Please enter a valid email address";
  },
  password: (v: string) =>
    v.length >= 8 ? "" : "Password must be at least 8 characters",
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = React.useState<FormValues>({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = React.useState<FormErrors>({
    name: "",
    email: "",
    password: "",
  });

  const [termsError, setTermsError] = React.useState<string>("");
  const [touched, setTouched] = React.useState<Touched>({
    name: false,
    email: false,
    password: false,
    terms: false,
  });

  const validateField = <K extends keyof Omit<FormValues, "terms">>(
    field: K,
    value: FormValues[K]
  ) => {
    const validator = validators[field];
    const error = validator(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  const validateTerms = (value: boolean) => {
    const error = value ? "" : "You must agree to the terms";
    setTermsError(error);
    return error;
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: validators.name(form.name),
      email: validators.email(form.email),
      password: validators.password(form.password),
    };

    setErrors(newErrors);
    const termsValid = !validateTerms(form.terms);

    return Object.values(newErrors).every((e) => !e) && termsValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, type, checked, value } = e.target;
    const field = id as keyof FormValues;
    const fieldValue = type === "checkbox" ? checked : value;

    setForm((prev) => ({ ...prev, [field]: fieldValue }));

    if (touched[field]) {
      if (field === "terms") {
        validateTerms(fieldValue as boolean);
      } else if (typeof fieldValue === "string") {
        validateField(field, fieldValue);
      }
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.id as keyof FormValues;
    setTouched((prev) => ({ ...prev, [field]: true }));

    if (field === "terms") {
      validateTerms(form.terms);
    } else {
      validateField(field, form[field]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields as touched
    // Mark all fields as touched so their errors show
    const allTouched = Object.keys(form).reduce((acc, key) => {
      acc[key as keyof FormValues] = true;
      return acc;
    }, {} as Touched);

    setTouched(allTouched);

    // Show validation messages for all fields
    setErrors({
      name: validators.name(form.name),
      email: validators.email(form.email),
      password: validators.password(form.password),
    });
    setTermsError(form.terms ? "" : "You must agree to the terms");

    setTouched(allTouched);

    // Validate all fields and show errors if any
    const isFormValid = validateForm();

    // If not valid, do not proceed
    if (!isFormValid) return;

    navigate("/verify-email", { state: { flow: "signup" } });
  };

  const isValid =
    Object.values(errors).every((e) => !e) &&
    !termsError &&
    Object.values(touched).every((t) => t);

  return (
    <div className="overflow-hidden">
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
            <div className="w-full max-w-sm space-y-4">
              <div>
                <h2 className="text-lg font-bold">Create an Account</h2>
                <p className="text-gray-500 text-xs">
                  Get started with the summer job programme
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter full name"
                    className="border border-gray-400 rounded px-4 py-3 text-sm"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.name && errors.name && (
                    <span className="text-red-500 text-xs">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    className="border border-gray-400 rounded px-4 py-3 text-sm"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col">
                  <label htmlFor="password" className="text-xs mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    className="border border-gray-400 rounded px-4 py-3 text-sm"
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

                {/* Terms */}
                <div>
                  <label className="flex items-start text-[14px] leading-[24px] text-[#858C94]">
                    <input
                      id="terms"
                      type="checkbox"
                      className="mt-1 mr-2 cursor-pointer"
                      checked={form.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="text-xs">
                      By clicking on{" "}
                      <span className="font-semibold text-[#333]">
                        Get Started
                      </span>{" "}
                      you agree to the terms of service and privacy policy.
                    </p>
                  </label>
                  {touched.terms && termsError && (
                    <span className="text-red-500 text-xs">{termsError}</span>
                  )}
                </div>

                {/* Submit */}
                <Button text="Get Started" onClick={handleSubmit} disabled={!isValid} />

                {/* Sign-in link */}
                <p className="text-center text-xs">
                  Already have an account?{" "}
                  <Link to="/sign-in" className="text-[#12BAE3] cursor-pointer">
                    Sign in
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

export default SignUp;
