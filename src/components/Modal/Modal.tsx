import PortalModal from '../PortalModal/PortalModal';
import './/Modal.css';

interface Props {
  show: boolean;
  setShow: (value: boolean) => void;
  children: JSX.Element;
}

const Modal = ({ children, show, setShow }: Props) => {
  const handleClose = () => {
    // alert(`Close button clicked!`);
    setShow(false);
  };

  return (
    <>
      {show && (
        <PortalModal wrapperId="modal-portal">
          <div className="overlay">
            <div className="modal-container">
              <div className="close" onClick={handleClose}>
                <p>×</p>
              </div>
              <div className="content">{children}</div>
            </div>
          </div>
        </PortalModal>
      )}
    </>
  );
};

export default Modal;
