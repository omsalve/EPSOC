import Hero from "./Components/Sections/Hero";
import AboutUs from "./Components/Sections/AboutUs";
import MustReads from "./Components/Sections/MustReads";
import Events from "./Components/Sections/Events";
import FooterStack from "./Components/Sections/FooterStack";
import Faq from "./Components/Sections/Faq";
import HamraahFeature from "./Components/Sections/HamraahFeature";

export default function Page() {
  return (
    <>
      <Hero />
      <AboutUs />
      <HamraahFeature />
      <MustReads />
      <Events />
      <Faq />
      <FooterStack />
    </>
  );
}