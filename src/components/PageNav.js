import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/PageNav.module.css";


function PageNav() {
  
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/quizes">Quizes</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>Login</NavLink> {/*The Navlink only works when you have defined it under Routes under BrowserRouter */}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
