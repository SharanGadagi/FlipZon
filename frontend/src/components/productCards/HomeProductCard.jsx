import { Link } from "react-router-dom";
/* eslint-disable react/prop-types */

const HomeProductCard = (props) => {
  return (
    <Link to="/product/watch">
      <div className="1300px:h-[70vh] 920px:h-[68vh] 1100px:h-[68vh]  750px:h-[52vh] 400px:h-[50vh] 300px:h-[54vh] w-full bg-white flex flex-col gap-y-2 px-2 cursor-pointer ">
        <div className="h-[80%]  px-4 py-2 bg-[#f2eeee8c]  ">
          <img src={props.img} alt="product" className="w-full h-full " />
        </div>

        <div className="h-[30%] flex flex-col  ">
          <div className="flex flex-row gap-3 items-center place-items-start h-[60%]">
            <h3 className=" 1300px:text-lg 920px:text-[16px] 1100px:text-lg  750px:text-lg 400px:text-md 300px:text-md    text-white rounded-sm py-2 px-3 bg-pink-500">
              ₹104 and under
            </h3>
            <span className="text-lg font-semibold text-red-500">
              Great Indian Festival
            </span>
          </div>

          <div className="font-semibold h-[40%]">
            Exciting Offers on Lexton String Light
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeProductCard;
{
  /* <div className="w-[800px] h-[370px]  bg-white border-2 border-red-500  flex flex-col gap-y-2">
<div className="w-full h-[75%]  flex justify-center items-center px-4 py-2 bg-[#f2eeee8c]">
  <img
    src="https://m.media-amazon.com/images/I/41S9FWgv3-L._AC_SY400_.jpg"
    alt="product"
    className="h-full w-full object-fill"
  />
</div>

<div className="w-full h-[25%] ">
  <div className="flex flex-row gap-3  items-center">
    <h3 className="text-lg text-white rounded-sm py-2 px-3  bg-red-500 ">
      ₹104 and under
    </h3>
    <span className="text-lg font-semibold text-red-500">
      Great indian festival
    </span>
  </div>

  <div className="font-semibold">
    Exciting Offers on Lexton String Light
  </div>
</div>
</div> */
}
