export default function Navbar() {
  return (
    <div>
      <h1 className="text-gray-600 font-bold text-xl">Todo List</h1>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-200">
        Login
      </button>
      <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-200">
        Logout
      </button>
    </div>
  );
}
