import Button from '../Button';
import './Modal.style.scss';

const Modal = ({ heading, text, onSubmit, onCancel }) => (
  <div className="modal">
    <header className="modal__heading">
      <h2>{heading}</h2>
    </header>
    <div className="modal__body">
      <p>{text}</p>
    </div>
    <div className="modal__buttons">
      <Button type="success" outline onClick={onSubmit}>
        I'm sure
      </Button>
      <Button type="error" onClick={onCancel}>
        Cancel
      </Button>
    </div>
  </div>
);

export default Modal;
