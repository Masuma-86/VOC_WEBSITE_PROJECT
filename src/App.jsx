import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Programs from "./components/Programs";
import Software from "./components/Software";
import WhyVault from "./components/WhyVault";
import Statistics from "./components/Statistics";
import HowItWorks from "./components/HowItWorks";
import Community from "./components/Community";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="site-wrapper">
      <div className="site-particles">
        <Particles
          particleColors={["#F3F1EC", "#D4AF37"]}
          particleCount={140}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={45}
          moveParticlesOnHover
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="site-content">
        <Navbar />

        <main>
          <Hero />
          <WhatWeDo />
          <Programs />
          <Software />
          <WhyVault />
          <Statistics />
          <HowItWorks />
          <Community />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;