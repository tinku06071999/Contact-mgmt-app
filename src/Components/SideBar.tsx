import { Link, useLocation } from "react-router-dom";
const SideBar = () => {
  const Location = useLocation();
  const currentPath = Location.pathname;
  return (
    <div className="sticky top-0 flex h-10 w-full justify-between  bg-[#000000b7] px-5 py-2 text-white md:max-h-full md:min-h-screen md:w-40 md:flex-col md:items-center md:justify-start  md:bg-[#6f101081] md:bg-blue-500">
      <Link to="/">
        <button
          className={`${
            currentPath == "/"
              ? "font-semibold md:text-gray-700"
              : "font-extralight md:font-normal"
          }`}
        >
          Contacts
        </button>
      </Link>
      <Link to="/Maps">
        <button
          className={`${
            currentPath == "/"
              ? "font-extralight md:font-normal "
              : "font-semibold md:text-gray-700"
          }`}
        >
          Charts And Maps
        </button>{" "}
      </Link>
    </div>
  );
};

export default SideBar;
