import React, {
    useEffect,
    useRef
  } from "react";

const Modal = ({ showModal, setShowModal, children }) => {
    const modalRef = useRef();
  
    useEffect(() => {
      if (!modalRef.current) return;
      if (showModal) {
        modalRef.current.showModal();
      } else {
        modalRef.current.close();
      }
    }, [showModal]);
  
    return (
      <dialog ref={modalRef} onClose={() => setShowModal(false)}>
        {children}
      </dialog>
    );
  };

  export default Modal;