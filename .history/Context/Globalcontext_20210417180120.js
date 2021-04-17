import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const globalContext = createContext();

export function ProvideTodo({ children }) {
  return (
    <globalContext.Provider value={`jdhdhdh`}>
      {children}
    </globalContext.Provider>
  );
}
export const useTodos = () => {
  return useContext(globalContext);
};


// Top level App component
import React from "react";
import { ProvideAuth } from "./use-auth.js";
function App(props) {
  return (
    <ProvideAuth>
      {/*
        Route components here, depending on how your app is structured.
        If using Next.js this would be /pages/_app.js
      */}
    </ProvideAuth>
  );
}
// Any component that wants auth state
import React from "react";
import { useAuth } from "./use-auth.js";
function Navbar(props) {
  // Get auth state and re-render anytime it changes
  const auth = useAuth();
  return (
    <NavbarContainer>
      <Logo />
      <Menu>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {auth.user ? (
          <Fragment>
            <Link to="/account">Account ({auth.user.email})</Link>
            <Button onClick={() => auth.signout()}>Signout</Button>
          </Fragment>
        ) : (
          <Link to="/signin">Signin</Link>
        )}
      </Menu>
    </NavbarContainer>
  );
}
// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
// Add your Firebase credentials
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  projectId: "",
  appID: "",
});
const authContext = createContext();
// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};


function useProvideTodos() {
  const [todos, setTodos] = useState([]);
 
  useEffect(() => {
      const { data } = await axios.get(`${server}/api/getTodos`);
      if (data) {
          setTodos(prevTodos => [...prevTodos,data])
      }
  }, []);
  // Return the user object and auth methods
  return {
    todos,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
