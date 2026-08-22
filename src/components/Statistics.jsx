import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 50000,
    suffix: "+",
    label: "Students",
  },
  {
    value: 100,
    suffix: "+",
    label: "Programs",
  },
  {
    value: 10000,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 50,
    suffix: "+",
    label: "Workshops",
  },
];

function Counter({ value, suffix, startAnimation }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let current = 0;
    const duration = 2200;
    const intervalTime = 35;
    const steps = duration / intervalTime;

    const timer = setInterval(() => {
      current += value / steps;

      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [value, startAnimation]);

  return (
    <span className="rolling-number">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

function Statistics() {
  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="statistics">
      <div className="stats-heading">
        <p>BY THE NUMBERS</p>

        <h2>
          Built by learners.
          <br />
          <span>Driven by builders.</span>
        </h2>

        <div className="stats-line" />
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <article className="stat-card" key={stat.label}>
            <div className="stat-top">
              <span>0{index + 1}</span>
              <span>VAULTOFCODES</span>
            </div>

            <div className="stat-number">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                startAnimation={startAnimation}
              />
            </div>

            <p>{stat.label}</p>

            <div className="stat-card-line" />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Statistics;