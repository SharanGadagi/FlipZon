/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ModalBasicImages = ({
  isModalComponent,
  selectedProductType,
  productName,
}) => {
  const [selectedMedia, setSelectedMedia] = useState(
    selectedProductType.media[0]
  );
  useEffect(() => {
    console.log("child", selectedProductType);
    console.log("isModalComponent", isModalComponent);
    console.log("productName", productName);
  });

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
  };
  return (
    <>
      <div className="w-full 300px:h-[90vh] 750px:h-[55vh] flex  300px:flex-col overflow-auto ">
        {/* this for more than 750px */}
        <div className="w-full h-full 300px:hidden 750px:flex 750px:gap-x-6 overflow-hidden 750px:mt-4">
          <div className="750px:w-[30%] h-full border-[1px] border-blue-200 overflow-hidden">
            <div className="py-2 bg-blue-200  text-center text-lg font-semibold">
              All media {selectedProductType.media.length}
            </div>
            {/* 1000px:w-[60px] 1000px:h-[60px]  800px:w-[40px] 800px:h-[40px] */}
            <div className="w-full p-4 overflow-auto flex flex-row flex-wrap gap-2">
              {selectedProductType &&
                selectedProductType.media.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" 750px:w-[45%] 750px:h-[70px] 800px:w-[30%] border-[1px] border-gray-300 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer"
                      onClick={() => handleMediaClick(item)}
                    >
                      {item.type === "image" && (
                        <img
                          src={item.url}
                          alt={`Image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      )}

                      {item.type === "video" && (
                        <video
                          src={item.url}
                          autoPlay
                          loop
                          muted
                          alt="banner"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="750px:w-[75%] ">
            {selectedMedia &&
              (selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.url}
                  alt="Large Image"
                  className="w-full h-full object-contain rounded-md"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  autoPlay
                  loop
                  muted
                  alt="banner"
                  className="w-full h-full object-contain rounded-md"
                />
              ))}
          </div>
        </div>

        {/* this for more than 750px */}
        <div className="w-full h-full 750px:hidden 300px:flex 300px:m-0 300px:p-0 300px:flex-col overflow-auto 300px:mt-4 300px:justify-between">
          <div className=" 300px:w-full 300px:h-[85%] ">
            {selectedMedia &&
              (selectedMedia.type === "image" ? (
                <img
                  src={selectedMedia.url}
                  alt="Large Image"
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  autoPlay
                  loop
                  muted
                  alt="banner"
                  className="w-full h-full object-contain rounded-md"
                />
              ))}
          </div>
          <div className="w-full  mx-auto 300px:h-[50px]  flex flex-row gap-x-2 overflow-x-auto">
            {selectedProductType &&
              selectedProductType.media.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="300px:w-[100px] 300px:h-full border-[1px] border-gray-300 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer"
                    onClick={() => handleMediaClick(item)}
                  >
                    {item.type === "image" && (
                      <img
                        src={item.url}
                        alt={`Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {item.type === "video" && (
                      <video
                        src={item.url}
                        autoPlay
                        loop
                        muted
                        alt="banner"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBasicImages;
