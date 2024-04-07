import moment from "moment";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col items-center gap-2">
      <Link to="/">
        <img
          className="max-w-full object-cover"
          src={logo}
          alt="The Dragon News"
        />
      </Link>
      <p className="text-lg text-[#706F6F]">
        Journalism Without Fear or Favour
      </p>
      <p className="text-lg text-[#706F6F] font-medium">
        {moment().format("dddd, MMMM DD, YYYY")}
      </p>
    </header>
  );
};

export default Header;
