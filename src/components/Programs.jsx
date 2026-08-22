import { useRef, useState } from "react";

const programs = [
  {
    number: "01",
    title: "Web Development",
    category: "DEVELOPMENT",
    description:
      "Build modern, responsive web applications from scratch.",
    level: "Beginner → Advanced",
  },
  {
    number: "02",
    title: "Python",
    category: "PROGRAMMING",
    description:
      "Learn Python through practical coding and real projects.",
    level: "Beginner → Advanced",
  },
  {
    number: "03",
    title: "AI & Prompt Engineering",
    category: "ARTIFICIAL INTELLIGENCE",
    description:
      "Explore AI tools, prompting, automation, and intelligent systems.",
    level: "Intermediate",
  },
  {
    number: "04",
    title: "Cybersecurity",
    category: "SECURITY",
    description:
      "Understand modern security concepts and protect digital systems.",
    level: "Intermediate",
  },
  {
    number: "05",
    title: "Ethical Hacking",
    category: "SECURITY",
    description:
      "Learn ethical security testing and practical cybersecurity techniques.",
    level: "Advanced",
  },
];

function Programs() {
  const trackRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);

  const handleWheel = (event) => {
    if (trackRef.current && Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      trackRef.current.scrollLeft += event.deltaY;
    }
  };

  const handleExplore = (title) => {
    setActiveCard(title);

    setTimeout(() => {
      setActiveCard(null);
    }, 1200);
  };

  return (
    <section id="programs" className="programs">
      <div className="section-heading">
        <p>FEATURED PROGRAMS</p>

        <h2>
          Skills that move you <span>forward.</span>
        </h2>

        <span>
          Practical programs designed around the technologies shaping the
          future.
        </span>
      </div>

      <div
        className="programs-track"
        ref={trackRef}
        onWheel={handleWheel}
      >
        {programs.map((program) => (
          <article
            className={`program-card ${
              activeCard === program.title ? "selected" : ""
            }`}
            key={program.number}
          >
            <div className="program-top">
              <span>{program.number}</span>
              <span>{program.category}</span>
            </div>

            <div className="program-content">
              <h3>{program.title}</h3>

              <p>{program.description}</p>
            </div>

            <div className="program-bottom">
              <span>{program.level}</span>

              <button
                type="button"
                onClick={() => handleExplore(program.title)}
              >
                {activeCard === program.title
                  ? "Selected ✓"
                  : "Explore →"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Programs;