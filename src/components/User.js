import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function User() {
  const { user, logoutSystem } = useAuth();
  const navigate = useNavigate();

  function handleClick() {
    logoutSystem();
    navigate("/");
  }

  return (
    <div className="">
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

