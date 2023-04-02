import React, { useState } from "react";

function Modal() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleClick}>Open Modal</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <p>Life is Beautiful.</p>
            <button className="modal-close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
