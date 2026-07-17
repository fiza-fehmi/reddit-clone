import redditLogo from "../assets/reddit-logo.png";
import redditAvatar from "../assets/avatar_default_1.png";
import { Sparkles } from "lucide-react";
import { Ad } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { SquarePlus } from "lucide-react";
import { Bell } from "lucide-react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="parent lg:h-14 bg-[#0E1113] flex flex-col lg:flex-row items-center justify-center lg:justify-between py-2 lg:px-3">
      <h1 className="lg:block hidden text-3xl font-extrabold  font-['IBM_Plex_Sans'] text-[#ffffff] cursor-pointer pl-2">
              reddit
            </h1>
      <div className="lg:hidden flex w-screen flex-col gap-2">
        <div className="flex items-center justify-between px-4">
          <div className="top flex items-center justify-center gap-2 pl-1">
            <Menu className="visible lg:hidden text-[#DBE4E9] h-[21px] w-[21px]" />
            <h1 className=" text-3xl font-extrabold  font-['IBM_Plex_Sans'] text-[#ffffff] cursor-pointer pl-2">
              reddit
            </h1>
          </div>
          <div className=" flex  justify-center items-center gap-1">
            <SquarePlus className="w-5 text-[#DBE4E9]" />
            <div className="flex items-center gap-5 h-10 w-10 rounded-full justify-center sm:mr-2 cursor-pointer hover:bg-[#303238]">
              <Bell className="w-5 text-[#DBE4E9]" />
            </div>
            <div className=" hover:bg-[#303238] cursor-pointer flex justify-center items-center rounded-full">
              <img
                className="h-8 w-8 rounded-full"
                src={redditAvatar}
                alt="avatar"
              />
            </div>
          </div>
        </div>
        <div className="lg:hidden w-[90%] max-w-[730px] md:w-full mx-auto center flex h-12 lg:h-9 px-2 lg:p-0 lg:outline-1 outline-[#0E1113] lg:w-140 bg-[#0E1113] items-center border border-[#FF4500] shadow-[-2px_0_8px_rgba(255,69,0,0.22),2px_0_8px_rgba(250,204,21,0.18)] rounded-full hover:bg-[#1D1E20] ">
          <div className="flex gap-3 lg:mx-1">
            <img className="h-8 " src={redditLogo} alt="reddit-logo" />
          </div>
          <div className="flex-1 ">
            <input
              className=" border-0 w-full text-center outline-none text-white placeholder:text-[#9ca3af] text-normal focus:outline-none focus:ring-0 lg:w-96 placeholder:text-center"
              type="text"
              placeholder="Find anything"
            />
          </div>
          <div className="hidden lg:flex items-center gap-1">
            <div>
              <hr className="bg-[#FFFFFF19] border-none h-6 w-[1px] flex " />
            </div>
            <div className=" flex items-center gap-2 hover:bg-[#303238] h-8 w-16 cursor-pointer rounded-3xl justify-center mx-1">
              <Sparkles className="text-[#FF4500] w-4" />
              <button className="text-[#B7CAD4] text-xs font-medium cursor-pointer">
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden h-12 lg:h-10 lg:flex lg:p-0 lg:w-141 bg-gradient-to-r from-[#FF4500] to-yellow-400 justify-center items-center rounded-full overflow-hidden">
        <div className="center flex h-11 lg:h-9 px-10 lg:p-0 lg:outline-1 overflow-hidden outline-[#0E1113] lg:w-140 bg-[#0E1113] items-center justify-between rounded-full hover:bg-[#1D1E20]">
          <div className="flex gap-3 lg:mx-1">
            <img className="h-7 " src={redditLogo} alt="reddit-logo" />
          </div>
          <div>
            <input
              className="border-0 lg:placeholder:text-center outline-none text-white placeholder:text-[#9ca3af] text-normal lg:text-sm focus:outline-none focus:ring-0 lg:w-96"
              type="text"
              placeholder="Find anything"
            />
          </div>
          <div className="hidden lg:flex items-center gap-1">
            <div>
              <hr className="bg-[#FFFFFF19] border-none h-6 w-[1px] flex " />
            </div>
            <div className=" flex items-center gap-2 hover:bg-[#303238] h-8 w-16 cursor-pointer rounded-3xl justify-center mx-1">
              <Sparkles className="text-[#FF4500] w-4" />
              <button className="text-[#B7CAD4] text-xs font-medium cursor-pointer">
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom flex flex-row text-white sm:gap-1 items-center sm:px-4 h-auto">
        <div className="hidden sm:flex items-center sm:h-10 sm:w-10 rounded-full justify-center cursor-pointer hover:bg-[#303238]">
          <Ad className="sm:w-6 hidden md:hidden sm:block text-[#DBE4E9]" />
        </div>
        <div className="hidden sm:flex items-center sm:h-10 sm:w-10 rounded-full justify-center cursor-pointer hover:bg-[#303238]">
          <MessageCircleMore className="sm:w-5 md:hidden text-[#DBE4E9] hidden sm:block" />
        </div>
        <div className="sm:flex items-center  gap-2 justify-center sm:h-10 sm:w-24 cursor-pointer rounded-3xl hover:bg-[#303238]">
          <SquarePlus className="hidden lg:block w-5 text-[#DBE4E9]" />
          <button className="text-normal md:hidden hidden sm:block font-medium text-[#DBE4E9] cursor-pointer">
            Create
          </button>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-1">
          <div className="flex items-center gap-6 h-10 w-10 rounded-full justify-center sm:mr-2 cursor-pointer hover:bg-[#303238]">
            <Bell className=" w-5 text-[#DBE4E9]" />
          </div>
          <div className="hidden lg:h-11 lg:w-11  lg:hover:bg-[#303238] cursor-pointer lg:flex justify-center items-center rounded-full">
            <img
              className="h-8 w-8 rounded-full"
              src={redditAvatar}
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
