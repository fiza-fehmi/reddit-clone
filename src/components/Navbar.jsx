import redditLogo from "../assets/reddit-logo.png";
import redditAvatar from "../assets/avatar_default_1.png";
import { Sparkles } from "lucide-react";
import { Ad } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { Bell } from "lucide-react";

const Navbar = () => {
  return (
    <div className="parent h-14 bg-[#0E1113] flex items-center justify-between px-6 border-b">
      <div className="top">
        <h1 className="text-3xl font-bold font-['inter'] text-white cursor-pointer">reddit</h1>
      </div>
      <div className="h-10 w-141 bg-gradient-to-r from-[#FF4500] to-yellow-400 from flex justify-center items-center rounded-full overflow-hidden">
      <div className="center flex h-9 outline-1 outline-[#0E1113] w-140 bg-[#0E1113] items-center justify-between rounded-full hover:bg-[#1D1E20]">
        <div className="flex gap-3 mx-1">
          <img className="h-7" src={redditLogo} alt="reddit-logo" />
        </div>
        <div>
          <input
            className="border-0 placeholder:text-center outline-none text-white placeholder:text-[#9ca3af] text-sm focus:outline-none focus:ring-0 w-96"
            type="text"
            placeholder="Find anything"
          />
        </div>
        <div className="flex items-center gap-1">
            <div >
        <hr className="bg-[#FFFFFF19] border-none h-6 w-[1px] flex " />
            </div>
            <div className=" flex items-center gap-2 hover:bg-[#303238] h-8 w-16 cursor-pointer rounded-3xl justify-center mx-1">
            <Sparkles className="text-[#FF4500] w-4" />
            <button className="text-[#B7CAD4] text-xs font-medium cursor-pointer"> Ask</button>
          </div>
        
        </div>
          
      </div>
      </div>
      <div className="bottom flex text-white gap-1 items-center">
        <div className="flex items-center gap-5 h-10 w-10 rounded-full justify-center cursor-pointer hover:bg-[#303238]">
          <Ad className="w-6 text-[#DBE4E9]" />
          </div>
          <div className=" flex items-center h-10 w-10 rounded-full justify-center cursor-pointer hover:bg-[#303238]">
          <MessageCircleMore className="w-5 text-[#DBE4E9] " />
        </div>
        <div className="flex items-center gap-2 justify-center h-10 w-24 cursor-pointer rounded-3xl hover:bg-[#303238]">
            <SquarePlus className="w-5 text-[#DBE4E9]" />
          <button className="text-normal font-medium text-[#DBE4E9]">Create</button>
        </div>
        <div className="flex items-center gap-5 h-10 w-10 rounded-full justify-center mr-2 cursor-pointer hover:bg-[#303238]">
          <Bell className="w-5 text-[#DBE4E9]" />
          </div>
          <div className="h-12 w-12 hover:bg-[#303238] cursor-pointer flex justify-center items-center rounded-full">
          <img
            className="h-9 w-9 rounded-full"
            src={redditAvatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
