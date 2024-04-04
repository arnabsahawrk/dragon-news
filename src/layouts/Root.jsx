import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Helmet>
        <title>Dragon News</title>
      </Helmet>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
