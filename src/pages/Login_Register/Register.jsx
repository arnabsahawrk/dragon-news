import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import Register_Form from "./Register_Form";

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <section className="space-y-5">
        <Header />
        <Nav />
        <div className="flex justify-center items-center">
          <Register_Form />
        </div>
      </section>
    </>
  );
};

export default Register;
