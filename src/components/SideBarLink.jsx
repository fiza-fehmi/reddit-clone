function SideBarLink({icon,title,href,active}) {
  return (

   
        <a  href={href}
        className={`flex h-10 w-[220px] text-white items-center rounded-lg px-5 gap-3
        ${
          active
          ? "bg-[#2A3236]"
          : "bg-transparent hover:bg-[#181C1F]"

        }`}
        >
         {icon}
          <span className="text-sm font-medium">{title}</span>
          </a>  
          
  )
}
export default SideBarLink
