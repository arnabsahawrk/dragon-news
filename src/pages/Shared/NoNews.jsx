const NoNews = () => {
  return (
    <section
      className="flex flex-col justify-center items-center gap-4 text-center
 text-pink-700"
    >
      <img
        className="object-cover size-20 mb-6"
        src="https://i.postimg.cc/HLphkX7N/no-results.png"
        alt="No Content"
      />
      <p className="text-2xl font-semibold md:text-3xl">
        No news is available one this category right now.
      </p>
    </section>
  );
};

export default NoNews;
