import FeatureCards from "./home-components/Feature_cards/FeatureCards";
import HeroImage from "./home-components/Hero_image/HeroImage";
import ProcessSection from "./home-components/Process_section/ProcessSection";

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
    </section>
  );
}

export default Home;
