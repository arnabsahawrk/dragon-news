import { NavLink } from "react-router-dom";
import profile from "../../assets/images/user.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className="flex flex-col-reverse md:flex-row gap-2 items-center justify-between">
      <div className="hidden lg:grid"></div>
      <div>
        <ul className="flex items-center gap-5 text-lg text-[#706F6F]">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                `${isActive ? "text-[#403F3F] font-semibold" : ""} ${
                  isPending ? "text-red-400" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                `${isActive ? "text-[#403F3F] font-semibold" : ""} ${
                  isPending ? "text-red-400" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive, isPending }) =>
                `${isActive ? "text-[#403F3F] font-semibold" : ""} ${
                  isPending ? "text-red-400" : ""
                }`
              }
            >
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <img
          className="size-10 object-cover rounded-full"
          src={user?.photoURL || profile}
          alt="Profile"
        />
        <button
          onClick={user ? logOut : null}
          className="px-8 py-[6px] rounded-sm bg-[#403F3F] text-white text-lg font-semibold"
        >
          {user ? "Logout" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
