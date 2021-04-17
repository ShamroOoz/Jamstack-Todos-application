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

  //   useEffect(() => {
  //     const getTodos = async () => {
  //       const { data } = await axios.get(`/api/getTodos`);
  //       if (data) {
  //         setTodos((prevTodos) => [...prevTodos, data]);
  //       }
  //     };
  //     getTodos();
  //   }, []);

  const refreshTodos = async () => {
    try {
      const { data } = await axios.get(`/api/getTodos`);
      if (data) {
        setTodos((prevTodos) => [...prevTodos, data]);
      }
    } catch (error) {
      console.log(error);
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
  const updateTodos = async (formData) => {
    try {
      const { data } = await axios.get(`/api/updateTodos`, formData);
      if (data) {
        const updaterecord = todos.map((element) =>
          element.id === data.id ? data : element
        );
        setTodos(updaterecord);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteTodo = async (id) => {
    try {
      const { data } = await axios.get(`/api/deleteTodos`, id);
      if (data) {
        const delrecord = todos.filter((element) => element.id !== data.id);
        setTodos(delrecord);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    todos,
    setTodos,
    updateTodos,
    creatTodos,
    deleteTodo,
    refreshTodos,
  };
}
