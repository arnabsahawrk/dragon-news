import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Header from "../Shared/Header";
import Nav from "../Shared/Nav";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("Data", data);
  console.log("Error", errors);

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section className="space-y-5">
        <Header />
        <Nav />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center px-3 lg:w-1/2 mx-auto bg-gray-100 h-[400px] rounded-lg space-y-8"
        >
          <div>
            <input
              className="px-5 md:px-10 py-5 placeholder:text-slate-600 rounded-md"
              type="email"
              placeholder="Enter your email address"
              {...register("Email", {
                required: true,
                pattern: {
                  value: /^[\w-]+(\.[\w-]+)*@gmail\.com$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors?.Email?.message && (
              <p className="text-red-600">{errors.Email.message}</p>
            )}
          </div>
          <div>
            <input
              className="px-5 md:px-10 py-5 placeholder:text-slate-600 rounded-md"
              type="password"
              placeholder="Enter your password"
              {...register("Password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password should not exceed 10 characters",
                },
              })}
            />
            {errors?.Password?.message && (
              <p className="text-red-600">{errors.Password.message}</p>
            )}
          </div>

          <button
            className="bg-[#403F3F] text-white px-4 py-2 rounded-sm w-1/3"
            type="submit"
          >
            Login
          </button>
          <p className="font-medium text-[#706F6F]">
            Do not Have An Account ?{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
