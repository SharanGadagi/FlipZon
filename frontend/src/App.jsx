import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ActivationPage,
  HomePage,
  LoginPage,
  SignUpPage,
  SingleProductPage,
} from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import store from "./redux/store";
import { loadUser } from "./redux/actions/UserAction";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser);
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:token" element={<ActivationPage />} />
        <Route path="/product/:product_name" element={<SingleProductPage />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
