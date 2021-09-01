import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1100x1100.png"
          alt=""
        />
        <button onClick={handleSignIn}>Login in with Google</button>
      </div>
    </div>
  );
}

export default Login;
