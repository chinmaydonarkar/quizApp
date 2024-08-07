import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/PageNav.module.css";
import { useAuth0 } from "@auth0/auth0-react";


function PageNav() {
  const { loginWithRedirect,logout } = useAuth0();

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/quizzes">Quizzes</NavLink>
        </li>
        <li>
        <button className={styles.ctaLink} onClick={() => loginWithRedirect()}>Log In</button>
          {/* <NavLink to="/login" className={styles.ctaLink}>Login</NavLink> The Navlink only works when you have defined it under Routes under BrowserRouter */}
        </li>
        <li>
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
