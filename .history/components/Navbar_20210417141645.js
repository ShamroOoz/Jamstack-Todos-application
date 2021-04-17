export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-600 font-bold text-xl">Todo List</div>
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
