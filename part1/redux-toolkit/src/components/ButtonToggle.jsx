import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/globalSlice";

const ButtonToggle = () => {
  const globalOption = useSelector((state) => state.global.showSidebar);
  const dispatch = useDispatch();
  const handleShowSidebar = () => {
    dispatch(toggleSidebar(!globalOption));
  };
  console.log(globalOption);
  return (
    <div className="flex justify-end p-5">
      <span
        className="flex items-center justify-center w-10 h-10 bg-gray-400 rounded-full cursor-pointer"
        onClick={handleShowSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
    </div>
  );
};

export default ButtonToggle;
