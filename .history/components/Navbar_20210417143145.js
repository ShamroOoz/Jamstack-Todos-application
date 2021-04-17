export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-600 font-bold text-xl">Todo List</div>
      <div>
        <a className="btn-lrg">Login</a>
        <a className="btn-lrg ">Logout</a>
      </div>
    </div>
  );
}
