import { Bell, Image } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-[#DFDDFE] 2xl:py-5  py-3 px-8 shadow-md flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-3">
        <div className="p-3 bg-white rounded-full"></div>
        <h1 className="text-[#212121] font-semibold text-xl">Bible Match</h1>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <div className="rounded-full flex items-center justify-center border border-[#8380B4] p-1">
          <Bell size={12} />
        </div>
        <div className="rounded-full flex items-center justify-center border border-[#8380B4] p-1">
        <Image size={12} />
        </div>
      </div>
    </div>
  );
};

export default Header;
