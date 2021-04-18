import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { server } from "../config";

export default function Navbar() {
  const { user, isLoading } = useUser();

  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-600 font-bold text-xl">Todo List</div>
      <div>
        {!user && !isLoading && (
          <Link href={`${server}/api/login`}>
            <a className="btn-lrg">Login</a>
          </Link>
        )}

        {user && !isLoading && (
          <Link href={`${server}/api/logout`}>
            <a className="btn-lrg">Logout</a>
          </Link>
        )}
      </div>
    </div>
  );
}
