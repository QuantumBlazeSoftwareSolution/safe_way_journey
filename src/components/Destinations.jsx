
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './Destinations.css';

const destinations = [
  {
    name: "Ruwanweli Saya",
    sinhala: "රුවන්වැලි සෑය",
    image: "/assets/ruwanweli_saya.png",
    description: "පුරාණ ලංකාවේ ඉංජිනේරු විද්‍යාවේ විශිෂ්ඨතම මහා ස්තූපය සහ අසිරිමත් බෞද්ධ උරුමය."
  },
  {
    name: "Jaya Sri Maha Bodhi",
    sinhala: "ජය ශ්‍රී මහා බෝධිය",
    image: "/assets/jaya_sri_maha_bodhi.png",
    description: "ලොව පැරණිතම ලිඛිත ඉතිහාසයක් ඇති, වසර 2,300කට වඩා පැරණි උතුම්ම ජය ශ්‍රී මහා බෝධීන් වහන්සේ."
  },
  {
    name: "Jetavanaramaya",
    sinhala: "ජේතවනාරාමය",
    image: "/assets/jetavanaramaya.png",
    description: "පුරාණ ලෝකයේ ඉදිකළ තෙවැනි උසම ගොඩනැගිල්ල වන ගඩොල් මිලියන 90කින් නිමවූ මහා ස්තූපය."
  },
  {
    name: "Abhayagiriya",
    sinhala: "අභයගිරිය",
    image: "/assets/abhayagiriya.png",
    description: "අතීතයේ ලොව විශාලතම ආගමික මධ්‍යස්ථානයක් මෙන්ම ඓතිහාසික මහා විහාර සංකීර්ණයක්."
  },
  {
    name: "Thuparamaya",
    sinhala: "තූපාරාමය",
    image: "/assets/thuparamaya.png",
    description: "මහින්දාගමනයෙන් පසු ලක්දිව ප්‍රථමයෙන්ම ඉදිකළ ඓතිහාසික ප්‍රථම බෞද්ධ ස්තූපය."
  },
  {
    name: "Samadhi Statue",
    sinhala: "සමාධි පිලිමය",
    image: "/assets/samadhi_statue.png",
    description: "සමාධි සුවයෙන් වැඩසිටින බුදුරජාණන් වහන්සේ නිරූපණය කරන ලක්දිව විශිෂ්ඨතම පිළිම නෙලීමේ කලාව."
  },
  {
    name: "Kuttam Pokuna",
    sinhala: "කුට්ටම් පොකුණ",
    image: "/assets/kuttam_pokuna.png",
    description: "පුරාණ ලංකාවේ විශිෂ්ඨ ජල තාක්ෂණය සහ ගෘහ නිර්මාණ ශිල්පය මනාව පෙන්වන නිවුන් පොකුණ."
  }
];

const Destinations = () => {
  return (
    <section className="destinations section-padding" id="destinations">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sacred <span className="text-gradient">Destinations</span></h2>
          <p className="section-subtitle">අනුරාධපුර ඓතිහාසික පූජා භූමියේ පිහිටි උතුම්ම වන්දනා ස්ථාන වන්දනාමාන කරගන්න.</p>
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
