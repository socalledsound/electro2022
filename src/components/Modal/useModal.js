import React, { Fragment, useState } from "react";
import Modal from './Modal'

export default function useModal() {
  let [modal, toggleModal] = useState(false);
//console.log(modal)
    const ModalContent = ({children}) => {
        return (
            <Fragment>
            {
                modal &&
                <Modal toggleModal={toggleModal} modal={modal}>
                    {children}
                </Modal>
            }
        </Fragment>
        )

    }


  return { modal, toggleModal, ModalContent };
};