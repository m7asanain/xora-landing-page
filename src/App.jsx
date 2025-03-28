import Pricing from "./Pricing";
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
    </main>
  );
};

export default App;
