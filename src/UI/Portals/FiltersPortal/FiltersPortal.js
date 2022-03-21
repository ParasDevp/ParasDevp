import React from "react";
import Modal from "../Modal";
import styles from "../Portal.module.css";

const FiltersPortal = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <ul
        className={`${styles.option_portal} ${styles.portal3}`}
        onClick={props.onClick}
      >
        <li>New Filters</li>
        <li>Add Filters</li>
      </ul>
    </Modal>
  );
};

export default FiltersPortal;
