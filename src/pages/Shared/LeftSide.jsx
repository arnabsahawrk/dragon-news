import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import useNewsData from "../../hooks/useNewsData";
import TrendingNews from "../../components/TrendingNews/TrendingNews";

const LeftSide = ({ setCategory }) => {
  const { categories } = useNewsData();
  return (
    <aside className="col-span-12 order-2 md:order-1 md:col-span-3 lg:col-span-2 ">
      <h2 className="text-xl font-semibold text-[#403F3F]">All Category</h2>
      <ul className="text-lg text-[#9F9F9F] font-medium">
        {categories.map((category) => (
          <li className="py-4 px-8" key={category.id}>
            <NavLink
              onClick={() => {
                setCategory(category.id);
              }}
              to={`/:${category?.name}`}
              className={({ isActive }) =>
                `${isActive ? "text-[#403F3F] font-semibold" : ""}`
              }
            >
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <section className="space-y-3">
        <h2 className="text-lg text-[#403F3F] font-semibold">Trending News</h2>
        <TrendingNews />
      </section>
    </aside>
  );
};

LeftSide.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default LeftSide;
