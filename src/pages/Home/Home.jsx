import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import LatestNews from "../../components/LatestNews/LatestNews";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className="space-y-5">
        <Header />
        <LatestNews />
      </section>
    </>
  );
};

export default Home;
