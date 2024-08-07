import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { useAuth0 } from "@auth0/auth0-react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  if (!isAuthenticated) {
    loginWithRedirect();
    return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
        {/* <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-blue-900" ></div> */}
        <div className="animate-spin h-5 w-5 mr-3 bg-indigo-500" viewBox="0 0 24 24">
        </div>
        Redirecting to Login......
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;
