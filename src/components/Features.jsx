import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Clock, Utensils, Hotel } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Bus size={32} />,
    title: "AC Vehicles",
    description: "Comfortable and luxury AC vehicles for a smooth and pleasant journey."
  },
  {
    icon: <Clock size={32} />,
    title: "1 Night 2 Days",
    description: "Perfectly planned itinerary to cover all sacred sites in two days."
  },
  {
    icon: <Utensils size={32} />,
    title: "Premium Foods",
    description: "Delicious and hygienic meals provided throughout the pilgrimage."
  },
  {
    icon: <Hotel size={32} />,
    title: "AC Hotel Rooms",
    description: "Relaxing stay in premium AC hotel rooms for a restful night."
  }
];

const Features = () => {
  return (
    <section className="features section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Our Premium Services</h2>
          <p className="section-subtitle">We ensure every detail of your pilgrimage is handled with excellence.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
