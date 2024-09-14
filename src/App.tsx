import { Footer } from "./Components/Footer";
import { Headers } from "./Components/Header";
import { Hero } from "./Components/Hero";

import { Navigation } from "./Components/Navigation";
import { SEO } from "./Components/SEO";

function App() {
  return (
    <div className="flex w-screen max-w-[1440px] flex-col items-center justify-center bg-[#f7f7f7]">
      <Navigation />
      <Hero />
      <Headers />
      <SEO />
      <Footer />
    </div>
  );
}

export default App;
