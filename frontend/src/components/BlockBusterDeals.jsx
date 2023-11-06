import HomeProductCard from "./productCards/HomeProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const BlockBusterDeals = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop1: {
      breakpoint: { max: 3000, min: 1290 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop2: {
      breakpoint: { max: 1290, min: 1200 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop3: {
      breakpoint: { max: 1200, min: 1000 },
      items: 3,
      slidesToSlide: 1,
    },

    tablet: {
      breakpoint: { max: 1000, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="w-[98%]  mt-6 mb-10 mx-auto bg-white flex flex-col shadow-md">
        <div className="w-full h-[10vh] flex flex-row gap-4 items-center py-4 px-4 overflow-hidden ">
          <h2 className="text-2xl font-bold">Blockbuster deals</h2>
          <span className="text-lg font-semibold text-purple-400">
            See all deals
          </span>
        </div>
        <div className="h-[85%]">
          <Carousel
            responsive={responsive}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlay="true"
            autoPlaySpeed={2000}
            keyBoardControl={true}
            transitionDuration={900}
            // customTransition="all"
            // infinite={true}
          >
            <HomeProductCard img="https://m.media-amazon.com/images/I/51trWgIqvbL._AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/71cF5caTObL._SL1176__AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/61rw-4Q8xcL._AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/41S9FWgv3-L._AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/31na34LxwmL._AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/51trWgIqvbL._AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/71cF5caTObL._SL1176__AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/61rw-4Q8xcL._AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/41S9FWgv3-L._AC_SY400_.jpg" />
            <HomeProductCard img="https://m.media-amazon.com/images/I/31na34LxwmL._AC_SY400_.jpg" />
          </Carousel>
        </div>
        {/* <div className="h-[85%]">
          <Carousel responsive={responsive}>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
            <div>item1</div>
          </Carousel>
        </div> */}
      </div>
    </>
  );
};

export default BlockBusterDeals;
