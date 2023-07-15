import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setopen] = useState<boolean>(false);

  const handleOpenNavabar = () => {
    setopen((prev) => !prev);
  };

  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>
        <div onClick={handleOpenNavabar} className="menu-icons">
          <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={open ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
