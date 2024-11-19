import React from "react";
import { ReactComponent as IconClose } from "./icon-close.svg";
import { Transition } from "react-transition-group";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, children }) => {
  const nodeRef = React.useRef(null);
  const onWrapperClick = (event) => {
    if (event.target.classList.contains("modal-wrapper")) onClose();
  };
  return (
    <>
      <Transition
        in={isOpen}
        timeout={650}
        nodeRef={nodeRef}
        unmountOnExit={true}
      >
        {(state) => (
          <div className={`modal modal--${state}`}>
            <div className="modal-wrapper" onClick={onWrapperClick}>
              <div className="modal-content">
                <button
                  className="modal-close-button"
                  onClick={() => onClose()}
                >
                  <IconClose />
                </button>
                {children}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};
