// import React,{ createContext, useContext, useReducer } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import { Auth0Provider } from '@auth0/auth0-react';


// const AuthContext = createContext();


// const initialState = {
//     user: null,
//     isAuthenticated: false
// } 

// function reducer (state, action){

//     switch (action.type) {
//         case "login":
//             return {...state, user: action.payload, isAuthenticated: true};

//         case "logout":
//             return {...state, user: null, isAuthenticated: false }
//         default:
//             throw new Error("Unknown action");
//     }
// }

// const FAKE_USER = {
//     name: "Jack",
//     email: "jack@example.com",
//     password: "qwerty",
//     avatar: "https://i.pravatar.cc/100?u=zz",
//   };


// function AuthProvider({children}){ 

//     const { user, isAuthenticated, isLoading } = useAuth0();

//     const [dispatch] = useReducer(reducer,initialState)

//     function login(email, password) {
//         if (email === FAKE_USER.email && password === FAKE_USER.password)
//           dispatch({ type: "login", payload: FAKE_USER });
//       }
    
//     function logout() {
//         dispatch({ type: "logout" });
//       }

//       return (
//         <AuthContext.Provider value={{user, isAuthenticated, login ,logout}}>
//              <Auth0Provider
//     domain="dev-xghvqgojnv11c2rw.us.auth0.com"
//     clientId="8BSwjt8ozI9GcS1xdC3PJlaysD36GJLy"
//     authorizationParams={{
//       redirect_uri: window.location.origin
//     }}
//   >
//             {children}
//         </Auth0Provider>
//     </AuthContext.Provider>
//       )
// }

// function useAuth(){
//     const context = useContext(AuthContext);
//     if (context === undefined)
//         throw new Error("AuthContext was used outside AuthProvider");
//     return context;
// }

// export {AuthProvider,useAuth}


import React, { createContext, useContext, useReducer, useEffect } from "react";
import { useAuth0, Auth0Provider } from "@auth0/auth0-react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

function AuthProvider({ children }) {
  const { user, isAuthenticated, isLoading,logout} = useAuth0();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch({ type: "login", payload: user });
    }
  }, [isAuthenticated, user]);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logoutSystem() {
    logout({ logoutParams: { returnTo: window.location.origin } })
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ ...state, login, logoutSystem }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

function AppProvider({ children }) {
  return (
    <Auth0Provider
      domain="dev-xghvqgojnv11c2rw.us.auth0.com"
      clientId="8BSwjt8ozI9GcS1xdC3PJlaysD36GJLy"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AuthProvider>{children}</AuthProvider>
    </Auth0Provider>
  );
}

export { AppProvider, useAuth };
