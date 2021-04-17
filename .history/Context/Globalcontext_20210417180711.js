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

function useProvideTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await axios.get(`${server}/api/getTodos`);
      if (data) {
        setTodos((prevTodos) => [...prevTodos, data]);
      }
    };
    getTodos();
  }, []);

  const updateTodos = (formData) => {
    return "";
  };
  const creatTodos = (formData) => {
    return "";
  };
  const deleteTodo = (formData) => {
    return "";
  };
  return {
    todos,
    setTodos,
    updateTodos,
    creatTodos,
    deleteTodo,
  };
}
