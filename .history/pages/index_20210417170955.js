import axios from "axios";
import { Navbar, Todolists } from "../components";
import { server } from "../config";

export default function Home({ records }) {
  console.log(records);
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
          {records?.map((rcd) => (
            <Todolists key={rcd.id} todo={rcd} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { records } = await axios.get(`${server}/api/getTodos`);
  return {
    props: { records },
  };
};
