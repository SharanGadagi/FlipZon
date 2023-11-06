import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard2 from "./productCards/ProductCard2";

const TrendingDeals = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop1: {
      breakpoint: { max: 3000, min: 1290 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop2: {
      breakpoint: { max: 1290, min: 1200 },
      items: 5,
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
      <div className="w-[98%]  mt-6 mb-10 mx-auto bg-white flex flex-col shadow-md pb-6">
        <div className="w-full h-[10vh] flex flex-row gap-4 items-center py-4 px-4 overflow-hidden ">
          <h2 className="text-2xl font-bold">Trending deals</h2>
          <span className="text-lg font-semibold text-purple-400">
            See all deals
          </span>
        </div>
        <div className="h-[85%]">
          <Carousel
            responsive={responsive}
            autoPlay="true"
            autoPlaySpeed={2000}
            keyBoardControl={true}
            transitionDuration={900}
            infinite={true}
          >
            <ProductCard2 img="https://m.media-amazon.com/images/I/512DQJsWvXL._AC_SY400_.jpg" />
            <ProductCard2 img="https://m.media-amazon.com/images/I/31CsB32kkoL._AC_SY400_.jpg" />
            <ProductCard2 img="https://m.media-amazon.com/images/I/41eVQBisJEL._AC_SY400_.jpg" />
            <ProductCard2 img="https://m.media-amazon.com/images/I/21jA+-GFZHL._AC_SY400_.jpg" />
            <ProductCard2 img="https://m.media-amazon.com/images/I/51nLW-d96xL._AC_SY400_.jpg" />
            <ProductCard2 img="https://m.media-amazon.com/images/I/41D6pCTZkrL._AC_SY400_.jpg" />
            <ProductCard2 img="https://m.media-amazon.com/images/I/41-S31138rL._AC_SY400_.jpg" />
            <ProductCard2 img="https://m.media-amazon.com/images/I/51lzREMT8eL._AC_SY400_.jpg" />
            <ProductCard2 img="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" />
            <ProductCard2 img="https://images-eu.ssl-images-amazon.com/images/I/81li3CP4nXL._AC_UL320_SR320,320_.jpg" />
            <ProductCard2 img="https://images-eu.ssl-images-amazon.com/images/I/71rnMGaRGrL._AC_UL320_SR320,320_.jpg" />
            <ProductCard2 img="https://images-eu.ssl-images-amazon.com/images/I/71rnMGaRGrL._AC_UL320_SR320,320_.jpg" />
            <ProductCard2 img="https://images-eu.ssl-images-amazon.com/images/I/71X1QKKGSqL._AC_UL320_SR320,320_.jpg" />
            <ProductCard2 img="https://images-eu.ssl-images-amazon.com/images/I/81DpvYOc1GL._AC_UL320_SR320,320_.jpg" />
            <ProductCard2 img="https://static-assets-web.flixcart.com/www/linchpin/batman-returns/images/fk-default-image-75ff340b.png?q=90" />
            <ProductCard2 img="https://images-eu.ssl-images-amazon.com/images/I/71rQq5y4SvL._AC_UL320_SR320,320_.jpg" />
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

export default TrendingDeals;
