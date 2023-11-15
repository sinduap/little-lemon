import { Link } from 'react-router-dom';
import './Button.style.scss';

const Button = ({
  children,
  type = 'default',
  className = '',
  ...otherProps
}) => (
  <Link href="#" className={`btn btn--${type} ${className}`} {...otherProps}>
    {children}
  </Link>
);

export default Button;
