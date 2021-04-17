import Link from "next/Link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-600 font-bold text-xl">Todo List</div>
      <div>
        <Link href="/api/auth/login">
          <a className="btn-lrg">Login</a>
        </Link>

        <Link href="/api/auth/logout">
          <a className="btn-lrg">Logout</a>
        </Link>
      </div>
    </div>
  );
}
