import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { productDetails } from "../static/data";
import BasicImages from "../components/singleProduct/BasicImages";
import { CiImageOn } from "react-icons/ci";
import { BsFillCartFill, BsCurrencyRupee } from "react-icons/bs";

import ProductDetailLoading from "../components/singleProduct/ProductDetailLoading";
import BasicProductInfo from "../components/singleProduct/BasicProductInfo";
import PriceDetail from "../components/singleProduct/PriceDetail";
import ProductServices from "../components/singleProduct/ProductServices";

CiImageOn;

const SingleProductPage = () => {
  const [selectedProductType, setSelectedProductType] = useState(
    productDetails.types[0]
  );
  const [productDetailLoading, setProductDetailLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      // Scroll to the top once content is loaded

      setLoading(false);
    }, 1000);
  }, []);

  const changeProductType = (selectedType) => {
    setProductDetailLoading(true);
    setSelectedProductType(selectedType);

    setTimeout(() => {
      setProductDetailLoading(false);
    }, 500);
  };

  return (
    <>
      {/* border-2 border-blue-400 */}
      <Navbar />
      {loading === false ? (
        <div className="w-full ">
          {productDetailLoading === false ? (
            <div className="w-full">
              <div className="w-full 750px:pt-6 300px:pt-3 mb-10 mx-auto bg-white flex  750px:flex-row 300px:flex-col  750px:gap-x-2 pb-4 ">
                {/* basic info less than 750 */}
                <div className="750px:hidden 300px:block ">
                  <BasicProductInfo></BasicProductInfo>
                </div>
                {/* left side */}
                <div className=" 300px:w-[100%] 750px:w-[40%] ">
                  {/* common images */}
                  <BasicImages
                    selectedProductType={selectedProductType}
                    productName={productDetails.name}
                  />
                  {/* buttons */}
                  <div
                    className="fixed 750px:static bottom-0  w-full 750px:mx-auto 750px:mt-2 flex flex-row 750px:py-2 750px:px-2 justify-between items-center 
                  300px:z-50 750px:w-[98%] 800px:mt-8"
                  >
                    <button className=" 750px:w-[49%] 300px:w-[50%]  750px:py-5 300px:py-4 300px:bg-white 750px:bg-[#c7c700] 750px:rounded-sm flex flex-row gap-x-2 items-center justify-center shadow-sm">
                      <span className="300px:hidden 800px:block">
                        <BsFillCartFill
                          size={25}
                          color="white"
                        ></BsFillCartFill>
                      </span>
                      <span className="750px:text-white font-semibold text-xl">
                        Add To Cart
                      </span>
                    </button>
                    <button className="750px:w-[49%] 300px:w-[50%] 750px:rounded-sm flex flex-row gap-x-1 items-center justify-center    750px:py-5 300px:py-4 bg-orange-400 shadow-sm ">
                      <span className="300px:hidden 800px:block">
                        <BsCurrencyRupee
                          size={25}
                          color="white"
                        ></BsCurrencyRupee>
                      </span>
                      <span className="text-white font-semibold text-xl">
                        Buy Now
                      </span>
                    </button>
                  </div>
                </div>
                <div className="300px:w-[100%] 750px:w-[60%] ">
                  {/* basic info more than 750 */}
                  <div className="750px:block 300px:hidden">
                    <BasicProductInfo></BasicProductInfo>
                  </div>
                  {/* product price details */}
                  <div>
                    <PriceDetail></PriceDetail>
                  </div>
                  {/* product services */}
                  <div>
                    <ProductServices
                      freeDelivery={productDetails.freeDelivery}
                      payOnDelivery={productDetails.payOnDelivery}
                      replacement={productDetails.replacement}
                      isWarranty={productDetails.isWarranty}
                      warranty={productDetails.warranty}
                      topBrand={productDetails.topBrand}
                      FlipZonDelivery={productDetails.FlipZonDelivery}
                      secureTransaction={productDetails.secureTransaction}
                      isReplacement={productDetails.isReplacement}
                    ></ProductServices>
                  </div>
                  {/* product type means colors */}
                  <div className="w-[98%] mx-auto  750px:mt-0 flex flex-col gap-y-3 750px:py-4 750px:border-b-[1px] 750px:border-[#8080805c]">
                    <div className="flex flex-row items-center gap-x-1">
                      <span className="text-lg font-semibold">Colors:</span>
                      <span>{selectedProductType.color}</span>
                    </div>

                    <div className="flex flex-row gap-x-2">
                      {productDetails.types.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-[50px] h-[50px] border-[1px] border-[#8080805c] cursor-pointer"
                            onClick={() => changeProductType(item)}
                          >
                            <img src={item.media[0].url} alt="color image" />
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* <div className="750px:w-[98%] 300px:w-[94%] mx-auto  750px:mt-1 300px:mt-10 flex 750px:flex-row 300px:flex-col 750px:gap-x-8 300px:gap-y-4 750px:py-4 ">
                    <button className="px-8 750px:py-4 300px:py-5 bg-[#c7c700] rounded-lg flex flex-row gap-x-2 items-center justify-center shadow-sm">
                      <span>
                        <BsFillCartFill
                          size={25}
                          color="white"
                        ></BsFillCartFill>
                      </span>
                      <span className="text-white font-semibold text-xl">
                        Add To Cart
                      </span>
                    </button>
                    <button className="  rounded-lg flex flex-row gap-x-2 items-center justify-center   px-11 750px:py-4 300px:py-5 bg-orange-400 shadow-sm ">
                      <span>
                        <BsCurrencyRupee
                          size={25}
                          color="white"
                        ></BsCurrencyRupee>
                      </span>
                      <span className="text-white font-semibold text-xl">
                        Buy Now
                      </span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          ) : (
            <ProductDetailLoading />
          )}
        </div>
      ) : (
        <ProductDetailLoading />
      )}
    </>
  );
};

export default SingleProductPage;
