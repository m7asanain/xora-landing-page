import Features from "./sections/Features";
import Headers from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Headers />
      <Hero />
      <Features />
    </main>
  );
};

export default App;
