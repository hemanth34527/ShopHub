import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './Login.css';

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup } = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      let result;
      if (isSignup) {
        result = signup(formData.name, formData.email, formData.password);
      } else {
        result = login(formData.email, formData.password);
      }

      if (!result.success) {
        setError(result.message);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="login-container fade-in">
        <div className="login-card">
          <div className="login-header">
            <h1 className="login-title">
              {isSignup ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="login-subtitle">
              {isSignup 
                ? 'Sign up to start your journey with us' 
                : 'Sign in to access your dashboard'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {isSignup && (
              <Input
                label="Full Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                icon={<User size={20} />}
                required
              />
            )}

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              icon={<Mail size={20} />}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              icon={<Lock size={20} />}
              required
            />

            {error && (
              <div className="login-error">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              fullWidth
              loading={loading}
              size="large"
            >
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
          </form>

          <div className="login-footer">
            <p>
              {isSignup ? 'Already have an account?' : "Don't have an account?"}
              <button
                type="button"
                className="login-switch"
                onClick={() => {
                  setIsSignup(!isSignup);
                  setError('');
                  setFormData({ name: '', email: '', password: '' });
                }}
              >
                {isSignup ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>

          <div className="demo-credentials">
            <p className="demo-title">Demo Credentials:</p>
            <p className="demo-info">Email: demo@shophub.com</p>
            <p className="demo-info">Password: demo123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
