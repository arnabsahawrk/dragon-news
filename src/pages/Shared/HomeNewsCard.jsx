import PropTypes from "prop-types";
import { BsShare } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HomeNewsCard = (props) => {
  const { _id, title, rating, total_view, author, image_url, details } =
    props.news;

  return (
    <div>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-[#F3F3F3] p-5 rounded-md">
          <ul className="grid grid-cols-4">
            <li className="row-span-2 mr-2">
              <img
                className="size-10 object-cover rounded-full"
                src={author.img}
                alt={author.name}
              />
            </li>
            <li className="text-[#403F3F] font-semibold col-span-3">
              {author?.name?.toUpperCase() || "Anonymous"}
            </li>
            <li className="text-[#706F6F] text-sm col-span-3">
              {author?.published_date?.split(" ")[0] || "Null"}
            </li>
          </ul>
          <ul className="flex gap-3">
            <li>
              <IoBookmarkOutline />
            </li>
            <li>
              <BsShare />
            </li>
          </ul>
        </div>
        <h2 className="text-[#403F3F] text-xl font-bold">{title}</h2>
        <img className="w-full object-cover" src={image_url} alt={title} />
        <p className="text-[#706F6F]">
          {details?.slice(0, 400)}{" "}
          <Link
            to={`newsDetails/${_id}`}
            className="text-[#FF8C47] font-semibold"
          >
            Read More
          </Link>
        </p>
        <ul className="flex items-center justify-between text-[#706F6F] font-medium">
          <li>Rating: {rating?.number}</li>
          <li className="flex items-center gap-2">
            <FaEye /> {total_view}
          </li>
        </ul>
      </div>
    </div>
  );
};

HomeNewsCard.propTypes = {
  news: PropTypes.object.isRequired,
};

export default HomeNewsCard;
