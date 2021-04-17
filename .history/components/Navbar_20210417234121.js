export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-600 font-bold text-xl">Todo List</div>
      <div>
        <a href="/api/auth/login" className="btn-lrg">
          Login
        </a>
        <a href="/api/auth/logout" className="btn-lrg">
          Logout
        </a>
      </div>
    </div>
  );
}
