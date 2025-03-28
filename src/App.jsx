import Pricing from "./Pricing";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Headers from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Headers />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
    </main>
  );
};

export default App;
