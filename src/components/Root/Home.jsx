import Feature_cards from "./home-components/Feature_cards/Feature_cards";
import Hero_image from "./home-components/Hero_image/Hero_image";
import Process_section from "./home-components/Process_section/Process_section";

function Home() {
  return (
    <section>
      <section>
        <Hero_image />
      </section>
      <section>
        <Feature_cards />
      </section>
      <section>
        <Process_section />
      </section>
    </section>
  );
}

export default Home;
