import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css';


const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = (props) => {
    return <div className={styles.modalOverlay}>
        <div className={styles.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById("portal-root")

const Modal = (props) => {
  return <Fragment>
      {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
      {ReactDom.createPortal(<ModalOverlay>
          {props.children}
      </ModalOverlay>,portalElement)}
      
  </Fragment>;
};

export default Modal;
