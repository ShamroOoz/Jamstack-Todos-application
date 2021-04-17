import React, { useState, useEffect, useContext, createContext } from "react";

const globalContext = createContext();

export function ProvideAuth({ children }) {
  return (
    <authContext.Provider value={`jdhdhdh`}>{children}</authContext.Provider>
  );
}
export const useTodos = () => {
  return useContext(globalContext);
};
