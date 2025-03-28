import Pricing from "./sections/Pricing";
import Download from "./sections/Download";
import Faq from "./sections/Faq";
import Features from "./sections/Features";
import Headers from "./sections/Header";
import Hero from "./sections/Hero";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Headers />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
