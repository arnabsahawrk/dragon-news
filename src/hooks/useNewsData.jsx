import axios from "axios";
import { useEffect, useState } from "react";

const useNewsData = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get("/news.json");
      const { data } = res;
      setNews(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Failed to load data ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { news, isLoading };
};

export default useNewsData;
