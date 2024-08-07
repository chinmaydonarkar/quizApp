import React from "react";
// import { useNavigate } from "react-router-dom";
// import PageNav from "../components/PageNav";
// import { useAuth } from "../contexts/AuthContext";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import oauthConfig from "../config/oauthConfig";
import { useAuth0 } from "@auth0/auth0-react";



export default function Login() {

  // const clientId = "1021795117875-15gb1gkrd6b1vpt0a2v6123elf16mh4l.apps.googleusercontent.com";
  const { loginWithRedirect } = useAuth0();

  // PRE-FILL FOR DEV PURPOSES
  // const [email, setEmail] = useState("jack@example.com");
  // const [password, setPassword] = useState("qwerty");

  // const { login, isAuthenticated } = useAuth();
  // const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();

  //   if (email && password) login(email, password);
  // }

  // useEffect(() => {
  //       if (isAuthenticated) navigate("/quizzes", { replace: true });
  //   }, [isAuthenticated, navigate]);


  // return (
  //   <main className="">

  //     <form className="" onSubmit={handleSubmit}>
  //       <div className="">
  //         <label htmlFor="email">Email address</label>
  //         <input
  //           type="email"
  //           id="email"
  //           onChange={(e) => setEmail(e.target.value)}
  //           value={email}
  //         />
  //       </div>

  //       <div className="">
  //         <label htmlFor="password">Password</label>
  //         <input
  //           type="password"
  //           id="password"
  //           onChange={(e) => setPassword(e.target.value)}
  //           value={password}
  //         />
  //       </div>

  //       <div>
  //         <button>Login</button>
  //       </div>
  //     </form>
  //   </main>
  // );


  //-----------------------------------------Google Auth------------------------------////////////////////
  // const handleSuccess = (response) => {
  //   console.log("Google login success:", response);
  // };

  // const handleFailure = (error) => {
  //   console.log("Google login failure:", error);
  // };

  // return (
  //   <GoogleOAuthProvider clientId={clientId}>
  //     <GoogleLogin
  //       onSuccess={handleSuccess}
  //       onError={handleFailure}
  //     />
  //   </GoogleOAuthProvider>
  // );

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
}
