import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import qZone1 from "../../assets/images/qZone1.png";
import qZone2 from "../../assets/images/qZone2.png";
import qZone3 from "../../assets/images/qZone3.png";

const RightSide = () => {
  return (
    <aside className="col-span-12 order-3 md:col-span-3 lg:col-span-2 space-y-3">
      <h2 className="text-xl font-semibold text-[#403F3F]">Login With</h2>
      <ul className="px-3 font-medium space-y-2">
        <li className="flex justify-center items-center gap-2 border-2 border-red-500 p-3 rounded">
          <FcGoogle />
          Login with Google
        </li>
        <li className="flex justify-center items-center gap-2 border-2 border-sky-500 p-3 rounded">
          <BsTwitterX />
          Login with Twitter
        </li>
        <li className="flex justify-center items-center gap-2 border-2 border-black p-3 rounded">
          <FaGithub />
          Login with Github
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-[#403F3F]">Find Us On</h2>
      <ul className="font-medium space-y-2 border-2 rounded">
        <li>
          <a
            href="https://www.facebook.com/arnabwrk/"
            target="_blank"
            className="flex justify-center items-center gap-2 text-blue-500 p-3"
          >
            <FaFacebookF />
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/arnabwrk"
            target="_blank"
            className="flex justify-center items-center gap-2 text-sky-500 p-3 border-y-2"
          >
            <BsTwitterX />
            Twitter
          </a>
        </li>
        <li>
          <a
            className="flex justify-center items-center gap-2 text-black p-3"
            href="https://github.com/arnabw/"
            target="_blank"
          >
            <FaGithub />
            Github
          </a>
        </li>
      </ul>
      <ul className="bg-[#F3F3F3] rounded p-4">
        <li className="text-xl font-semibold text-[#403F3F]">Q-Zone</li>
        <li>
          <img src={qZone1} alt="Swimming" />
        </li>
        <li>
          <img src={qZone2} alt="Class" />
        </li>
        <li>
          <img src={qZone3} alt="Play Ground" />
        </li>
      </ul>
    </aside>
  );
};

export default RightSide;
