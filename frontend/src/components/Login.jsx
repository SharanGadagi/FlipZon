import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../server/server";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: email, // Ensure data is an object, not a string
      password: password, // Ensure data is an object, not a string
    };
    console.log("handleSubmit ~ data:", data);

    axios
      .post(`${server}/user/login`, data, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success) {
          toast.success("Login Success");
          navigate("/");
        } else {
          toast.error("Login Failed");
        }
      })
      .catch((error) => {
        toast.error(error.response.data.message || "Login Failed");
        console.error("error", error);
      });
  };
  return (
    <div className="min-h-screen bg-gray-50 justify-center flex flex-col  py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gary-900">
          Login to your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>

              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>

              <div className="mt-1 relative">
                <input
                  value={password}
                  name="password"
                  autoComplete="current-password"
                  required
                  type={passwordVisible ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />

                {passwordVisible ? (
                  <AiOutlineEye
                    className="absolute top-2 right-2 cursor-pointer"
                    size={25}
                    onClick={() => setPasswordVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute top-2 right-2 cursor-pointer"
                    size={25}
                    onClick={() => setPasswordVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={`${styles.normalFlex} justify-between`}>
              <div className={`${styles.normalFlex}`}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm  text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Login with Google
              </button>
            </div>

            <div className={`${styles.normalFlex}`}>
              <h4>Not have any account?</h4>
              <Link to="/sign-up" className="pl-2 text-blue-600">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
