import React, { useState } from "react";

export default function CreateTodos() {
  const [newTodo, setnewTodo] = useState("");
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
    </>
  );
}
