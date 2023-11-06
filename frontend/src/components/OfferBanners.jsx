import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { Carousel } from "antd";
import { offerBanners } from "../static/data";
import { useState } from "react";

const OfferBanners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (current) => {
    setCurrentSlide(current);
  };

  const nextSlide = () => {
    if (currentSlide < offerBanners.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };
  return (
    <>
      {offerBanners && offerBanners.length > 0 ? (
        <div className="w-[98%] mx-auto bg-white shadow-md my-6 relative">
          <Carousel
            autoplay
            beforeChange={(from, to) => handleChange(to)}
            afterChange={(current) => handleChange(current)}
          >
            {offerBanners.map((item, index) => (
              <div key={item.id || index}>
                <img src={item.image} alt="banner" />
              </div>
            ))}
          </Carousel>

          <div
            className="hidden  800px:absolute 800px:h-[50%] 800px:rounded-t-md 800px:rounded-b-md 800px:top-[25%] 800px:right-0 800px:bg-white 800px:w-[50px] 800px:flex 800px:justify-center 800px:items-center 800px:cursor-pointer"
            onClick={nextSlide}
          >
            <MdKeyboardArrowRight size={35} color="gray"></MdKeyboardArrowRight>
          </div>

          <div
            className="hidden  800px:absolute 800px:h-[50%] 800px:rounded-t-md 800px:rounded-b-md 800px:top-[25%] 800px:left-0 800px:bg-white 800px:w-[50px] 800px:flex 800px:justify-center 800px:items-center 800px:cursor-pointer"
            onClick={prevSlide}
          >
            <MdKeyboardArrowLeft size={35} color="gray"></MdKeyboardArrowLeft>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default OfferBanners;
