import FeatureCards from "./home-components/Feature_cards/FeatureCards";
import HeroImage from "./home-components/Hero_image/HeroImage";
import ProcessSection from "./home-components/Process_section/ProcessSection";
import Reviews from "./home-components/Reviews/Reviews";

function Home() {
  return (
    <section>
      <section>
        <HeroImage />
      </section>
      <section>
        <FeatureCards />
      </section>
      <section>
        <ProcessSection />
      </section>
      <section>
        <Reviews />
      </section>
    </section>
  );
}

export default Home;
