import { useState } from "react";
import "./Navbar.css"; // Import the global CSS
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="brand">Locomotive</div>
        <input
          type="checkbox"
          id="checkbox"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
        <label htmlFor="checkbox" className="toggle">
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars" id="bar3"></div>
        </label>
      </div>
      <ul
        className={`menu ${isMenuOpen ? "menuOpen" : ""}`}
        style={{
          maxHeight: isMenuOpen ? "90vh" : "0",
          opacity: isMenuOpen ? "1" : "0",
        }}
      >
        <li>
          <Link href="/">Home</Link>
          <hr />
        </li>{" "}
        <li>
          <Link href="https://shashipreetham.netlify.app/">Portfolio</Link>
          <hr />
        </li>{" "}
        <li>
          <Link href="https://github.com/locomotivemtl/locomotive-scroll">Documentation</Link>
          <hr />
        </li>{" "}
        <li>
          <Link href="https://github.com/Shashiawari">Github</Link>
          <hr />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
