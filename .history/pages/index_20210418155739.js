import React, { useEffect } from "react";
import axios from "axios";
import { CreateTodos, Navbar } from "../components";
import { server } from "../config";
import { useTodos } from "../Context/Globalcontext";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home({ data }) {
  const { setTodos } = useTodos();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (data) {
      setTodos(data);
    }
  }, []);

  return (
    <div className="h-100 w-full flex items-center justify-center font-sans bg-blue-100 ">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <div className="mb-4">
          <Navbar />
          {!user && !isLoading && (
            <div className="text-2xl font-bold text-red-600 text-center mt-2">
              You Need to Login to creat TODOs..
            </div>
          )}
          {user && !isLoading && <CreateTodos />}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${server}/api/getTodos`);
  return {
    props: { data },
  };
};
