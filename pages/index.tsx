import type { NextPage } from "next";
import HeroSection from "../src/components/HeroSection";
import Feature from "../src/components/Feature";
import Teams from "../src/components/Teams";
import Technologies from "../src/components/Technologies";
const Home: NextPage = () => {
  return (
    <div>
      <main>
        <HeroSection />
        <Feature/>
        <Teams/>
        <Technologies/>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;

