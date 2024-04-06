import { Link } from "react-router-dom";

const OnGoing = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-4 text-center
         text-gray-900"
    >
      <h2 className="mb-8 font-extrabold text-9xl">On Going</h2>
      <p className="text-2xl font-semibold md:text-3xl">
        Sorry, this page is not available right now.
      </p>
      <Link
        to="/"
        rel="noopener noreferrer"
        className="px-8 py-3 font-semibold rounded bg-green-500 text-white"
      >
        Home
      </Link>
    </section>
  );
};

export default OnGoing;
