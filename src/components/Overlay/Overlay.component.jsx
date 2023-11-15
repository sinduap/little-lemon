import './Overlay.style.scss';

const Overlay = ({ children, onClose }) => (
  <div className="overlay" onClick={onClose}>
    {children}
  </div>
);

export default Overlay;
