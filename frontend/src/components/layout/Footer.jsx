import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
import { Radio, Space, Popover } from "antd";
import { useState } from "react";

const Footer = () => {
  const [language, setLanguage] = useState("English");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setLanguage(e.target.value);
  };
  const languageContent = (
    <div className="bg-white text-black font-semibold text-lg px-6 ">
      <div className="bg-white text-black font-semibold text-lg">
        <Radio.Group onChange={onChange} value={language} size="large">
          <Space direction="vertical">
            <Radio value={"English"}>English - EN</Radio>
            <Radio value={"ಕನ್ನಡ"}>ಕನ್ನಡ - KN</Radio>
            <Radio value={"தமிழ்"}>தமிழ் - TA</Radio>
            <Radio value={"తెలుగు"}>తెలుగు - TE</Radio>
            <Radio value={"मराठी"}>मराठी - MR</Radio>
            <Radio value={"ગુજરાતી"}>ગુજરાતી - GU</Radio>
            <Radio value={"भोजपुरी"}>भोजपुरी - BO</Radio>
            <Radio value={"ਪੰਜਾਬੀ"}>ਪੰਜਾਬੀ - PU</Radio>
            <Radio value={"മലയാളം"}>മലയാളം - MA</Radio>
          </Space>
        </Radio.Group>
      </div>
    </div>
  );

  const languageTitle = (
    <div className="pt-2 pb-2 flex items-center flex-row gap-4  border-b-[1px] border-gray-500">
      <img
        src="data:image/png;base64,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"
        alt="uwiuo"
        className="w-[40px] h-[30px] "
      />
      <span className="font-semibold">You are Shopping on FlizZon.in</span>
    </div>
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="w-full mt-4">
        <div
          className="h-[10vh] bg-gray-700 text-white font-bold text-lg cursor-pointer text-center flex items-center justify-center "
          onClick={scrollToTop}
        >
          Back to top
        </div>

        <div className="bg-gray-800 1100px:px-52 px-10 py-10  flex flex-row justify-between flex-wrap gap-x-2 gap-y-6 border-b-[1px] border-gray-400">
          <div className="flex flex-col gap-y-3">
            <h3 className="text-white text-lg font-bold">Get to Known us</h3>
            <ul className="text-[#e3e3e3] flex flex-col gap-y-2 font-semibold">
              <li className="hover:underline">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="hover:underline">
                <Link to="/career">Career</Link>
              </li>
              <li className="hover:underline">
                <Link to="/press-releases">Press Releases</Link>
              </li>
              <li className="hover:underline">
                <Link to="/our-science">FlipZon Science</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-white text-lg font-bold">Connect with Us</h3>
            <ul className="text-[#e3e3e3] flex flex-col gap-y-2 font-semibold">
              <li className="hover:underline">
                <Link to="https://www.facebook.com/profile.php?id=100006538277747">
                  Facebook
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D">
                  Twitter
                </Link>
              </li>
              <li className="hover:underline">
                <Link to="https://www.instagram.com/sharangadagi/">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-white text-lg font-bold">Make Money with Us</h3>
            <ul className="text-[#e3e3e3] flex flex-col gap-y-2 font-semibold">
              <li className="hover:underline">
                <Link to="/sell-FlipZon">Sell on FlipZon</Link>
              </li>
              <li className="hover:underline">
                <Link to="/sell-FlipZon">Sell under FlipZon Accelerator</Link>
              </li>

              <li className="hover:underline">
                <Link to="/sell-FlipZon">Protect and Build Your Brand</Link>
              </li>

              <li className="hover:underline">
                <Link to="/sell-FlipZon">FlipZon Global Selling</Link>
              </li>
              <li className="hover:underline">
                <Link to="/sell-FlipZon">Become an Affiliate</Link>
              </li>
              <li className="hover:underline">
                <Link to="/sell-FlipZon">Fulfilment by FlipZon</Link>
              </li>
              <li className="hover:underline">
                <Link to="/sell-FlipZon">Advertise Your Products</Link>
              </li>
              <li className="hover:underline">
                <Link to="/sell-FlipZon">FlipZon Pay on Merchants</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-white text-lg font-bold">Let Us Help You</h3>
            <ul className="text-[#e3e3e3] flex flex-col gap-y-2 font-semibold">
              <li className="hover:underline">
                <Link to="/covid-flipzon"> COVID-19 and FlipZon</Link>
              </li>
              <li className="hover:underline">
                <Link to="/profile">Your Account</Link>
              </li>
              <li className="hover:underline">
                <Link to="/return-center">Returns Centre</Link>
              </li>
              <li className="hover:underline">
                <Link to="/purchase-protection">100% Purchase Protection</Link>
              </li>

              <li className="hover:underline">
                <Link to="/">FlipZon App Download</Link>
              </li>

              <li className="hover:underline">
                <Link to="/help">Help</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* border-2 border-green-300 */}
        <div className="bg-gray-800 py-10    flex flex-col gap-y-4">
          <div className="flex flex-row justify-center gap-x-10">
            <Link to="/">
              <h1 className=" px-3 py-2 text-3xl text-white font-bold">
                FʅιρZσɳ
              </h1>
            </Link>
            <Popover
              content={languageContent}
              placement="bottomRight"
              title={languageTitle}
            >
              <div className="text-white flex flex-row gap-4 items-center rounded-md px-5 cursor-pointer border-[1px] border-white">
                <TfiWorld></TfiWorld>
                {language}
              </div>
            </Popover>
          </div>

          <div className="flex-wrap flex-row gap-4 py-6 text-gray-400 flex justify-center items-center">
            <span className="cursor-pointer hover:text-white ">India</span>
            <span className="cursor-pointer hover:text-white ">Australia</span>
            <span className="cursor-pointer hover:text-white ">Brazil</span>
            <span className="cursor-pointer hover:text-white ">Canada</span>
            <span className="cursor-pointer hover:text-white ">China</span>
            <span className="cursor-pointer hover:text-white ">France</span>
            <span className="cursor-pointer hover:text-white ">Germany</span>
            <span className="cursor-pointer hover:text-white ">Italy</span>
            <span className="cursor-pointer hover:text-white ">Japan</span>
            <span className="cursor-pointer hover:text-white ">Mexico</span>
            <span className="cursor-pointer hover:text-white ">
              Netherlands
            </span>
            <span className="cursor-pointer hover:text-white ">Poland</span>
            <span className="cursor-pointer hover:text-white ">Singapore</span>
            <span className="cursor-pointer hover:text-white ">
              United Arab Emirates
            </span>
            <span className="cursor-pointer hover:text-white ">Turkey</span>

            <span className="cursor-pointer hover:text-white ">Spain</span>
          </div>
        </div>

        <div className="bg-black 1100px:px-52 px-10 py-10 flex flex-col gap-y-8">
          <div className="flex flex-row justify-between flex-wrap gap-x-2 gap-y-4">
            <div className="flex flex-col gap-y-2">
              <h3 className=" text-[#a8a7a7] font-bold">AbeBooks</h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline">
                  <Link to="/">Books,arts & collectibles</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <h3 className=" text-[#a8a7a7] font-bold">
                FlipZon Web Services
              </h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline">
                  <Link to="/">Scalable Cloud Computing Services</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <h3 className=" text-[#a8a7a7] font-bold">Audible</h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline">
                  <Link to="/">Download Audio Books</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2">
              <h3 className=" text-[#a8a7a7] font-bold"> IMDb</h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline">
                  <Link to="/">Movies, TV & Celebrities</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row justify-between flex-wrap  gap-y-4">
            <div className="flex flex-col gap-y-2  ">
              <h3 className=" text-[#a8a7a7] font-bold">Shopbop</h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline">
                  <Link to="/">Designer Fashion Brands</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2 ">
              <h3 className=" text-[#a8a7a7] font-bold">Amazon Business</h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline">
                  <Link to="/">Everything For Your Business</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2 ">
              <h3 className=" text-[#a8a7a7] font-bold">Prime Now</h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline">
                  <Link to="/">2-Hour Delivery on Everyday Items</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-2 ">
              <h3 className=" text-[#a8a7a7] font-bold"> Amazon Prime Music</h3>
              <ul className="text-gray-500 flex flex-col gap-y-2 font-semibold">
                <li className="hover:underline ">
                  <Link to="/">
                    100 million songs, ad-free Over 15 million podcast episodes
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-white flex flex-col justify-center items-center gap-y-2 font-semibold text-center pt-6">
            <div className="flex flex-row gap-3 ">
              <span className="cursor-pointer hover:underline">
                Condition of Use & Sale
              </span>
              <span className="cursor-pointer hover:underline">
                Privacy Notice
              </span>
              <span className="cursor-pointer hover:underline">
                Interest-Based Ads
              </span>
            </div>
            <div>© 1998-2023, FlipZon.com,inc. or its affilities</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
