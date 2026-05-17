import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <img src="/assets/logo.png" alt="Safe Way Journey Logo" className="logo-img" />
          <span className="logo-text">Safe Way <span className="gold-text">Journey</span></span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#package">Package</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="nav-actions">
          <button className="btn-login">Log In</button>
          <button className="btn-primary">Book Now</button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
