import Hero from "./components/Hero";
import ProductHighlights from "./components/ProductHighlights";
import Newsletter from "./components/Newsletter";
import OfferBanner from "./components/OfferBanner";
import ReviewCarousel from "./components/ReviewCarousel"
export default function HomePage() {
  return (
    <div>
      <OfferBanner></OfferBanner>
      <Hero />
      <ProductHighlights />
     <ReviewCarousel></ReviewCarousel>
      <Newsletter></Newsletter>
    </div>
  );
}
