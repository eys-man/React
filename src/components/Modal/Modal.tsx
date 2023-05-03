import PortalModal from '../PortalModal/PortalModal';
import './Modal.css';
import { AppDispatch, RootState } from '../../Redux/store';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { setShowModal } from '../../Redux/Reducers/modalSlice';

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

interface Props {
  children: JSX.Element;
}

const Modal = ({ children }: Props) => {
  const modal = useAppSelector((state) => state.modalReducer.modal);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setShowModal({ modal: { isShowModal: false } }));
  };

  return (
    <>
      {modal.isShowModal && (
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
