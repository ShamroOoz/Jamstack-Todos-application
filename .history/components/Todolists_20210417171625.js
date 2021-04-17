export default function Todolists({ todo }) {
  const { fields } = todo;
  return (
    <div className="flex mb-4 items-center shadow-md justify-center py-2">
      <p className="w-full text-gray-800">{fields.descriptions}</p>
      <button className="btn-done">Done</button>
      <button className="btn-rmv">Remove</button>
    </div>
  );
}
