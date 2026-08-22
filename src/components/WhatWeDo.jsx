const areas = [
  {
    number: "01",
    title: "EdTech",
    description:
      "Practical technology education through programs, workshops, internships, and hands-on learning.",
    points: ["Training", "Workshops", "Internships"],
    target: "programs",
  },
  {
    number: "02",
    title: "Software & SaaS",
    description:
      "Technology products and software solutions designed to solve real-world problems.",
    points: ["Products", "Automation", "SaaS Solutions"],
    target: "software",
  },
];

function WhatWeDo() {
  const exploreSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="what-we-do">
      <div className="section-heading">
        <p>WHAT WE DO</p>

        <h2>
          More than <span>learning.</span>
        </h2>

        <span>
          We help you learn, build, and experience technology.
        </span>
      </div>

      <div className="areas-grid">
        {areas.map((area) => (
          <article
            className="area-card"
            key={area.title}
            data-number={area.number}
          >
            <div className="area-card-top">
              <p className="card-label">
                {area.number} / VAULTOFCODES
              </p>

              <span className="area-index">
                {area.number}
              </span>
            </div>

            <div className="area-card-body">
              <h3>{area.title}</h3>

              <p>{area.description}</p>

              <div className="card-points">
                {area.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => exploreSection(area.target)}
              >
                Explore <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhatWeDo;