import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  return (
    <>
      <div
        className={`  bg-[#3030ee9e] z-20 w-full shadow-md hidden  py-2 px-4 800px:z-0   800px:flex 800px:flex-row 800px:justify-between 800px:items-center 800px:h-[60px]  `}
      >
        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Electronics</h4>
          <MdKeyboardArrowDown
            size={20}
            className="self-end group-hover:-rotate-180 transition-all ease-in-out duration-300"
          ></MdKeyboardArrowDown>
        </div>

        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">TVs & Appliance</h4>
          <MdKeyboardArrowDown
            size={20}
            className="self-end group-hover:-rotate-180 transition-all ease-in-out duration-300"
          ></MdKeyboardArrowDown>
        </div>

        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Men</h4>
          <MdKeyboardArrowDown
            size={20}
            className="self-end group-hover:-rotate-180 transition-all ease-in-out duration-300"
          ></MdKeyboardArrowDown>
        </div>

        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Women</h4>
          <MdKeyboardArrowDown
            size={20}
            className="self-end group-hover:-rotate-180 transition-all ease-in-out duration-300"
          ></MdKeyboardArrowDown>
        </div>

        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Baby & Kids</h4>
          <MdKeyboardArrowDown
            size={20}
            className="self-end group-hover:-rotate-180 transition-all ease-in-out duration-300"
          ></MdKeyboardArrowDown>
        </div>

        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Home & Furniture</h4>
          <MdKeyboardArrowDown
            size={20}
            className="self-end group-hover:-rotate-180 transition-all ease-in-out duration-300"
          ></MdKeyboardArrowDown>
        </div>

        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Sports, Books & More</h4>
          <MdKeyboardArrowDown
            size={20}
            className="self-end group-hover:-rotate-180 transition-all ease-in-out duration-300"
          ></MdKeyboardArrowDown>
        </div>
        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Flights</h4>
        </div>

        <div className="text-white  flex flex-row gap-1 items-center cursor-pointer hover:text-gray-200 group justify-center">
          <h4 className="font-semibold text-xl">Offer Zone</h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
