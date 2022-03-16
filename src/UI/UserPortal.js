import React from "react";
import Modal from "./Modal";
import styles from "./Portal.module.css"

const UserPortal = (props) => {
  return (
    <Modal onClick={props.onClick} >
      <ul className={`${styles.option_portal} ${styles.portal2}`} onClick={props.onClick}>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    </Modal>
  );
};

export default UserPortal;
