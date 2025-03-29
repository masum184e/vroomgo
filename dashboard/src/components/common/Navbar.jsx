import Image from "next/image";

const Navbar = ({ pageName }) => {
  const user = {
    name: "Nuzhat Nasrum",
    email: "nuzhat@gmail.com",
    profilePicture: "/images/avatar.jpg",
  };
  return (
    <div className="flex justify-between mb-4">
      <h1 className="text-2xl font-bold text-gray-600">{pageName}</h1>
      <div className="flex items-center">
        <div className="flex flex-col mr-2 text-right leading-[15px]">
          <h4 className="font-bold text-gray-600">{user.name}</h4>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <Image
          src={user.profilePicture}
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full h-10 w-10 border-2 border-[#00d98b]"
        />
      </div>
    </div>
  );
};

export default Navbar;
