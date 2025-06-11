
import React from 'react';
import Layout from '../components/auth-layout';
import Button from '../components/button';
import { Link, useNavigate } from 'react-router-dom';

// Validation helpers
const validatePassword = (pwd: string): string => {
  if (!pwd) return 'Password is required';
  if (pwd.length < 8) return 'Password must be at least 8 characters';
  return '';
};

const validateConfirm = (pwd: string, confirm: string): string => {
  if (!confirm) return 'Please confirm your password';
  if (pwd !== confirm) return 'Passwords do not match';
  return '';
};

type FormValues = { password: string; confirm: string };
type FormErrors = { password: string; confirm: string };
type Touched    = { password: boolean; confirm: boolean };

const CreatePassword: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm]       = React.useState<FormValues>({ password: '', confirm: '' });
  const [errors, setErrors]   = React.useState<FormErrors>({ password: '', confirm: '' });
  const [touched, setTouched] = React.useState<Touched>({ password: false, confirm: false });

  // Full form validation
  const validateForm = (): boolean => {
    const pwErr = validatePassword(form.password);
    const cfErr = validateConfirm(form.password, form.confirm);
    setErrors({ password: pwErr, confirm: cfErr });
    return !pwErr && !cfErr;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));

    // Re-validate if already touched
    if (touched[id as keyof Touched]) {
      if (id === 'password') {
        setErrors({
          password: validatePassword(value),
          confirm: validateConfirm(value, form.confirm)
        });
      } else {
        setErrors(prev => ({
          ...prev,
          confirm: validateConfirm(form.password, value)
        }));
      }
    }
  };

  // Mark field touched and validate on blur
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const field = e.target.id as keyof Touched;
    setTouched(prev => ({ ...prev, [field]: true }));
    if (field === 'password') {
      setErrors(prev => ({ ...prev, password: validatePassword(form.password) }));
    } else {
      setErrors(prev => ({ ...prev, confirm: validateConfirm(form.password, form.confirm) }));
    }
  };

  // Submit handler
  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ password: true, confirm: true });
    if (validateForm()) {
      navigate('/pswdchange');
    }
  };

  const isValid = !errors.password && !errors.confirm;

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        {/* Left */}
        <Layout className="md:w-1/2" />

        {/* Right */}
        <div className="flex-1 bg-white flex flex-col px-4 py-6">
          <p className="text-xs text-right mb-12 md:mb-0">
            Having trouble signing in?{' '}
            <Link to="/support" className="font-semibold text-[#12BAE3]">
              Contact Support
            </Link>
          </p>

          <div className="flex-1 flex flex-col justify-center items-center">
            <form onSubmit={handleContinue} className="w-full max-w-sm space-y-6" noValidate>
              <div>
                <h2 className="text-lg font-bold">Create New Password</h2>
                <p className="text-gray-500 text-xs">Get started with the summer job programme</p>
              </div>

              {/* Password */}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-xs mb-1">New Password</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter new password"
                  className="border border-gray-400 rounded px-4 py-2 text-sm"
                  value={form.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-gray-400 text-[13px]">Must be at least 8 characters</p>
                {touched.password && errors.password && (
                  <span className="text-red-500 text-xs mt-1">{errors.password}</span>
                )}
              </div>

              {/* Confirm */}
              <div className="flex flex-col">
                <label htmlFor="confirm" className="text-xs mb-1">Confirm Password</label>
                <input
                  id="confirm"
                  type="password"
                  placeholder="Confirm Password"
                  className="border border-gray-400 rounded px-4 py-2 text-sm"
                  value={form.confirm}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.confirm && errors.confirm && (
                  <span className="text-red-500 text-xs mt-1">{errors.confirm}</span>
                )}
              </div>

              {/* Continue */}
              <Button text="Continue" disabled={!isValid} type='submit'/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePassword;
