/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Modal } from "antd";
import ModalBasicImages from "./ModalBasicImages";

const BasicImages = ({ selectedProductType, productName }) => {
  const [selectedMedia, setSelectedMedia] = useState(
    selectedProductType.media[0]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalComponent, setIsModalComponent] = useState(false);

  useEffect(() => {
    setSelectedMedia(selectedProductType.media[0]); // Reset to the first item when
  }, [selectedProductType]);
  const handleMediaHover = (media) => {
    setSelectedMedia(media);
  };

  const responsive = {
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  const showModal = () => {
    setIsModalOpen(true);
    setIsModalComponent(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsModalComponent(false);
  };

  return (
    <>
      {/* border-2 border-yellow-600 */}
      <div className="w-full flex 750px:flex-row 300px:flex-col  300px:py-0 750px:py-0  300px:mx-0 750px:px-1  1000px:px-3  gap-4  ">
        {/* this for more than 750px */}
        <div className="750px:w-[15%]  750px:flex 750px:flex-col 750px:gap-y-2 750px:pt-1 300px:hidden ">
          {selectedProductType.media.map((item, index) => {
            return (
              <div
                className="1000px:w-[60px] 1000px:h-[60px]  800px:w-[40px] 800px:h-[40px] 750px:w-[40px] 750px:h-[40px] border-[1px] border-gray-300 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer"
                key={index}
                onMouseEnter={() => handleMediaHover(item)}
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
        <div
          className="w-[85%]    1000px:h-[400px]   800px:h-[300px]  750px:h-[270px] 300px:hidden 750px:block  rounded-md pt-4 cursor-pointer"
          onClick={showModal}
        >
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
                className="w-full h-full object-cover rounded-md"
              />
            ))}
          <div className="text-gray-400 text-center text-[16px] mt-8 font-semibold">
            Click to open expanded view
          </div>
        </div>

        {/* this for less than 750px */}
        <div className="750px:hidden 300px:w-[100%] 300px:mx-auto  ">
          <Carousel
            responsive={responsive}
            showDots={true}
            keyBoardControl={true}
          >
            {selectedProductType.media.map((item, index) => {
              return (
                <div
                  className="w-full 300px:h-[370px] 750px:border-[1px] 750px:border-gray-300 750px:rounded-md 300px:border-[0px] 750px:hover:border-blue-300 750px:hover:border-2 cursor-pointer 300px:mt-2 750px:mt-0"
                  key={index}
                  onMouseEnter={() => handleMediaHover(item)}
                  onClick={showModal}
                >
                  {item.type === "image" && (
                    <img
                      src={item.url}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover 750px:rounded-md"
                    />
                  )}

                  {item.type === "video" && (
                    <video
                      src={item.url}
                      autoPlay
                      loop
                      muted
                      alt="banner"
                      className="w-full h-full object-cover 750px:rounded-md"
                    />
                  )}
                </div>
              );
            })}
          </Carousel>

          {/* {selectedProductType.media.map((item, index) => {
            return (
              <div
                className="w-full border-[1px] border-gray-300 rounded-md hover:border-blue-300 hover:border-2 cursor-pointer"
                key={index}
                onMouseEnter={() => handleMediaHover(item)}
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
          })} */}
        </div>

        {/* <div className="750px:w-[95%] 300px:w-full 750px:m-auto  border-2 border-blue-600"> */}
        <Modal
          className="w-full  px-0 300px:top-0 750px:top-20 "
          title={
            productName.length > 30
              ? productName.slice(0, 30) + "..."
              : productName
          }
          open={isModalOpen}
          footer={null}
          onCancel={handleCancel}
          width="100%"
          // Set the width to "100%" for full width
        >
          <ModalBasicImages
            isModalComponent={isModalComponent}
            selectedProductType={selectedProductType}
            productName={productName}
          ></ModalBasicImages>
        </Modal>
        {/* </div> */}
      </div>
    </>
  );
};

export default BasicImages;
