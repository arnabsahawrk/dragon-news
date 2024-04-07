import { Link, useParams } from "react-router-dom";
import useNewsData from "../../hooks/useNewsData";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import RightSide from "../Shared/RightSide";
import { FaArrowLeftLong } from "react-icons/fa6";
import TrendingNews from "../../components/TrendingNews/TrendingNews";
const SingleNews = () => {
  const [singleNews, setSingleNews] = useState({});
  const { id } = useParams();
  const { news } = useNewsData();

  useEffect(() => {
    const theNews = news.find((aNews) => aNews._id === id);
    setSingleNews(theNews);
  }, [news, id]);

  return (
    <>
      <Helmet>
        <title>{singleNews?.title}</title>
      </Helmet>
      <section className="space-y-5">
        <Header />
        <section className="grid grid-cols-12 gap-2">
          <article className="col-span-12 order-1 md:col-span-9 lg:col-span-10 space-y-3">
            <h2 className="text-xl font-semibold text-[#403F3F]">
              Dragon News
            </h2>
            {/* Single News Details  */}
            <div className="space-y-5 p-7 border-2 rounded-xl">
              <img
                className="w-full object-cover h-[500px] rounded-xl"
                src={singleNews?.image_url}
                alt={singleNews?.title}
              />
              <h2 className="text-[#403F3F] text-2xl font-bold">
                {singleNews?.title}
              </h2>
              <p className="text-[#706F6F]">{singleNews?.details}</p>
              <button>
                <Link
                  to="/"
                  className="bg-pink-700 text-white px-4 py-2 font-semibold flex items-center gap-3"
                >
                  <FaArrowLeftLong />
                  All news in this category
                </Link>
              </button>
            </div>
            {/* Trending News Details  */}
            <h2 className="text-lg text-[#403F3F] font-semibold">
              Trending News
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <TrendingNews />
            </div>
          </article>
          <RightSide />
        </section>
      </section>
    </>
  );
};

export default SingleNews;
