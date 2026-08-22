import { useEffect, useState } from "react";
import Particles from "./Particles";

function Hero() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="hero"
      style={{
        "--mouse-x": `${mousePosition.x}%`,
        "--mouse-y": `${mousePosition.y}%`,
      }}
    >
      {/* FULL WEBSITE PARTICLE BACKGROUND */}
      <div className="global-particles">
        <Particles
          particleColors={["#F3F1EC", "#D4AF37"]}
          particleCount={120}
          particleSpread={12}
          speed={0.08}
          particleBaseSize={300}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      <div className="hero-aurora aurora-one"></div>
      <div className="hero-aurora aurora-two"></div>
      <div className="hero-grid"></div>
      <div className="hero-mouse-glow"></div>

      <div className="hero-content">
        <p className="hero-label">EDTECH • SOFTWARE • SAAS</p>

        <h1>
          Learn Technology.
          <br />
          Build the <span className="accent-text">Future.</span>
        </h1>

        <p className="hero-description">
          Learn practical technology, build real projects, and experience
          software innovation with VaultofCodes.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn magnetic-btn"
            onClick={() => scrollToSection("programs")}
          >
            Explore Programs →
          </button>

          <button
            className="secondary-btn magnetic-btn"
            onClick={() => scrollToSection("software")}
          >
            Explore Software →
          </button>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <div className="hero-card-content">
            <span>VAULTOFCODES</span>

            <strong>
              Build.
              <br />
              Learn.
              <br />
              Launch.
            </strong>

            <div className="hero-card-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;