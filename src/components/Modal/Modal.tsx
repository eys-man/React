import { useContext } from 'react';
import PortalModal from '../PortalModal/PortalModal';
import './Modal.css';
import CardsContext from '../CardsContext/CardsContext';

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  const value = useContext(CardsContext);

  const handleClose = () => {
    value.setShow(false);
  };

  return (
    <>
      {value.show && (
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
