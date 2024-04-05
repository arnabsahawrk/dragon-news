import Marquee from "react-fast-marquee";
import useNewsData from "../../hooks/useNewsData";
import { Link } from "react-router-dom";
const LatestNews = () => {
  const { news } = useNewsData();

  return (
    <div className="flex items-center bg-[#F3F3F3] h-14 lg:h-20 p-5 gap-1 rounded-lg">
      <button className="rounded px-5 py-2.5 overflow-hidden group bg-pink-700 relative hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-pink-600 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative">Latest</span>
      </button>
      <Marquee
        speed={100}
        pauseOnHover
        className="text-[#403F3F] cursor-pointer"
      >
        {news
          .filter((singleNews) => singleNews.others_info?.is_todays_pick)
          .map((singleNews, idx) => (
            <Link
              className={`${idx % 2 === 0 ? "italic" : "font-semibold"} ml-4`}
              key={singleNews._id}
            >
              {singleNews.title}
            </Link>
          ))}
      </Marquee>
    </div>
  );
};

export default LatestNews;
