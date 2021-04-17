import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const globalContext = createContext();

export function ProvideTodo({ children }) {
  const data = useProvideTodos();
  return (
    <globalContext.Provider value={data}>{children}</globalContext.Provider>
  );
}
export const useTodos = () => {
  return useContext(globalContext);
};

function useProvideTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const { data } = await axios.get(`/api/getTodos`);
      if (data) {
        setTodos((prevTodos) => [...prevTodos, data]);
      }
    };
    getTodos();
  }, []);

  const updateTodos = async (formData) => {
    const { data } = await axios.get(`/api/createTodos`, formData);
    if (data) {
      setTodos((prevTodos) => [...prevTodos, data]);
    }
  };
  const creatTodos = async (formData) => {
    try {
      const { data } = await axios.get(`/api/createTodos`, formData);
      if (data) {
        setTodos((prevTodos) => [...prevTodos, data]);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (formData) => {
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
