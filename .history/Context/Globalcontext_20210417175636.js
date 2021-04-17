import React, { useState, useEffect, useContext, createContext } from "react";

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
