import { useState } from "react";
import { useTodos } from "../Context/Globalcontext";

export default function Todolists({ todo }) {
  const { fields } = todo;
  const { deleteTodo } = useTodos();
  const [iscompleted, setiscompleted] = useState(fields.completed);
  return (
    <div className="flex mb-4 items-center shadow-md justify-center p-3">
      <p
        className={`w-full capitalize text-gray-800 text-lg font-semibold ${
          fields.completed && `line-through text-red-600`
        }`}
      >
        {fields.descriptions}
      </p>
      <input
        className="checked:bg-blue-600 checked:border-transparent h-8 w-8 "
        type="checkbox"
        checked={iscompleted || fields.completed}
      />
      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="btn-rmv"
      >
        Remove
      </button>
    </div>
  );
}
