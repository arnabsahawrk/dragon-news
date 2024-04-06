import useNewsData from "../../hooks/useNewsData";
import TrendingNewsCard from "./TrendingNewsCard";

const TrendingNews = () => {
  const { news } = useNewsData();
  return (
    <>
      <h2 className="text-lg text-[#403F3F] font-semibold">Trending News</h2>
      {news
        .filter((singleNews) => singleNews.others_info?.is_trending)
        .map((singleNews) => (
          <TrendingNewsCard key={singleNews._id} news={singleNews} />
        ))}
    </>
  );
};

export default TrendingNews;
