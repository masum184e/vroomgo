import Image from "next/image";

const ProfileCard = () => {
  const user = {
    name: "Nuzhat Nasrum",
    email: "nuzhat@gmail.com",
    profilePicture: "/images/avatar.jpg",
  };
  return (
    <aside className="bg-[#00d98b] text-white p-6 flex flex-col items-center rounded w-full">
      <Image
        src={user.profilePicture}
        alt={user.name}
        width={80}
        height={80}
        className="h-20 w-20 rounded-full mb-4"
      />
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p className="text-sm">{user.email}</p>
    </aside>
  );
};

export default ProfileCard;
