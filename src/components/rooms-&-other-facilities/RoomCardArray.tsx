import React from "react";
import RoomCard from "./RoomCard";

const RoomCardArray: React.FC = () => {
  const rooms = [
    { image: "/images/Facilities/Cards/Rooms/SuperDeluxeRoomCardImg.jpg", title: "Super Deluxe Room", hoverText: "Deluxe Category", link: "/rooms-&-other-facilities/super-deluxe-room" },
    { image: "/images/Facilities/Cards/Rooms/PresidentialCourtRoomCardImg.jpg", title: "Presidential Court", hoverText: "Suites Category", link: "/rooms-&-other-facilities/presidential-court-room" },
    { image: "/images/Facilities/Cards/Rooms/DeluxeRoomCardImg.jpg", title: "Deluxe Room", hoverText: "Deluxe Category", link: "/rooms-&-other-facilities/deluxe-room" },
    { image: "/images/Facilities/Cards/Rooms/WardBedsRoomCardImg.jpg", title: "Ward Beds", hoverText: "Ward Beds Category", link: "/rooms-&-other-facilities/ward-beds" },
    { image: "/images/Facilities/Cards/Rooms/KingsCourtRoomCardImg.jpg", title: "King's Court", hoverText: "Suites Category", link: "/rooms-&-other-facilities/king's-court-room" },
    { image: "/images/Facilities/Cards/Rooms/SuperiorRoomCardImg.jpg", title: "Superior Room", hoverText: "Deluxe Category", link: "/rooms-&-other-facilities/superior-room" },
  ];

  return (
    <section className="px-6 md:px-32 py-10 " id="Rooms Section">
      <h2 className="text-[#122739] text-[40px] text-center font-extrabold my-10">
        Rooms <span className="text-[#18CE67]">Facilities</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            hoverText={room.hoverText}
            link={room.link}
          />
        ))}
      </div>
    </section>
  );
};

export default RoomCardArray;