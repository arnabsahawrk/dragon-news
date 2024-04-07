import useNewsData from "../../hooks/useNewsData";
import TrendingNewsCard from "./TrendingNewsCard";

const TrendingNews = () => {
  const { news } = useNewsData();
  return (
    <>
      {news
        .filter((singleNews) => singleNews.others_info?.is_trending)
        .map((singleNews) => (
          <TrendingNewsCard key={singleNews._id} news={singleNews} />
        ))}
    </>
  );
};

export default TrendingNews;
