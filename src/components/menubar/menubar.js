import React, { useState } from "react";
import styles from "./menubar.module.css";
import HelpPortal from "../../UI/Portals/HelpPortal/HelpPortal";
import UserPortal from "../../UI/Portals/UserPortal/UserPortal";
import FiltersPortal from "../../UI/Portals/FiltersPortal/FiltersPortal";
// import SearchIcon from "@mui/icons-material/Search";

const Menubar = () => {
  const [userPortalState, setUserPortalState] = useState(false);
  const [helpPortalState, setHelpPortalState] = useState(false);
  const [filtersPortalState, setFiltersPortalState] = useState(false);

  const handleUserPortal = () => {
    setHelpPortalState(false);
    setFiltersPortalState(false);
    setUserPortalState(!userPortalState);
  };

  const handleHelpPortal = () => {
    setUserPortalState(false);
    setFiltersPortalState(false);
    setHelpPortalState(!helpPortalState);
  };
  const handleFiltersPortal = () => {
    setUserPortalState(false);
    setHelpPortalState(false);
    setFiltersPortalState(!filtersPortalState);
  };

  return (
    <menu className={styles.menu}>
      <div className={` ${styles.menuItems} ${styles.logo}`}>
        <img src="/assets/img/Logo.png" alt="Logo" />
      </div>
      <div className={styles.menuItems}>
        <i class="fas fa-search"></i>
        {/* <SearchIcon /> */}
        <input type="text" placeholder="Frequently Used IATA"></input>
      </div>
      <div className={`${styles.menuItems} ${styles.last_menuItem}`}>
        <div className={styles.menuItems_right_options}>
          Filters
          <i className="fas fa-caret-down" onClick={handleFiltersPortal}></i>
          {filtersPortalState && (
            <FiltersPortal onClick={handleFiltersPortal} />
          )}
        </div>
        <div className={styles.menuItems_right_options}>
          <i onClick={handleHelpPortal} className="fas fa-question-circle"></i>
          {/* <HelpIcon onClick={handleHelpPortal} /> */}
          {helpPortalState && <HelpPortal onClick={handleHelpPortal} />}
        </div>
        <div className={styles.menuItems_right_options}>
          <i onClick={handleUserPortal} className="fas fa-user-circle"></i>
          {/* <AccountCircleIcon onClick={handleUserPortal} /> */}
          {userPortalState && <UserPortal onClick={handleUserPortal} />}
        </div>
      </div>
    </menu>
  );
};

export default Menubar;
