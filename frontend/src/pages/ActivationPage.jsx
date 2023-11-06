import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../server/server";

const ActivationPage = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const activation_token = token.replace(/&/g, ".");
  const [error, setError] = useState(false);

  useEffect(() => {
    const activateUser = async () => {
      try {
        const res = await axios.post(`${server}/user/activation`, {
          activation_token,
        });
        console.log("Activation response:", res.data.message);
        // Handle the activation response here (e.g., show a success message)
      } catch (error) {
        console.error("Activation error:", error);
        setError(true);
      }
    };

    if (token) {
      activateUser();
    }
  }, [activation_token, token]);

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Error activating your account</p>
      ) : (
        <div>
          <p>Activating your account...</p>
          <div>
            <button
              className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 mt-4 hover:bg-blue-700"
              onClick={navigateToLogin}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivationPage;
