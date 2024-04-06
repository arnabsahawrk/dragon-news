import PropTypes from "prop-types";
import { SlCalender } from "react-icons/sl";
import useNewsData from "../../hooks/useNewsData";

const TrendingNewsCard = (props) => {
  const { image_url, title, category_id, author } = props.news;
  const { categories } = useNewsData();

  return (
    <div className="space-y-2 border rounded-md">
      <img
        className="w-full h-36 object-cover rounded-md"
        src={image_url}
        alt={title}
      />
      <h2 className="text-lg text-[#403F3F] font-semibold">{title}</h2>
      <ul className="flex items-center justify-between">
        <li>{categories[category_id]?.name}</li>
        <li className="text-[#9F9F9F] font-medium flex items-center gap-2">
          <SlCalender />
          {author.published_date.split(" ")[0]}
        </li>
      </ul>
    </div>
  );
};

TrendingNewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default TrendingNewsCard;
