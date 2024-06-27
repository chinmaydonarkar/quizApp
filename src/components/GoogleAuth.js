import React from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from "@react-oauth/google";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

const GoogleAuth = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (res) => {
    const userDetails = jwtDecode(res.credential);
    console.log("ressssssssss", userDetails);

    setUser(userDetails);
  };

  const handleLoginFailure = (error) => {
    console.error(error);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

  return (
    <GoogleOAuthProvider clientId="286448768408-bdneq6jbgks7486001cah7g8jd5rv953.apps.googleusercontent.com">
      <div>
        {user ? (
          <div>
            <h3>Welcome, {user.name}</h3>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
          />
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
