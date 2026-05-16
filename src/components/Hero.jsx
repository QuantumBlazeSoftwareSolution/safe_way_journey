import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/assets/hero.png" alt="Anuradhapura" />
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
            Experience the serenity of Anuradhapura Atamasthana with our premium 
            pilgrimage tour. Comfort, safety, and spiritual enrichment guaranteed.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hero-btn-group"
          >
            <button className="btn-primary">Find Out More</button>
          </motion.div>
        </div>

        <div className="hero-side-cards">
          <div className="side-card active">
            <img src="/assets/ruwanweli_saya.png" alt="Ruwanweli Saya" />
          </div>
          <div className="side-card">
            <img src="/assets/jaya_sri_maha_bodhi.png" alt="Jaya Sri Maha Bodhi" />
          </div>
          <div className="side-card">
            <img src="/assets/jetavanaramaya.png" alt="Jetavanaramaya" />
          </div>
          <div className="side-card">
            <img src="/assets/abhayagiriya.png" alt="Abhayagiriya" />
          </div>
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

      <div className="brush-stroke">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,106.7C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#ffffff"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
