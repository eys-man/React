import './Modal.css';
import { ModalType } from '../../Types/Types';
import { FC } from 'react';

const Modal: FC<ModalType & JSX.Element> = (
  { active, setActive },
  children: JSX.Element
) => {
  return (
    <div
      className={active === true ? 'modale active' : 'modal'}
      onClick={() => {
        setActive(false);
        // setContent(<p>ХУЙ</p>);
      }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
