import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", target: "home" },
    { name: "Programs", target: "programs" },
    { name: "Software", target: "software" },
    { name: "About", target: "about" },
    { name: "Career", target: "community" },
    { name: "Free Tests", target: "programs" },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <button
        className="nav-logo"
        onClick={() => scrollToSection("home")}
      >
        VaultofCodes
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <button
            key={link.name}
            className="nav-link-button"
            onClick={() => scrollToSection(link.target)}
          >
            {link.name}
          </button>
        ))}

        <button
          className="nav-login"
          onClick={() => alert("Login coming soon.")}
        >
          Login
        </button>
      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </nav>
  );
}

export default Navbar;