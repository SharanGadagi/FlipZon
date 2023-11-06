import { useEffect, useRef, useState } from "react";
import styles from "../../styles/style";
import { Link } from "react-router-dom";
import { BsSearch, BsCart } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiMore2Line } from "react-icons/ri";
import { Popover } from "antd";
import { productData } from "../../static/data";

const text = (
  <div className="flex flex-row gap-10 text-xl py-1 px-2 border-b-[1px] border-gray-400">
    <h3>New Customer?</h3>

    <Link to="/sign-up">
      <span className="text-blue-600">Sign Up</span>
    </Link>
  </div>
);

const content = (
  <div className=" flex flex-col gap-y-2">
    <Link to="/">
      <div className="flex flex-row gap-2 py-1 px-2 font-semibold text-gray-600 items-center justify-star5 ">
        <GoPerson size={20} fontWeight={600}></GoPerson>
        <span className="text-xl">Profile</span>
      </div>
    </Link>
    <Link to="/">
      <div className="flex flex-row gap-2 py-1 px-2 font-semibold text-gray-600 items-center justify-star5 ">
        <GoPerson size={20} fontWeight={600}></GoPerson>
        <span className="text-xl">Settings</span>
      </div>
    </Link>
  </div>
);

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [active, setActive] = useState(false);

  const searchDataContainerRef = useRef(null);

  const productCLick = () => {
    setSearchData([]);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setSearchData([]);
    } else {
      const filterData = productData.filter((item) => {
        const itemName = item.name.toLowerCase();
        return itemName.includes(searchTerm.toLowerCase());
      });
      setSearchData(filterData);
    }

    //fixed header
    console.log("window.addEventListener ~ window.screenY :", window.screenY);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        // console.log("act1111111", active);
        setActive(true);
      } else {
        // console.log("ac2222222222", active);

        setActive(false);
      }
    });
  }, [searchTerm]);

  // Handle clicks outside of the search data container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchDataContainerRef.current &&
        !searchDataContainerRef.current.contains(event.target)
      ) {
        setSearchData([]);
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove event listener when the component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputClick = () => {
    if (searchData.length > 0) {
      setSearchData(searchData);
    }
  };

  return (
    <>
      {/* <div
        className={`${
          active === true
            ? "fixed left-0 top-0 z-10 transition-all ease-in-out duration-300"
            : ""
        }    ${
          styles.section
        } z-[2]   w-full mx-auto border-[1px] border-white bg-white`}
      ></div> */}

      <div
        className={`    ${styles.section} z-[2]   w-full mx-auto border-[1px] border-white bg-white sticky top-0 left-0`}
      >
        <div className="hidden 800px:h-[60px] 800px:w-11/12 800px:mx-auto 800px:my-[20px] 800px:flex items-center justify-between ">
          <div>
            <Link to="/">
              {/* <img
                src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg"
                alt="logo"
              /> */}
              <h1 className=" px-3 py-2 text-3xl text-blue-500 font-bold">
                FʅιρZσɳ
              </h1>
            </Link>
          </div>

          {/* search */}
          <div className="w-[50%] relative rounded-md ">
            <BsSearch
              className="absolute left-2 top-2 cursor-pointer"
              size={30}
              color="gray"
            ></BsSearch>
            <input
              type="text"
              placeholder="Search Product"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[50px] w-full rounded-md border-[2px] pl-14 placeholder:text-xl bg-[#cdeff68f]  placeholder:text-gray-500 text-xl"
              onClick={handleInputClick}
            />

            {searchData && searchData.length !== 0 ? (
              <div
                ref={searchDataContainerRef}
                className="absolute min-h-[28vh] bg-slate-50 top-[42px] py-[1px] w-full rounded-b-lg z-10 shadow  "
              >
                {searchData &&
                  searchData.map((item, index) => {
                    const replaceName = item.name;
                    const itemName = replaceName.replace(/\s/g, "_");
                    return (
                      <Link to={`product/${itemName}`} key={index}>
                        <div
                          className="w-full  mb-2 flex items-start px-2 py-3  hover:hover:bg-[#cdeff68f]"
                          onClick={productCLick}
                        >
                          <img
                            className="w-[50px] h-[50px] mr-2 object-contain "
                            src={`${item?.image_Url[0].url}|| https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-search-vector-icon-png-image_696422.jpg`}
                            alt="item"
                          />
                          <h1 className="text-lg text-gray-500">
                            {item?.name}
                          </h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          {/* //sing in */}

          <Link to="/login">
            <Popover content={content} title={text} placement="bottomRight">
              <div className="relative  group ">
                <button className="bg-[#f0f0f0] group text-[#666666] transition-all ease-in-out duration-300  hover:bg-[#0251c2e3] px-3 py-[10px] rounded-md hover:text-white flex flex-row items-center justify-between gap-x-1">
                  <GoPerson size={30}></GoPerson>
                  <span className="text-2xl hidden 920px:block">Sign In</span>
                  <MdKeyboardArrowDown
                    size={25}
                    className=" group-hover:-rotate-180 transition-all ease-in-out duration-300"
                  ></MdKeyboardArrowDown>
                </button>
              </div>
            </Popover>
          </Link>

          {/* cart */}
          <div className="flex flex-row justify-between  items-center gap-x-1 cursor-pointer relative text-[#666666]">
            <BsCart size={32}></BsCart>
            <span className="text-2xl">Cart</span>
            <span className="absolute top-[3px] left-2 text-[#ff4c05] font-bold">
              10
            </span>
          </div>

          {/* more */}
          <div className="border-[1px] border-white   hover:bg-[#e4e4e499] p-[10px] hover:rounded-md hover:border-[1px] hover:border-gray-400  cursor-pointer hover:shadow  transition-all ease-linear duration-300">
            <RiMore2Line size={26}></RiMore2Line>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
