import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { CgMenuLeft } from "react-icons/cg";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className="navbarCargo">
        <Link to="#" className="menu-bars">
          <CgMenuLeft onClick={showSidebar} />
        </Link>
      </div>
      <IconContext.Provider
        value={{
          color: "red",
        }}
      >
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <CloseIcon color="primary" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;