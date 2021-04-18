import Image from "next/image";

export default function UserProfile({ user }) {
  console.log(user);
  return (
    <div className="w-full relative">
      <Image
        className="max-h-20 w-full opacity-80 absolute top-0 -z-10"
        src="/public/banner.jpg"
        alt="Picture of the baner"
        width={500}
        height={500}
      />
      <div className="w-full flex m-3 ml-4 text-white">
        <Image
          className="w-28 h-28 p-1 bg-white rounded-full"
          src={user?.picture}
          alt="Picture of the user"
          width={500}
          height={500}
        />
        <div className="mt-11 ml-3 font-bold uppercase">{user?.nickname}</div>
      </div>
    </div>
  );
}
