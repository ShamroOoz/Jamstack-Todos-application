export default function Navbar() {
  return (
    <div>
      <h1 className="text-gray-600 font-bold text-xl">Todo List</h1>
      <div>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue-400 border-blue-400 hover:blue-white hover:bg-blue-200">
          Login
        </button>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-blue-400 border-blue-400 hover:text-white hover:bg-blue-200">
          Logout
        </button>
      </div>
    </div>
  );
}
