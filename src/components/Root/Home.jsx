import Feature_cards from "./home-components/Feature_cards/Feature_cards";
import Hero_image from "./home-components/Hero_image/Hero_image";

function Home() {
  return (
    <section>
      <section>
        <Hero_image />
      </section>
      <section>
        <Feature_cards />
      </section>
    </section>
  );
}

export default Home;
