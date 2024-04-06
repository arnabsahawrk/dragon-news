import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import OnGoing from "../Shared/OnGoing";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <section className="space-y-5">
        <Header />
        <Nav />
        <OnGoing />
      </section>
    </>
  );
};

export default About;
