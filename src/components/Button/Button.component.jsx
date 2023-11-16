import { Link } from 'react-router-dom';
import './Button.style.scss';

const Button = ({
  children,
  type = 'default',
  outline = false,
  className = '',
  ...otherProps
}) => (
  <Link
    role="button"
    href="#"
    className={`btn btn--${type} ${outline ? 'btn--outline' : ''} ${className}`}
    {...otherProps}
  >
    {children}
  </Link>
);

export default Button;
