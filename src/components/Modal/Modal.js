import React from 'react'
import ReactDOM from "react-dom";
import styles from './Modal.module.css'

const Modal = ({toggleModal, modal, children}) => {

  

  if(modal){
    return ReactDOM.createPortal(
      <div
      className={styles.modalContainer}
      style={{ background: "rgba(0,0,0,0.8)" }}
    >
      <div className={styles.modalBody}>
        <button
          className={styles.closeModalButton}
          onClick={() => toggleModal(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
      document.querySelector("#modal-root")
    );
  } else {
    return null
  }

};

export default Modal;