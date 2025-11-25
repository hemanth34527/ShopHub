import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  icon,
  loading = false
}) => {
  const className = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full-width',
    disabled && 'btn-disabled',
    loading && 'btn-loading'
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <span className="btn-spinner"></span>}
      {!loading && icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
