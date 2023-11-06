import BestDiscountCard from "../components/BestDiscountCard";
import BlockBusterDeals from "../components/BlockBusterDeals";
import FeaturedBannerCard from "../components/FeatureBannerCard";
import FeaturedBrandBannerCard from "../components/FeaturedBrandBannerCard";
import MainCategory from "../components/MainCategory";
import Navbar from "../components/Navbar";
import OfferBanners from "../components/OfferBanners";
import TrendingDeals from "../components/TrendingDeals";
import { featuredBannerImage1, featureBrandBannerImage1 } from "../static/data";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <MainCategory />
      <OfferBanners />
      <BestDiscountCard />
      <BlockBusterDeals />
      <FeaturedBannerCard featuredBannerImages={featuredBannerImage1} />
      <TrendingDeals />
      <FeaturedBrandBannerCard
        featuredBrandBannerImages={featureBrandBannerImage1}
      />
    </>
  );
};

export default HomePage;
