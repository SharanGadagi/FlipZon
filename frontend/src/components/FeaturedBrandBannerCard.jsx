/* eslint-disable react/prop-types */
const FeaturedBrandBannerCard = (props) => {
  return (
    <>
      <div className="w-[98%] mt-6 mb-4 mx-auto bg-white  1300px:h-[50vh]  750px:h-[38vh] 400px:h-[34vh] 300px:h-[29vh]   flex flex-col gap-y-3">
        <div className="flex px-4 font-bold items-center w-full h-[20%] 1300px:text-2xl  750px:text-2xl 400px:text-xl ">
          Featured Brand
        </div>
        <div className="w-full h-[80%] flex flex-row justify-between">
          {props.featuredBrandBannerImages &&
            props.featuredBrandBannerImages.map((img, index) => {
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
      </div>
    </>
  );
};

export default FeaturedBrandBannerCard;
