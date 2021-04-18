import React, { useEffect, useState } from "react";
import { useTodos } from "../Context/Globalcontext";
import Todolists from "./Todolists";
import { useUser } from "@auth0/nextjs-auth0";

export default function CreateTodos() {
  const [newTodo, setnewTodo] = useState("");
  const { todos, creatTodos } = useTodos();
  const { user } = useUser();

  useEffect(() => {
    console.log(todos);
    let userTodo = todos.filter((todo) => todo.fields.userId === user.sub);
    console.log(userTodo);
  }, []);
  //
  const addTodolistner = async (e) => {
    e.preventDefault();
    await creatTodos({ descriptions: newTodo });
    setnewTodo("");
  };

  return (
    <>
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
      <div className="mt-3">
        {todos && todos.map((rcd) => <Todolists key={rcd.id} todo={rcd} />)}
      </div>
    </>
  );
}
