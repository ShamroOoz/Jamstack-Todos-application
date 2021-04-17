export default function Todolists({ todo }) {
  const { fields } = todo;
  return (
    <div className="flex mb-4 items-center shadow-md justify-center p-3">
      <p className="w-full text-gray-800 text-lg font-semibold">
        {fields.descriptions}
      </p>
      <input
        className=""
        type="checkbox"
        value={todo.completed}
        placeholder="Add Todo"
      />
      <button className="btn-rmv">Remove</button>
    </div>
  );
}
