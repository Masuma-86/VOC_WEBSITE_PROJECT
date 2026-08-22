function FinalCTA() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="final-cta">
      <div className="cta-content">
        <p>START BUILDING</p>

        <h2>
          Ready to build
          <br />
          your future in tech?
        </h2>

        <p className="cta-description">
          Learn the skills. Build real projects. Create what comes next.
        </p>

        <div className="cta-buttons">
          <button
            className="primary-btn"
            onClick={() => scrollToSection("programs")}
          >
            Explore Programs →
          </button>

          <button
            className="secondary-btn"
            onClick={() => scrollToSection("software")}
          >
            Explore Software →
          </button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;