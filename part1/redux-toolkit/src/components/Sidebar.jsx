import { useSelector } from "react-redux";

const links = ["Dashboard", "Ecommerce", "Super market", "Long vision"];
const Sidebar = () => {
  const globalOption = useSelector((state) => state.global.showSidebar);
  return (
    <div
      className={`w-[300px] fixed top-5 left-5 bottom-5 bg-white shadow-xl rounded transition-all ${
        globalOption ? "" : "-translate-x-[200%]"
      }`}
    >
      {links.length > 0 &&
        links.map((item) => (
          <div className="p-4 cursor-pointer hover:bg-gray-500" key={item}>
            {item}
          </div>
        ))}
    </div>
  );
};

export default Sidebar;
