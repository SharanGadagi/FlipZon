import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */

const ProductCard2 = (props) => {
  return (
    <>
      <Link to="/product/watch">
        <div className="1300px:h-[70vh] 920px:h-[75vh] 1100px:h-[63vh] 800px:h-[50vh] 750px:h-[57vh] 400px:h-[55vh] 300px:h-[55vh] w-full bg-white  px-2 cursor-pointer  ">
          <div className="h-full  flex flex-col gap-y-2 border-[1px] border-[#c5bfbf] rounded-sm shadow-md  p-2">
            <div className="h-[70%]  w-full ">
              <img src={props.img} alt="product" className="w-full h-full" />
            </div>
            <div className="h-[30%]  flex flex-col justify-between">
              <div className="flex flex-row gap-x-2 items-center">
                <span className="750px:text-xl 400px:text-lg p-1 bg-red-500 text-white text-md font-semibold">
                  50% off
                </span>
                <span className=" 750px:text-xl 400px:text-lg text-md font-semibold text-red-500 ">
                  Great indian festival
                </span>
              </div>

              <div className="flex flex-row gap-x-3 items-center">
                <div className="flex flex-row gap-x-[2px] items-center">
                  <span className="font-bold text-lg self-start">₹</span>
                  <span className="750px:text-2xl 300px:text-2xl">150</span>
                </div>

                <span>
                  M.R.P : <del>500</del>
                </span>
              </div>
              <div className=" 1100px:text-[18px]  750px:text-[18px] 300px:text-[16px] overflow-hidden">
                Slovic Yellow Resistance Bands for Workout for Men....
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard2;
