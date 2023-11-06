/* eslint-disable react/prop-types */
const FeaturedBannerCard = (props) => {
  return (
    <>
      <div className="w-[98%] mt-6 mb-6 mx-auto bg-white  1300px:h-[40vh]  750px:h-[28vh] 400px:h-[24vh] 300px:h-[19vh]  flex flex-row justify-between">
        {props.featuredBannerImages &&
          props.featuredBannerImages.map((img, index) => {
            return (
              <img
                src={img.image}
                alt="banner card"
                key={index}
                className="h-full w-[32.7%] cursor-pointer"
              />
            );
          })}
      </div>
    </>
  );
};

export default FeaturedBannerCard;
