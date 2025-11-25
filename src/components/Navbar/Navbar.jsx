import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, LogOut, Menu, X, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/products', label: 'Products', icon: <Package size={20} /> }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard" className="navbar-brand">
          <div className="brand-logo">ShopHub</div>
        </Link>

        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.icon}
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <button 
              className="theme-toggle-btn" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="user-info">
              <img 
                src={user?.avatar} 
                alt={user?.name}
                className="user-avatar"
              />
              <div className="user-details">
                <p className="user-name">{user?.name}</p>
                <p className="user-role">{user?.role}</p>
              </div>
            </div>

            <button className="logout-btn" onClick={handleLogout}>
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
