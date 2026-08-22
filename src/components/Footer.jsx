const footerLinks = {
  Programs: [
    { name: "Web Development", target: "programs" },
    { name: "Python", target: "programs" },
    { name: "AI & Prompt Engineering", target: "programs" },
    { name: "Cybersecurity", target: "programs" },
  ],

  Software: [
    { name: "VaultVerify", target: "software" },
    { name: "VaultCareer", target: "software" },
    { name: "VaultHire", target: "software" },
    { name: "VaultLabs", target: "software" },
  ],

  Resources: [
    { name: "About Us", target: "about" },
    { name: "Free Tests", target: "programs" },
    { name: "Community", target: "community" },
    { name: "Career", target: "community" },
  ],
};

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <h3>VaultofCodes</h3>

          <p>
            Learn technology. Build real projects. Experience innovation.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-links">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-column" key={title}>
              <h4>{title}</h4>

              {links.map((link) => (
                <button
                  className="footer-link-button"
                  key={link.name}
                  onClick={() => scrollToSection(link.target)}
                >
                  {link.name}
                </button>
              ))}
            </div>
          ))}
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © 2026 VaultofCodes. All rights reserved.
        </span>

        <div>
          <button
            onClick={() =>
              alert("Privacy Policy coming soon.")
            }
          >
            Privacy
          </button>

          <button
            onClick={() =>
              alert("Terms & Conditions coming soon.")
            }
          >
            Terms
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "mailto:contact@vaultofcodes.com")
            }
          >
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;