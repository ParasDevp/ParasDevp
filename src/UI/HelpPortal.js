import React from "react";
import Modal from "./Modal";
import styles from "./Portal.module.css"

const HelpPortal = (props) => {
    
  return (
    <Modal onClick={props.onClick} >
      <ul className={`${styles.option_portal} ${styles.portal1}`} onClick={props.onClick}>
        <li>Geeting Started</li>
        <li>Support Center</li>
        <li>What's New</li>
        <li>Term of Service</li>
        <li>Give Feedback</li>
      </ul>
    </Modal>
  );
};

export default HelpPortal;
