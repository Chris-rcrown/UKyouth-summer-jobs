import React, { useState } from "react";
import Button from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/auth-layout";

type FormValues = {
  name: string;
  email: string;
  password: string;
  terms: boolean;
};

type FormErrors = Record<keyof FormValues, string>;

const validators: { [K in Exclude<keyof FormValues, 'terms'>]: (v: string) => string } = {
  name: (v: string) => (v.trim() ? '' : 'Full name is required'),
  email: (v: string) => {
    if (!v.trim()) return 'Email is required';
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
      ? ''
      : 'Please enter a valid email address';
  },
  password: (v: string) =>
    v.length >= 8 ? '' : 'Password must be at least 8 characters',
};

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    terms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    password: '',
    terms: ''
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateField = <K extends keyof Omit<FormValues, 'terms'>>(field: K, value: FormValues[K]) => {
    const error = validators[field](value);
    setErrors((prev) => ({ ...prev, [field]: error }));
    return error;
  };

  const validateTerms = (value: boolean) => {
    const error = value ? '' : 'You must agree to the terms';
    setErrors((prev) => ({ ...prev, terms: error }));
    return error;
  };

  const validateForm = () => {
    const newErrors: FormErrors = {
      name: validators.name(form.name),
      email: validators.email(form.email),
      password: validators.password(form.password),
      terms: '',
    };
    newErrors.terms = validateTerms(form.terms);
    setErrors(newErrors);
    return Object.values(newErrors).every((e) => !e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, type, checked, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: type === 'checkbox' ? checked : value }));
    if (touched[id]) {
      if (id === 'terms') validateTerms(checked);
      else validateField(id as keyof Omit<FormValues, 'terms'>, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    if (id === 'terms') validateTerms(form.terms);
    else validateField(id as keyof Omit<FormValues, 'terms'>, form[id as keyof FormValues] as string);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Mark all fields as touched
    const allTouched = Object.keys(form).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (validateForm()) {
      navigate(
        {pathname:'/verify-email', search : '?flow=signup'},
        { replace: true });
    }else {
      console.log('Form validation failed:', errors);
      // If validation fails, scroll to the first error
      const firstErrorField = Object.keys(errors).find((key) => errors[key as keyof FormErrors]);
      if (firstErrorField) {
        const element = document.getElementById(firstErrorField);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  const showError = (field: keyof FormErrors) => submitted || touched[field as string];

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        <Layout className="md:w-1/2" />
        <div className="flex-1 bg-white flex flex-col px-4 py-6">
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{' '}
            <Link to="/support" className="font-semibold text-[#12BAE3]">
              Contact Support
            </Link>
          </p>
          <div className="flex-1 flex flex-col justify-center items-center">
            <div className="w-full max-w-sm space-y-4">
              <h2 className="text-lg font-bold">Create an Account</h2>
              <p className="text-gray-500 text-xs">
                Get started with the summer job programme
              </p>
              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="text-xs mb-1 block">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border px-3 py-2 rounded w-full"
                    placeholder="Enter full name"
                  />
                  {showError('name') && errors.name && (
                    <span className="text-red-500 text-xs">{errors.name}</span>
                  )}
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="email" className="text-xs mb-1 block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border px-3 py-2 rounded w-full"
                    placeholder="Enter email"
                  />
                  {showError('email') && errors.email && (
                    <span className="text-red-500 text-xs">{errors.email}</span>
                  )}
                </div>
                {/* Password */}
                <div>
                  <label htmlFor="password" className="text-xs mb-1 block">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="border px-3 py-2 rounded w-full"
                    placeholder="Enter password"
                  />
                  {showError('password') && errors.password && (
                    <span className="text-red-500 text-xs">{errors.password}</span>
                  )}
                </div>
                {/* Terms */}
                <div>
                  <label className="flex items-center text-xs">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={form.terms}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="mr-2"
                    />
                    <p>By clicking on {" "} <span className="font-semibold">Get Started</span> {" "} you agree to our terms.</p>
                  </label>
                  {showError('terms') && errors.terms && (
                    <span className="text-red-500 text-xs">{errors.terms}</span>
                  )}
                </div>
                {/* Submit */}
                <Button text="Get Started" type="submit" disabled={!Object.values(errors).every(e => !e)} onClick={handleSubmit} />
                {/* Sign in link */}
                <p className="text-center text-xs">
                  Already have an account?{' '}
                  <Link to="/sign-in" className="text-[#12BAE3]">
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