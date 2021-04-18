export default function UserProfile() {
  return (
    <div className="w-full relative">
      <img
        className="max-h-20 w-full opacity-80 absolute top-0 -z-10"
        src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
        alt=""
      />
      <div className="w-full flex m-3 ml-4 text-white">
        <img
          className="w-28 h-28 p-1 bg-white rounded-full"
          src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
          alt=""
        />
        <div className="mt-11 ml-3 font-bold flex flex-col">
          <div className="name break-words">Sarah</div>
        </div>
      </div>
    </div>
  );
}
