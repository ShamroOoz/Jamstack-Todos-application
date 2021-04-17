import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className="text-gray-600 font-bold text-xl">Todo List</div>
      <div>
        {!user && !isLoading && (
          <Link href="/api/auth/login">
            <a className="btn-lrg">Login</a>
          </Link>
        )}

        {user && !isLoading && (
          <Link href="/api/auth/logout">
            <a className="btn-lrg">Logout</a>
          </Link>
        )}
      </div>
    </div>
  );
}
