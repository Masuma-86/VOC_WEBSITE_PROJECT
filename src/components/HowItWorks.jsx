import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Find the right technology, program, or opportunity for your goals.",
  },
  {
    number: "02",
    title: "Learn",
    description:
      "Develop practical skills through structured learning and hands-on training.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn your knowledge into real projects and meaningful experiences.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Take your skills into the real world and start creating opportunities.",
  },
];

function HowItWorks() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let step = 0;

          const timer = setInterval(() => {
            setActiveStep(step);

            step++;

            if (step >= steps.length) {
              clearInterval(timer);
            }
          }, 700);

          observer.disconnect();

          return () => clearInterval(timer);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="how-it-works" className="how-it-works">
      <div className="section-heading">
        <p>HOW IT WORKS</p>
        <h2>From curiosity to creation.</h2>
        <span>
          A simple journey from discovering technology to launching what you
          build.
        </span>
      </div>

      <div className="journey">
        <div className="journey-line">
          <div
            className="journey-progress"
            style={{
              width: `${(activeStep / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <article
              className={`journey-step ${
                index <= activeStep ? "active" : ""
              }`}
              key={step.number}
            >
              <div className="step-number">{step.number}</div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;