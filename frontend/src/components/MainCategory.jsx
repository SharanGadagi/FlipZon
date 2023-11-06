import { Link } from "react-router-dom";
import styles from "../styles/style";
import { mainCategory } from "../static/data";

styles;
const MainCategory = () => {
  return (
    <>
      {mainCategory && mainCategory.length > 0 ? (
        <div
          className="w-[98%] mx-auto bg-white px-4 py-2 shadow-md my-3 scroll-p-0 overflow-x-auto 
        horizontal-scroll-width"
        >
          <div className="flex flex-row gap-5">
            {/* Repeat this section for each item */}

            {mainCategory &&
              mainCategory.map((item, index) => {
                return (
                  <Link to={`product/${item.link}`} key={item.id || index}>
                    <div className="w-[135px] flex-shrink-0  py-2 flex flex-col gap-2 items-center text-center cursor-pointer">
                      <img src={item.image} alt="category" />
                      <h2 className="text-lg font-semibold text-center px-1">
                        {item.name}
                      </h2>
                    </div>
                  </Link>
                );
              })}

            {/* Repeat this section for each item */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MainCategory;
