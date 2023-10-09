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
      <dialog ref={modalRef} onClose={() => setShowModal(false)} className="min-w-1/2">
        <div className="modal-content p-4 rounded-md">
          <div className="flex justify-end">
            <button type="button" onClick={() => {
                setShowModal(false);
            }} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-0 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
          </div>
          {children}
        </div>
      </dialog>
    );
  };

  export default Modal;