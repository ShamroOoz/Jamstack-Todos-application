import axios from "axios";
import { Navbar, Todolists } from "../components";
import { server } from "../config";
import { useTodos } from "../Context/Globalcontext";

export default function Home({ data }) {
  const value = useTodos();

  return (
    <div className="h-100 w-full flex items-center justify-center font-sans bg-blue-100 ">
      <div className="bg-white rounded shadow p-6 m-4 w-full">
        <div className="mb-4">
          <Navbar />
          <div className="flex mt-4">
            <input className="form-control" placeholder="Add Todo" />
            <button className="btn-add">Add</button>
          </div>
        </div>
        <div>
          {data?.map((rcd) => (
            <Todolists key={rcd.id} todo={rcd} />
          ))}
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
