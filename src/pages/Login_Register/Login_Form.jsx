import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login_Form = () => {
  //   const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //   const navigate = useNavigate();
  const [displayPass, setDisplayPass] = useState(false);

  //Sign In
  const handleLogIn = (data) => {
    // const { email, password } = data;

    // signInUser(email, password).then(() => {
    // toast.success("Successfully Login.");
    //   navigate("/");
    // }).catch(() => {
    //     toast.error("Invalid User.");
    // });
    console.log(data);
    reset();
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray" className="text-[#403F3F]">
        Log In
      </Typography>
      <form
        onSubmit={handleSubmit(handleLogIn)}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-1 flex flex-col gap-3">
          {/* Email  */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 text-[#403F3F]"
            >
              Your Email
            </Typography>
            <Input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required.",
                },
              })}
              name="email"
              size="lg"
              type="email"
              placeholder="Enter Your Email"
              className=" !border-[#403F3F] focus:!border-[#C2185B]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {errors.email && (
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-red-700"
              >
                {errors.email?.message}
              </Typography>
            )}
          </div>
          {/* Password  */}
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="mb-1 text-[#403F3F]"
            >
              Password
            </Typography>
            <div className="relative">
              <Input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required.",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z]).{6,16}$/,
                    message: "Invalid password.",
                  },
                })}
                name="password"
                type={displayPass ? "text" : "password"}
                size="lg"
                placeholder="Choose A Password"
                className=" !border-[#403F3F] focus:!border-[#C2185B]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <span
                className="absolute top-3 right-2 text-xl"
                onClick={() => setDisplayPass(!displayPass)}
              >
                {displayPass ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <Typography
                variant="paragraph"
                color="blue-gray"
                className="text-red-700"
              >
                {errors.password?.message}
              </Typography>
            )}
          </div>
        </div>
        <Button
          type="submit"
          className="mt-6 bg-[#403F3F] hover:bg-[#C2185B] transition duration-1000 ease-in-out"
          fullWidth
        >
          log in
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal text-[#848093]"
        >
          Not have an account yet?{" "}
          <Link
            to="/register"
            className="font-bold text-[#403F3F] hover:text-[#C2185B]"
          >
            Register
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default Login_Form;
