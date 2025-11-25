import './Card.css';

const Card = ({ 
  children, 
  title, 
  subtitle,
  hover = false,
  className = '',
  onClick 
}) => {
  const cardClass = [
    'card',
    hover && 'card-hover',
    onClick && 'card-clickable',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClass} onClick={onClick}>
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <p className="card-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
