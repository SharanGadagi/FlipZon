import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../styles/style";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-toastify";
import { server } from "../server/server";

const SignUp = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const config = {
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    };
    const newFormData = new FormData();
    newFormData.append("file", avatar);
    newFormData.append("name", name);
    newFormData.append("email", email);
    newFormData.append("password", password);

    axios
      .post(`${server}/user/register`, newFormData, config)
      .then((res) => {
        toast.success(res.data.message);
        console.log("res", res);
        setName("");
        setEmail(""), setPassword("");
        setAvatar();
        // navigate("/");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        console.log("error", error.response.data.message);
      });
    console.log("sign up done");
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    console.log("handleAvatarChange ~ file:", file);
    setAvatar(file);
  };

  return (
    <div className="min-h-screen bg-gray-50 justify-center flex flex-col  py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gary-900">
          Create your account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>

              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className=" appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

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

            <div>
              <label
                htmlFor="avatar"
                className="block text-sm font-medium text-gary-700"
              ></label>

              <div className="mt-2 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full overflow-hidden">
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="profile icon"
                      className="h-full w-full rounded-md object-cover"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>

                <label
                  htmlFor="file-input"
                  className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50  cursor-pointer"
                >
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    onChange={handleAvatarChange}
                    className="sr-only"
                  />
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign Up with Google
              </button>
            </div>

            <div className={`${styles.normalFlex}`}>
              <h4>Already have any account?</h4>
              <Link to="/login" className="pl-2 text-blue-600">
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
