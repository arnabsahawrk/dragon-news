import axios from "axios";
import { useEffect, useState } from "react";

const useNewsData = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const newsData = async () => {
    try {
      const res = await axios.get("/news.json");
      const { data } = res;
      setNews(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Failed to fetch news data ", err);
    }
  };

  const categoriesData = async () => {
    try {
      const res = await axios.get("/categories.json");
      const { data } = res;
      setCategories(data);
    } catch (err) {
      console.log("Failed to fetch news data ", err);
    }
  };

  useEffect(() => {
    categoriesData();
    newsData();
  }, []);
  return { news, categories, isLoading };
};

export default useNewsData;
