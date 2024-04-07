import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import useNewsData from "../../hooks/useNewsData";
import HomeNewsCard from "./HomeNewsCard";
import NoNews from "./NoNews";
const HomeNews = ({ category }) => {
  const [view, setView] = useState(2);
  const [news, setNews] = useState([]);
  const { news: allNews } = useNewsData();

  const handleView = () => {
    if (view >= news.length) {
      return setView(2);
    }
    setView(view + 2);
  };

  useEffect(() => {
    if (category === "0") {
      return setNews(allNews);
    }
    const theNews = allNews.filter((aNews) => aNews.category_id === category);
    setNews(theNews);
  }, [category, allNews]);

  return (
    <article className="col-span-12 order-1 md:order-2 md:col-span-6 lg:col-span-8">
      <h2 className="text-xl font-semibold text-[#403F3F]">Dragon Home News</h2>
      <div>
        <div className="space-y-5">
          {news.length ? (
            news
              .slice(0, view)
              .map((singleNews) => (
                <HomeNewsCard key={singleNews._id} news={singleNews} />
              ))
          ) : (
            <NoNews />
          )}
        </div>
        <div
          className={`text-center ${news.length > 2 ? "visible" : "invisible"}`}
        >
          <button
            onClick={handleView}
            className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group"
          >
            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-pink-700 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-pink-700 rounded-md opacity-0 group-hover:opacity-100 "></span>
            <span className="relative text-pink-700 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">
              {view >= news.length ? "View Less" : "View More"}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};

HomeNews.propTypes = {
  category: PropTypes.string.isRequired,
};

export default HomeNews;
