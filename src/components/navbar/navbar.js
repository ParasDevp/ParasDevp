import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  // const activepath = window.location.pathname;
  // // console.log(activepath);
  // const NavLinks = document.querySelectorAll("nav a").forEach((link) => {
  //   if (link == activepath){
  //     console.log(link)
  //   }
  // });

  return (
    <nav>
      <ul className="nav">
        <NavLink to={"/"} className="navItems">
          <div className="active_cirle">
            <i className="far fa-file-alt"></i>
          </div>
          <div className="text">Quote</div>
        </NavLink>
        <NavLink to={"/dispatch"} className="navItems">
          <i className="fas fa-plane"></i>
          <div className="text">Dispatch</div>
        </NavLink>
        <NavLink to={"/actualize"} className="navItems">
          <i className="fas fa-stamp"></i>
          <div className="text">Actualize</div>
        </NavLink>
        <NavLink to={"/invoice"} className="navItems">
          <i className="fas fa-file-invoice"></i>
          <div className="text">Invoice</div>
        </NavLink>
        <div className="line"></div>
        <NavLink to={"/supplycontract"} className="navItems">
          <i className="fas fa-file-signature"></i>
          <div className="text">Supply contract</div>
        </NavLink>
        <NavLink to={"/suppliers"} className="navItems">
          <i className="fas fa-users"></i>
          <div className="text">Suppliers</div>
        </NavLink>
        <div className="line"></div>
        <NavLink to={"/salescontract"} className="navItems">
          <i className="fas fa-bullseye"></i>
          <div className="text">Sales Contract</div>
        </NavLink>

        <NavLink to={"/customer"} className="navItems">
          <i className="fas fa-users"></i>
          <div className="text">Customer</div>
        </NavLink>
        <div className="line"></div>
        <NavLink to={"/price"} className="navItems">
          <i className="fas fa-money-bill-alt"></i>
          <div className="text">Price</div>
        </NavLink>
        <NavLink to={"/fees"} className="navItems">
          <i className="fas fa-newspaper"></i>
          <div className="text">Fees</div>
        </NavLink>
        <NavLink to={"/taxes"} className="navItems">
          <i className="fas fa-landmark"></i>
          <div className="text">Taxes</div>
        </NavLink>
        <div className="line"></div>
        <NavLink to={"/managedata"} className="navItems">
          <i className="fas fa-database"></i>
          <div className="text">Manage Data</div>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
