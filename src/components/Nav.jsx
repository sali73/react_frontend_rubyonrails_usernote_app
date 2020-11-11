import React from "react";
import { Link } from "react-router-dom";
import { useAppState } from "../AppState.jsx";

const Nav = (props) => {
  const { state, dispatch } = useAppState();

  return (
    <header>
      <div className="navbar navbar-dark bg-dark">
        <h1> Notes App</h1>
      </div>
      <nav>
        {!state.token ? (
          <>
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/auth/signup">
              <div>Signup</div>
            </Link>
            <Link to="/auth/login">
              <div>Login</div>
            </Link>
          </>
        ) : null}
        {state.token ? (
          <div
            onClick={() => {
              dispatch({ type: "logout" });
              props.history.push("/");
            }}
          >
            Logout
          </div>
        ) : null}
      </nav>
    </header>
  );
};
export default Nav;