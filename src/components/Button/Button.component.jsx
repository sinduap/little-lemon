import { Link } from 'react-router-dom';
import './Button.style.scss';

const Button = ({
  children,
  type = 'default',
  outline = false,
  className = '',
  disabled,
  ...otherProps
}) => (
  <Link
    role="button"
    href="#"
    className={`btn btn--${type} ${outline ? 'btn--outline' : ''} ${className}`}
    {...otherProps}
    style={
      disabled
        ? { pointerEvents: 'none', backgroundColor: 'var(--col-white)' }
        : {}
    }
  >
    {children}
  </Link>
);

export default Button;
