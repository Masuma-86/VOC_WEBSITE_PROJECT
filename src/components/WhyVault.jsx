import { useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Practical Learning",
    description:
      "Learn by building instead of just watching. Turn concepts into working projects.",
  },
  {
    number: "02",
    title: "Industry-Focused Skills",
    description:
      "Explore technologies and skills that are relevant to today's digital industry.",
  },
  {
    number: "03",
    title: "Real Projects",
    description:
      "Build practical projects that help transform knowledge into experience.",
  },
  {
    number: "04",
    title: "Technology First",
    description:
      "Experience modern tools, emerging technologies, and a product-focused mindset.",
  },
  {
    number: "05",
    title: "Accessible Learning",
    description:
      "Make technology learning approachable for students at different skill levels.",
  },
  {
    number: "06",
    title: "Student Community",
    description:
      "Learn, collaborate, share ideas, and grow alongside a community of builders.",
  },
];

function WhyVault() {
  const [activeReason, setActiveReason] = useState(null);

  const handleSelect = (number) => {
    setActiveReason(number);

    setTimeout(() => {
      setActiveReason(null);
    }, 1200);
  };

  return (
    <section id="why-vaultofcodes" className="why-vault">
      <div className="section-heading">
        <p>WHY VAULTOFCODES?</p>

        <h2>
          Built for people who want to <span>build.</span>
        </h2>

        <span>
          A technology-first approach that connects learning with real-world
          experience.
        </span>
      </div>

      <div className="reasons-grid">
        {reasons.map((reason) => (
          <article
            className={`reason-card ${
              activeReason === reason.number ? "selected" : ""
            }`}
            key={reason.number}
          >
            <div className="reason-top">
              <span className="reason-number">{reason.number}</span>
              <span className="reason-arrow">
                {activeReason === reason.number ? "✓" : "↗"}
              </span>
            </div>

            <div className="reason-content">
              <h3>{reason.title}</h3>

              <p>{reason.description}</p>
            </div>

            <button
              type="button"
              onClick={() => handleSelect(reason.number)}
            >
              {activeReason === reason.number ? "Selected ✓" : "Explore →"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhyVault;