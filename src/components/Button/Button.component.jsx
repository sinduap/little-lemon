import './Button.style.scss';

const Button = ({ children, ...otherProps }) => (
  <a href="#" className="btn" {...otherProps}>
    {children}
  </a>
);

export default Button;
