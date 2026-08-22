import { useState } from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Web Development Student",
    quote:
      "VaultofCodes helped me turn what I was learning into an actual project I could show.",
  },
  {
    name: "Riya Sharma",
    role: "AI Program Participant",
    quote:
      "The practical approach made technology feel much less intimidating and much more exciting.",
  },
  {
    name: "Dev Patel",
    role: "Cybersecurity Learner",
    quote:
      "I came to learn cybersecurity and ended up building projects I never thought I could.",
  },
];

const projects = [
  "AI Study Assistant",
  "Smart Portfolio",
  "Cyber Threat Monitor",
];

function Community() {
  const [activeTestimonial, setActiveTestimonial] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="community" className="community">
      <div className="section-heading">
        <p>THE COMMUNITY</p>

        <h2>Learn together. Build together.</h2>

        <span>
          A growing ecosystem of students, creators, and technology builders.
        </span>
      </div>

      <div className="community-layout">
        <div className="testimonials">
          {testimonials.map((testimonial) => (
            <article
              className={`testimonial-card ${
                activeTestimonial === testimonial.name ? "selected" : ""
              }`}
              key={testimonial.name}
              onClick={() => setActiveTestimonial(testimonial.name)}
            >
              <span className="quote-mark">“</span>

              <p className="testimonial-quote">{testimonial.quote}</p>

              <div className="testimonial-person">
                <div className="person-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-card">
          <div className="projects-header">
            <span>STUDENT PROJECTS</span>
            <span>03</span>
          </div>

          <div className="projects-list">
            {projects.map((project, index) => (
              <button
                className={`project-item ${
                  activeProject === project ? "selected" : ""
                }`}
                key={project}
                onClick={() => setActiveProject(project)}
              >
                <span>0{index + 1}</span>

                <strong>{project}</strong>

                <span className="project-arrow">
                  {activeProject === project ? "✓" : "↗"}
                </span>
              </button>
            ))}
          </div>

          <button className="community-button">
            Explore Community →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Community;