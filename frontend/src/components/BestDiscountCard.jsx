import { Link } from "react-router-dom";
import { bestDiscountCards } from "../static/data";

const BestDiscountCard = () => {
  return (
    <>
      {bestDiscountCards && bestDiscountCards.length > 0 ? (
        <div className="w-[98%]  mx-auto flex flex-row flex-wrap justify-between gap-y-4 mb-5 mt-11">
          {bestDiscountCards &&
            bestDiscountCards.map((item, index) => {
              return (
                <div
                  className="1300px:w-[24%]  750px:w-[32%] 400px:w-[47%] 1300px:h-[70vh] 920px:h-[72vh] 750px:h-[45vh] 400px:h-[40vh]   400px:p-2   bg-white shadow-md p-5 flex flex-col gap-y-5"
                  key={item.id || index}
                >
                  <h2 className=" 1300px:text-3xl 750px:text-2xl 400px:text-[20px] text-3xl font-bold text-start h-[15%]  leading-6 text-gray-600 overflow-hidden ">
                    {item.name}
                  </h2>

                  <div className="flex flex-row flex-wrap justify-between gap-y-6 h-[80%] ">
                    {item.items.map((subItem, subIndex) => {
                      return (
                        <div
                          className="w-[45%] h-[45%]   flex flex-col gap-y-2"
                          key={subItem.id || subIndex}
                        >
                          <img
                            src={subItem.image}
                            alt="discount"
                            className="h-[70%] "
                          />
                          <div className="h-[30%] font-semibold 1300px:text-[17px] 750px:text-[16px] 400px:text-[12px]  ">
                            <span>{subItem.name} | </span>
                            <span>{subItem.discount}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <Link to={`offer/${item.link}`} className="h-[5%] ">
                    <span className="cursor-pointer text-lg text-pink-500 font-semibold">
                      See all offers
                    </span>
                  </Link>
                </div>
              );
            })}
        </div>
      ) : null}
    </>
  );
};

export default BestDiscountCard;
