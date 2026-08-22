import { useState } from "react";

const products = [
  {
    name: "VaultVerify",
    category: "CREDENTIALS",
    description:
      "A smart platform for verifying certificates, credentials, and achievements.",
    benefit: "Trust every credential.",
    size: "large",
  },
  {
    name: "VaultCareer",
    category: "CAREER INTELLIGENCE",
    description:
      "Helping students discover opportunities and make smarter career decisions.",
    benefit: "Turn skills into opportunities.",
    size: "small",
  },
  {
    name: "VaultHire",
    category: "RECRUITMENT",
    description:
      "A streamlined platform connecting companies with skilled technology talent.",
    benefit: "Find the right talent faster.",
    size: "small",
  },
  {
    name: "VaultLabs",
    category: "TECHNOLOGY",
    description:
      "A digital space for experimenting with products, ideas, and emerging technologies.",
    benefit: "Build what comes next.",
    size: "wide",
  },
];

function Software() {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleExplore = (productName) => {
    setActiveProduct(productName);

    setTimeout(() => {
      setActiveProduct(null);
    }, 1200);
  };

  return (
    <section id="software" className="software">
      <div className="section-heading">
        <p>SOFTWARE & SAAS</p>

        <h2>
          Technology beyond the <span>classroom.</span>
        </h2>

        <span>
          We don't just teach technology. We build products with it.
        </span>
      </div>

      <div className="software-grid">
        {products.map((product) => (
          <article
            className={`software-card ${product.size} ${
              activeProduct === product.name ? "selected" : ""
            }`}
            key={product.name}
          >
            <div className="software-top">
              <span>{product.category}</span>
              <span className="software-arrow">↗</span>
            </div>

            <div className="software-content">
              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <strong>{product.benefit}</strong>
            </div>

            <button
              type="button"
              className="software-button"
              onClick={() => handleExplore(product.name)}
            >
              {activeProduct === product.name
                ? "Selected ✓"
                : "Explore Product →"}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Software;