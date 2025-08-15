import { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [token, setToken] = "";
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    setToken("");
  };

  return (
    <div className="bg-gray-100 py-3 px-2">
      <div className="flex md:max-w-[90%] mx-auto items-center justify-between font-medium">
        <Link to="/">
          <p className="md:text-3xl text-xl font-medium">Anmol Vastralay</p>
        </Link>
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "[&>hr]:block" : "[&>hr]:hidden"
              }`
            }
          >
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink
            to="/women"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "[&>hr]:block" : "[&>hr]:hidden"
              }`
            }
          >
            <p>Women</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink
            to="/men"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "[&>hr]:block" : "[&>hr]:hidden"
              }`
            }
          >
            <p>Men</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink
            to="/kids"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "[&>hr]:block" : "[&>hr]:hidden"
              }`
            }
          >
            <p>Kids</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 ${
                isActive ? "[&>hr]:block" : "[&>hr]:hidden"
              }`
            }
          >
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
          </NavLink>
        </ul>
        <div className="flex items-center gap-6">
          <img className="cursor-pointer w-5" src={assets.search_icon} alt="" />
          <div className="group relative">
            <img
              onClick={() => (token ? null : navigate("/login"))}
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt=""
            />
            {/* Dropdown Menu */}
            {token && (
              <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p
                    onClick={() => navigate("/profile")}
                    className="cursor-pointer hover:text-black"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => navigate("/orders")}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={logout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>
          <Link to="/cart" className="relative">
            <img className="w-5 min-w-5" src={assets.cart_icon} alt="" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              0
            </p>
          </Link>
          <img
            onClick={() => setVisible(true)}
            className="w-5 cursor-pointer sm:hidden"
            src={assets.menu_icon}
            alt=""
          />
        </div>

        {/* Sidebar menu for small screens */}
        <div
          className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <div className="flex flex-col text-gray-600">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-3 cursor-pointer"
            >
              <img
                className="h-4 rotate-180"
                src={assets.dropdown_icon}
                alt=""
              />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/women"
            >
              Women
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/men"
            >
              Men
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/kids"
            >
              Kids
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-2 pl-6 border"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
