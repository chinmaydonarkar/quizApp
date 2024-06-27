import React from "react";
import User from "../components/User";
import { NavLink, Outlet } from "react-router-dom";


export default function Quizes() {

  return (
    <>
      <div>
        <User></User>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="react">React</NavLink>
              </li>
              <li>
                <NavLink to="javascript">JavaScript</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}
