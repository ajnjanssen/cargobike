import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { CgMenuLeft } from "react-icons/cg";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarDataOnd } from "./SidebarDataOnd";
import { SidebarDataMon } from "./SidebarDataMon";
import { SidebarDataBez } from "./SidebarDataBez";
import CloseIcon from "@material-ui/icons/Close";

function DefineNavbar() {
  let [NavbarId, setEnableNavBarId] = React.useState('');

  window.addEventListener('showNavbarMon', function (e) {
    setEnableNavBarId("MonteurNav");
  }, 'OndernemerNav');  
  
  window.addEventListener('showNavbarBez', function (e) {
    setEnableNavBarId("BezorgerNav");
  }, 'OndernemerNav');

  if (NavbarId === "MonteurNav") { 
    return SidebarDataMon;
  }

  if (NavbarId === "BezorgerNav") { 
    return SidebarDataBez;
  }

  return SidebarDataOnd;
}

function Navbar() {

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const SideBarData  = DefineNavbar();

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
                <CloseIcon color="#FFFFFF" />
              </Link>
            </li>
            {SideBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}&nbsp;
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
