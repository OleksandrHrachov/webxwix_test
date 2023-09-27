import { ExploreProducts } from "./components/ExploreProduct";
import { GetYourPhone } from "./components/GetYourPhone";
import { IntroSection } from "./components/IntroSection";
import { SliderSection } from './components/SliderSection';

export default function Home() {
  return (
    <>
      <IntroSection />
      <GetYourPhone />
      <ExploreProducts />
      <SliderSection />
    </>
  );
}
