import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import qZone1 from "../../assets/images/qZone1.png";
import qZone2 from "../../assets/images/qZone2.png";
import qZone3 from "../../assets/images/qZone3.png";
import bg from "../../assets/images/bg.png";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const RightSide = () => {
  const { googleUser, facebookUser, githubUser } = useContext(AuthContext);
  return (
    <aside className="col-span-12 order-3 md:col-span-3 lg:col-span-2 space-y-3">
      <h2 className="text-xl font-semibold text-[#403F3F]">Login With</h2>
      <ul className="px-3 font-medium space-y-2 text-xs">
        <li
          onClick={googleUser}
          className="flex justify-center items-center gap-2 border-2 border-red-500 p-2 rounded cursor-pointer text-nowrap"
        >
          <FcGoogle />
          Login with Google
        </li>
        {/* <li
          onClick={twitterUser}
          className="flex justify-center items-center gap-2 border-2 border-sky-500 p-2 rounded cursor-pointer text-nowrap"
        >
          <BsTwitterX />
          Login with Twitter
        </li> */}
        <li
          onClick={facebookUser}
          className="flex justify-center items-center gap-2 border-2 border-[#3b5998] p-2 rounded cursor-pointer text-nowrap"
        >
          <FaFacebook className="text-[#3b5998]" />
          Login with Facebook
        </li>
        <li
          onClick={githubUser}
          className="flex justify-center items-center gap-2 border-2 border-black p-2 rounded cursor-pointer text-nowrap"
        >
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
            className="flex justify-center items-center gap-2 text-[#3b5998] p-3"
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
            className="flex justify-center items-center gap-2 text-[#0a66c2] p-3"
            href="https://www.linkedin.com/in/arnabw"
            target="_blank"
          >
            <FaLinkedin />
            Linkedin
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
      <div
        className="h-[500px] bg-no-repeat text-white flex flex-col items-center justify-center gap-5 text-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <h2 className="font-bold text-3xl">Create an Amazing Newspaper</h2>
        <p>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="rounded px-5 py-2.5 overflow-hidden group bg-pink-700 relative hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-600 hover:ring-2 hover:ring-offset-2 hover:ring-pink-600 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">Learn More</span>
        </button>
      </div>
    </aside>
  );
};

export default RightSide;
