
import { Mail, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img src="/assets/logo.png" alt="Safe Way Journey Logo" className="logo-img" />
              <h2 className="logo-text">Safe Way Journey</h2>
            </div>
            <p className="footer-desc">
              ශ්‍රී ලංකාවේ පූජනීය වන්දනා චාරිකා සහ සංචාර සඳහා ඔබගේ විශ්වාසවන්ත සහකරු. 
              අපගේ මාතෘ භූමියේ ශ්‍රේෂ්ඨ උරුමයන් කරා ඔබ රැගෙන යන්නෙමු.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinations</a></li>
              <li><a href="#package">Package</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>


            <ul>
              <li>
                <Phone size={18} className="icon" />
                <span>071 1105959 / 077 1819201</span>
              </li>
              <li>
                <Mail size={18} className="icon" />
                <span>safeway55@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Safe Way Journey. All Rights Reserved. Designed for Premium Pilgrimage Tours.</p>
          <div className="developer-credits">
            <p>Developed by <a href="https://quantumblaze.lk" target="_blank" rel="noopener noreferrer" className="dev-link">Quantum Blaze</a></p>
            <p className="dev-contact">Contact: <a href="tel:+94788056838">+94 78 805 6838</a> | Website: <a href="https://quantumblaze.lk" target="_blank" rel="noopener noreferrer">quantumblaze.lk</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
