import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="h-100 w-full flex items-center justify-center font-sans bg-blue-100">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
          <Navbar />
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"
              placeholder="Add Todo"
            />
            <button className="flex-shrink-0 p-2 border-2 rounded text-black border-black hover:text-white hover:bg-black">
              Add
            </button>
          </div>
        </div>
        <div>
          <div className="flex mb-4 items-center">
            <p className="w-full text-gray-800">
              Add another component to Tailwind Components
            </p>
            <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-400 border-green-400 hover:bg-green-300">
              Done
            </button>
            <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-400 border-red-400 hover:text-white hover:bg-red-200">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
