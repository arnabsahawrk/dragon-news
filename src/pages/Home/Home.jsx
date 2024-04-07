import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import LatestNews from "../../components/LatestNews/LatestNews";
import Nav from "../Shared/Nav";
import HomeNews from "../Shared/HomeNews";
import RightSide from "../Shared/RightSide";
import LeftSide from "../Shared/LeftSide";
import { useState } from "react";

const Home = () => {
  const [category, setCategory] = useState("0");

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="space-y-5">
        <Header />
        <LatestNews />
        <Nav />
        <section className="grid grid-cols-12 gap-2">
          <LeftSide setCategory={setCategory} />
          <HomeNews category={category} />
          <RightSide />
        </section>
      </section>
    </>
  );
};

export default Home;
