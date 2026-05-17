
import { motion } from 'framer-motion';
import { Bus, Clock, Utensils, Hotel } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Bus size={32} />,
    title: "AC Vehicles",
    description: "සුවපහසු සහ සුඛෝපභෝගී AC රථ වාහන සේවාව චාරිකාව පුරාවටම සපයනු ලැබේ."
  },
  {
    icon: <Clock size={32} />,
    title: "1 Night 2 Days",
    description: "සියලුම පූජනීය ස්ථාන ආවරණය වන පරිදි මනාව සැලසුම් කරන ලද කාලසටහනක්."
  },
  {
    icon: <Utensils size={32} />,
    title: "Premium Foods",
    description: "පිරිසිදු, සෞඛ්‍යාරක්ෂිත සහ ඉතා රසවත් දේශීය හා විදේශීය ආහාර වේල් 6ක්."
  },
  {
    icon: <Hotel size={32} />,
    title: "AC Hotel Rooms",
    description: "සුවපහසු නින්දක් සඳහා Premium AC හෝටල් කාමර සහ ඉහළම ආගන්තුක සත්කාරය."
  }
];


const Features = () => {
  return (
    <section className="features section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">අපගේ Premium සේවාවන්</h2>
          <p className="section-subtitle">ඔබේ වන්දනා චාරිකාවේ සෑම විස්තරයක්ම ඉහළම ගුණාත්මකභාවයෙන් යුතුව සංවිධානය කිරීමට අප බැඳී සිටිමු.</p>
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
