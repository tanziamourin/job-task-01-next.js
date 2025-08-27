import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import Newsletter from "./components/Newsletter";
import OfferBanner from "./components/OfferBanner";
// import BestSellerCarousel from "./components/BestSellerCarousel";
import BestSellerCarousel from "./components/BestSellerCarousel"
export default function HomePage() {
  return (
    <div>
        <OfferBanner></OfferBanner>
      <Hero />
      <ProductHighlights />
     <BestSellerCarousel></BestSellerCarousel>
   
    <Newsletter></Newsletter>
    
    </div>
  );
}
