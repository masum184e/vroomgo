import { RiVerifiedBadgeFill } from "react-icons/ri";
import { GoUnverified } from "react-icons/go";
import { GiSteeringWheel } from "react-icons/gi";
import { RiParentLine } from "react-icons/ri";

const OverviewCards = () => {
  const cardItems = [
    {
      icon: <RiVerifiedBadgeFill />,
      title: "Verified",
      count: 999,
    },
    {
      icon: <GoUnverified />,
      title: "Unverified",
      count: 999,
    },
    {
      icon: <GiSteeringWheel />,
      title: "Driver",
      count: 999,
    },
    {
      icon: <RiParentLine />,
      title: "Renter",
      count: 999,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {cardItems.map((card, index) => (
        <div
          key={index}
          className="bg-[#00d98b] text-white p-4 rounded shadow-lg"
        >
          <div className="text-3xl mb-2">{card.icon}</div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-2xl font-bold">{card.count}</p>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
