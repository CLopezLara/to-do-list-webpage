import Feature_cards from "./home-components/Feature_cards/Feature_cards";
import HeroImage from "./home-components/Hero_image/HeroImage";
import ProcessSection from "./home-components/Process_section/ProcessSection";

function Home() {
  return (
    <section>
      <section>
        <HeroImage />
      </section>
      <section>
        <Feature_cards />
      </section>
      <section>
        <ProcessSection />
      </section>
    </section>
  );
}

export default Home;
