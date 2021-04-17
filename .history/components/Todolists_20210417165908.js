export default function Todolists() {
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-gray-800">
        Add another component to Tailwind Components
      </p>
      <button className="flex-shrink-0 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-300">
        Done
      </button>
      <button className="flex-shrink-0 p-2 ml-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-200">
        Remove
      </button>
    </div>
  );
}
