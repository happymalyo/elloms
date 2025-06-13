import { MdHistory } from "react-icons/md";
import { Link, useLocation } from "react-router";
import { IoAddCircleSharp } from "react-icons/io5";
import { Button } from "../Common/Button";

export const Header = () => {
  const location = useLocation();

  const isHistoryActive = location.pathname.startsWith("/history");

  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <Link to={"/"}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">
                E
              </span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent cursor-pointer">
              Elloms
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/history">
            <Button
              className={`${
                isHistoryActive
                  ? "bg-gray-200 text-black"
                  : "bg-white text-black hover:bg-gray-100"
              } cursor-pointer`}
            >
              <MdHistory className="h-5 w-5" />
              <span>History</span>
            </Button>
          </Link>
          <Link to="/">
            <Button
              className={`${
                isHistoryActive
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-gray-100"
              } cursor-pointer`}
            >
              <IoAddCircleSharp className="h-5 w-5 text-white" />
              <span>New Campaign</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
