import pfp from "../assets/pfp.jpg";
import { ReactComponent as Share } from "../assets/share.svg";
import { ReactComponent as More } from "../assets/more.svg";
import { ReactComponent as Camera } from "../assets/camera.svg";
import { useState } from "react";

const Profile = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative flex flex-col items-center justify-center h-auto my-10 bg-transparent w-100">
      <img
        src={pfp}
        alt="man sitting"
        id="profile__img"
        className={`object-cover w-32 h-32 rounded-full cursor-pointer ${hovered && "brightness-50"}`}
        onMouseEnter={(e) => setHovered(true)}
        onMouseLeave={(e) => setHovered(false)}
      />
      <h1 id="twitter" className="my-3 text-2xl font-bold">
        @nieladax
      </h1>
      <h2 id="slack" className="hidden">
        Danny-el
      </h2>
      <div className="absolute right-96 -top-3 border-2 p-1 border-dotted rounded-full hidden md:block cursor-pointer border-[#D0D5DD]">
        <Share />
      </div>
      <div className="absolute right-5 -top-3 h-8 flex md:hidden items-center border-2 p-1 border-dotted rounded-full cursor-pointer border-[#D0D5DD]">
        <More />
      </div>
      <div
        className={`${hovered ? "opacity-100" : "opacity-0"} flex absolute items-center justify-center w-16 bg-transparent cursor-pointer h-1/6`}
        onMouseEnter={(e) => setHovered(true)}
        onMouseLeave={(e) => setHovered(false)}
      >
        <Camera />
      </div>
    </div>
  );
};

export default Profile;
