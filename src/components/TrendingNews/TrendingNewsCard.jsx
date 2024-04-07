import PropTypes from "prop-types";
import { SlCalender } from "react-icons/sl";
import useNewsData from "../../hooks/useNewsData";
import { Link } from "react-router-dom";

const TrendingNewsCard = (props) => {
  const { image_url, title, category_id, author, _id } = props.news;
  const { categories } = useNewsData();

  return (
    <Link to={`/newsDetails/${_id}`}>
      <div className="space-y-2 border rounded-md p-2">
        <img
          className="w-full h-36 object-cover rounded-md"
          src={image_url}
          alt={title}
        />
        <h2 className="text-lg text-[#403F3F] font-semibold">{title}</h2>
        <ul className="flex items-center justify-between text-sm font-medium">
          <li className="text-[#403F3F]">
            {categories[category_id]?.name || "Anonymous"}
          </li>
          <li className="text-[#9F9F9F] flex items-center gap-2">
            <SlCalender />
            {author?.published_date?.split(" ")[0] || "Null"}
          </li>
        </ul>
      </div>
    </Link>
  );
};

TrendingNewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default TrendingNewsCard;
