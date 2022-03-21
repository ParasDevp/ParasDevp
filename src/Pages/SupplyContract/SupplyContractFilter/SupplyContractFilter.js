import React from "react";
import Modal from "../../../UI/Portals/Modal";
import styles from "./SupplyContractFilter.module.css";

const SupplyContractFilter = (props) => {
  return (
    <Modal onClick={props.onClick}>
      <div className={styles.container}>
        <div className={styles.heading}>Suppy and Contract</div>
        <i className="fa-solid fa-xmark" onClick={props.onclose}></i>
        <form>
          <div className={styles.left}>
            <div className={styles.formControl}>
              <label>Supply Contract Id</label>
              <input
                type="text"
                label="Supply Contract Id"
                placeholder="Supply Contract Id"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>Customer</label>
              <input
                type="text"
                label="Customer"
                placeholder="Customer"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>Status</label>
              <input
                type="text"
                label="Status"
                placeholder="Status"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>Locations</label>
              <input
                type="text"
                label="Locations"
                placeholder="Locations"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>Price Index</label>
              <input
                type="text"
                label="Price Index"
                placeholder="Price Index"
                className={styles.input}
              />
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.formControl}>
              <label>Supplier</label>
              <input
                type="text"
                label="Supplier"
                placeholder="Supplier"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>into-Plane/Transpoter</label>
              <input
                type="text"
                label="into-Plane/Transpoter"
                placeholder="into-Plane/Transpoter"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>Status</label>
              <input
                type="text"
                label="Status"
                placeholder="Status"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>UOM</label>
              <input
                type="text"
                label="UOM"
                placeholder="UOM"
                className={styles.input}
              />
            </div>
            <div className={styles.formControl}>
              <label>Price Cycle</label>
              <input
                type="text"
                label="Price Cycle"
                placeholder="Price Cycle"
                className={styles.input}
              />
            </div>
          </div>
        </form>
        <button className={styles.btn}>Search</button>
      </div>
    </Modal>
  );
};

export default SupplyContractFilter;
