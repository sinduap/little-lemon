import Button from '../Button';
import './Modal.style.scss';

const Modal = ({ text, onSubmit, onCancel }) => (
  <div className="modal">
    <div className="modal__text">
      <p>{text}</p>
    </div>
    <div className="modal__buttons">
      <Button type="success" onClick={onSubmit}>
        Ok
      </Button>
      <Button type="error" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  </div>
);

export default Modal;
