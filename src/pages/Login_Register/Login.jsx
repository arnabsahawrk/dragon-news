import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import Login_Form from "./Login_Form";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="space-y-5">
        <Header />
        <Nav />
        <div className="flex justify-center items-center">
          <Login_Form />
        </div>
      </section>
    </>
  );
};

export default Login;
