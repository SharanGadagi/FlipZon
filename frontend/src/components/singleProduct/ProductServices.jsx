/* eslint-disable react/prop-types */
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiTakeMyMoney, GiTrophyCup } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { PiTruckFill } from "react-icons/pi";
import { SiSpringsecurity } from "react-icons/si";
import { MdOutlineAssignmentReturn } from "react-icons/md";

import { Popover } from "antd";

const ProductServices = (props) => {
  const payOnDeliveryText = (
    <div className="flex flex-row gap-10 text-xl py-1 px-2 border-b-[1px] border-gray-400">
      <h3>PayOnDelivery</h3>
    </div>
  );

  const payOnDeliveryContent = (
    <div className=" flex flex-col gap-y-2 w-[400px]">
      <div className="flex flex-row gap-2 py-1 px-2 font-semibold text-gray-600 items-center justify-star5 ">
        <span className="text-xl">
          Pay on Delivery (Cash/Card) payment method includes Cash on Delivery
          (COD) as well as Debit card / Credit card / Net banking payments at
          your doorstep.
        </span>
      </div>
    </div>
  );

  const freeDeliveryText = (
    <div className="flex flex-row gap-10 text-xl py-1 px-2 border-b-[1px] border-gray-400">
      <h3>Free Delivery</h3>
    </div>
  );

  const freeDeliveryContent = (
    <div className=" flex flex-col gap-y-2 ">
      <div className="flex flex-row gap-2 py-1 px-2 font-semibold text-gray-600 items-center justify-star5 ">
        <span className="text-xl">
          The product is eligible for Free delivery
        </span>
      </div>
    </div>
  );

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 2,
    },
    desktop1: {
      breakpoint: { max: 3000, min: 1290 },
      items: 6,
      slidesToSlide: 2,
    },
    desktop2: {
      breakpoint: { max: 1290, min: 1200 },
      items: 6,
      slidesToSlide: 2,
    },
    desktop3: {
      breakpoint: { max: 1200, min: 1000 },
      items: 5,
      slidesToSlide: 1,
    },

    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 4,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <div className="py-4 750px:border-b-[1px] 750px:border-[#8080805c]">
        <Carousel responsive={responsive}>
          {props.freeDelivery === true && (
            // <Popover
            //   content={freeDeliveryContent}
            //   title={freeDeliveryText}
            //   placement="bottom"
            //   trigger="click"
            // >
            <div className="w-[120px] h-[100px] flex flex-col  items-center justify-center cursor-pointer  gap-y-2">
              <div className="text-lg bg-gray-200 rounded-[50%] p-1 h-[45%]">
                <CiDeliveryTruck size={36} color="orange" />
              </div>
              <div className="text-[14px] font-semibold text-center text-[#007185] h-[30%]">
                Free Delivery
              </div>
            </div>
            // </Popover>
          )}

          {props.payOnDelivery === true && (
            // <Popover
            //   content={payOnDeliveryContent}
            //   title={payOnDeliveryText}
            //   placement="bottom"
            //   trigger="click"
            // >
            <div className="cursor-pointer w-[120px] h-[100px]  flex flex-col gap-y-1 items-center justify-center">
              <div className="text-lg bg-gray-200 rounded-[50%] p-1 h-[45%]">
                <GiTakeMyMoney size={36} color="orange"></GiTakeMyMoney>
              </div>
              <div className="text-[14px] font-semibold text-center text-[#007185] h-[30%]">
                Pay On Delivery
              </div>
            </div>
            // </Popover>
          )}

          {props.isReplacement === true && (
            <div className="cursor-pointer w-[120px] h-[100px]  flex flex-col gap-y-1 items-center justify-center">
              <div className="text-lg bg-gray-200 rounded-[50%] p-1 h-[45%]">
                <MdOutlineAssignmentReturn
                  size={36}
                  color="orange"
                ></MdOutlineAssignmentReturn>
              </div>
              <div className="text-[14px] font-semibold text-center text-[#007185] h-[30%]">
                {props.replacement} days Returnable
              </div>
            </div>
          )}

          {props.isWarranty === true && (
            <div className="cursor-pointer w-[120px] h-[100px]  flex flex-col gap-y-1 items-center justify-center">
              <div className="text-lg bg-gray-200 rounded-[50%] p-1 h-[45%]">
                <FaRegThumbsUp size={34} color="orange"></FaRegThumbsUp>
              </div>
              <div className="text-center text-[14px] font-semibold text-[#007185] h-[30%]">
                Warranty Policy
              </div>
            </div>
          )}

          {props.topBrand === true && (
            <div className="cursor-pointer w-[120px] h-[100px]  flex flex-col gap-y-1 items-center justify-center">
              <div className="text-lg bg-gray-200 rounded-[50%] p-1 h-[45%]">
                <GiTrophyCup size={36} color="orange"></GiTrophyCup>
              </div>
              <div className="text-center text-[14px] font-semibold text-[#007185] h-[30%]">
                Top Brand
              </div>
            </div>
          )}
          {props.FlipZonDelivery === true && (
            <div className="cursor-pointer w-[120px] h-[100px]  flex flex-col gap-y-1 items-center justify-center">
              <div className="text-lg bg-gray-200 rounded-[50%] p-1 h-[45%]">
                <PiTruckFill size={36} color="orange"></PiTruckFill>
              </div>
              <div className="text-center text-[14px] font-semibold text-[#007185] h-[30%]">
                FLipZon Delivery
              </div>
            </div>
          )}
          {props.secureTransaction === true && (
            <div className="cursor-pointer w-[120px] h-[100px]  flex flex-col gap-y-1 items-center justify-center">
              <div className="text-lg bg-gray-200 rounded-[50%] p-1 h-[45%]">
                <SiSpringsecurity size={36} color="orange"></SiSpringsecurity>
              </div>
              <div className="text-center text-[14px] font-semibold text-[#007185] h-[50%]">
                Security
              </div>
            </div>
          )}
        </Carousel>
      </div>
    </>
  );
};

export default ProductServices;
