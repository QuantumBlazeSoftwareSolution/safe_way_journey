import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './Destinations.css';

const destinations = [
  {
    name: "Ruwanweli Saya",
    sinhala: "රුවන්වැලි සෑය",
    image: "/assets/ruwanweli_saya.png",
    description: "The Great Stupa, a marvel of ancient engineering and a symbol of faith."
  },
  {
    name: "Jaya Sri Maha Bodhi",
    sinhala: "ජය ශ්‍රී මහා බෝධිය",
    image: "/assets/jaya_sri_maha_bodhi.png",
    description: "The oldest living human-planted tree in the world with over 2,300 years of history."
  },
  {
    name: "Jetavanaramaya",
    sinhala: "ජේතවනාරාමය",
    image: "/assets/jetavanaramaya.png",
    description: "Once the third tallest structure in the ancient world, built with over 90 million bricks."
  },
  {
    name: "Abhayagiriya",
    sinhala: "අභයගිරිය",
    image: "/assets/abhayagiriya.png",
    description: "A major monastery site and one of the most extensive ruins in the world."
  },
  {
    name: "Thuparamaya",
    sinhala: "තූපාරාමය",
    image: "/assets/thuparamaya.png",
    description: "The first Buddhist stupa built in Sri Lanka after the introduction of Buddhism."
  },
  {
    name: "Samadhi Statue",
    sinhala: "සමාධි පිලිමය",
    image: "/assets/samadhi_statue.png",
    description: "A masterpiece of sculpture depicting Lord Buddha in the Dhyana Mudra."
  },
  {
    name: "Kuttam Pokuna",
    sinhala: "කුට්ටම් පොකුණ",
    image: "/assets/kuttam_pokuna.png",
    description: "The Twin Ponds, a magnificent example of ancient landscape architecture."
  }
];

const Destinations = () => {
  return (
    <section className="destinations section-padding" id="destinations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sacred Destinations</h2>
          <p className="section-subtitle">Visit the most revered sites in the ancient capital of Anuradhapura.</p>
        </div>

        <div className="destinations-grid">
          {destinations.map((dest, index) => (
            <motion.div 
              key={index}
              className="dest-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="dest-image">
                <img src={dest.image} alt={dest.name} />
                <div className="dest-overlay">
                  <div className="dest-info">
                    <span className="sinhala-text">{dest.sinhala}</span>
                    <h3>{dest.name}</h3>
                    <p>{dest.description}</p>
                    <div className="dest-location">
                      <MapPin size={16} />
                      <span>Anuradhapura, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
