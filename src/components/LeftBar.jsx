import SideBarLink from "./SideBarLink";
import { RiHome5Fill } from "@remixicon/react";
import { CircleArrowOutUpRight } from "lucide-react";
import { Newspaper } from "lucide-react";
import { Shapes } from "lucide-react";
import { Plus } from "lucide-react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const LeftBar = () => {
  return (
    <div className="border-r border-[#B7CAD4]/20 h-screen flex flex-col py-4 pl-4 pr-9 border-b border-[#B7CAD4]/20">
      <div className="border-b pb-3 border-[#B7CAD4]/20 ">
        <SideBarLink
          icon={<RiHome5Fill className="h-5 w-5" />}
          title={"Home"}
          href={"#home"}
          active={true}
        />
        <SideBarLink
          icon={<CircleArrowOutUpRight className="h-4 w-4" />}
          title={"Popular"}
          href={"#popular"}
          active={false}
        />
        <SideBarLink
          icon={<Newspaper className="h-5 w-5" />}
          title={"News"}
          href={"#news"}
          active={false}
        />
        <SideBarLink
          icon={<Shapes className="h-5 w-5" />}
          title={"Explore"}
          href={"#explore"}
          active={false}
        />
        <SideBarLink
          icon={<Plus className="h-5 w-5" />}
          title={"Start a community"}
          href={"#community"}
          active={false}
        />
        
      </div>

    </div>
  );
};

export default LeftBar;
