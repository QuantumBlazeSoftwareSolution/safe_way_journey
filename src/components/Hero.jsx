import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import './Hero.css';

const sideImages = [
  { id: 1, src: "/assets/ruwanweli_saya.png", alt: "Ruwanweli Saya" },
  { id: 2, src: "/assets/jaya_sri_maha_bodhi.png", alt: "Jaya Sri Maha Bodhi" },
  { id: 3, src: "/assets/jetavanaramaya.png", alt: "Jetavanaramaya" },
  { id: 4, src: "/assets/abhayagiriya.png", alt: "Abhayagiriya" }
];

const Hero = () => {
  const [bgImage, setBgImage] = useState("/assets/hero.png");
  const [activeId, setActiveId] = useState(null);

  // Preload images to ensure instant loading
  useEffect(() => {
    sideImages.forEach((image) => {
      const img = new Image();
      img.src = image.src;
    });
    const mainHero = new Image();
    mainHero.src = "/assets/hero.png";
  }, []);

  const handleImageClick = (src, id) => {
    setBgImage(src);
    setActiveId(id);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        {/* No animation for instant load as requested */}
        <img 
          src={bgImage} 
          alt="Anuradhapura" 
          className="hero-main-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hero-subtitle"
          >
            සිරි සදහම් වන්දනා
          </motion.h4>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-title"
          >
            Say Yes to Your <br />
            <span className="text-gradient">Sacred Journey</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hero-description"
          >
            අපගේ Premium Pilgrimage Tour එක සමඟින් අනුරාධපුර අටමස්ථානයේ ශාන්ත සුවය අත්විඳින්න. 
            ඉහළම සුවපහසුව, ආරක්ෂාව සහ වන්දනාමය අත්දැකීමක් සහතික කෙරේ.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-btn-group"
          >
            <button className="btn-primary">විස්තර සොයන්න / Explore More</button>
          </motion.div>

        </div>

        <div className="hero-side-cards">
          {sideImages.map((image) => (
            <div 
              key={image.id}
              className={`side-card ${activeId === image.id ? 'active' : ''}`}
              onClick={() => handleImageClick(image.src, image.id)}
            >
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>

      <div className="hero-search-bar-container">
        <div className="container">
          <div className="hero-search-bar glass">
            <div className="search-item">
              <MapPin size={20} className="icon" />
              <div>
                <label>Destination</label>
                <p>Anuradhapura, SL</p>
              </div>
            </div>
            <div className="search-divider"></div>
            <div className="search-item">
              <Calendar size={20} className="icon" />
              <div>
                <label>Date</label>
                <p>Select Date</p>
              </div>
            </div>
            <div className="search-divider"></div>
            <div className="search-item">
              <Users size={20} className="icon" />
              <div>
                <label>Guests</label>
                <p>2 Adults, 1 Child</p>
              </div>
            </div>
            <button className="search-btn">
              <Search size={20} />
              <span>SEARCH</span>
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
