import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar, Todolists } from "../components";
import { server } from "../config";
import { useTodos } from "../Context/Globalcontext";

export default function Home({ data }) {
  const { todos, setTodos, creatTodos } = useTodos();
  const [newTodo, setnewTodo] = useState("");
  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, []);
  const addTodolistner = async (e) => {
    e.preventDefault();
    await creatTodos({ descriptions: newTodo });
    setnewTodo("");
  };

  return (
    <div className="h-100 w-full flex items-center justify-center font-sans bg-blue-100 ">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <div className="mb-4">
          <Navbar />
          <form onSubmit={addTodolistner}>
            <div className="flex mt-4">
              <input
                className="form-control"
                placeholder="Add Todo"
                value={newTodo}
                onChange={(e) => setnewTodo(e.target.value)}
              />
              <button type="submit" className="btn-add">
                Add
              </button>
            </div>
          </form>
        </div>
        <div>
          {todos?.map((rcd) => (
            <Todolists key={rcd.id} todo={rcd} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${server}/api/getTodos`);
  return {
    props: { data },
  };
};
