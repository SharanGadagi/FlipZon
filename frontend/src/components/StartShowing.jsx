/* eslint-disable react/prop-types */
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
const StartShowing = ({ star }) => {
  const ratingStar = Array.from({ length: 5 }, (item, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="icon text-[1rem] text-orange-500" />
        ) : star >= number ? (
          <FaStarHalfAlt className="icon text-[1rem] text-orange-500" />
        ) : (
          <AiOutlineStar className="icon text-[1rem] text-orange-500" />
        )}
      </span>
    );
  });
  return (
    <div className="flex gap-x-[2px] justify-start items-center">
      {ratingStar}
    </div>
  );
};

export default StartShowing;
