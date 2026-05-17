import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import './PackageDetails.css';

const inclusions = [
  "Round-trip luxury AC transport",
  "Professional spiritual guide",
  "1 Night stay in Premium AC Hotel",
  "All 6 meals included (Local & International)",
  "Entrance tickets to all sites",
  "Refreshments during the journey",
  "Insurance coverage for all pilgrims",
  "Special pooja arrangements"
];

const PackageDetails = () => {
  const handleBooking = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const phoneNumber = "0711105959";
    const formattedPhone = "94711105959"; // Sri Lanka country code prefix for WA

    if (isMobile) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      const message = encodeURIComponent("Hi Safe Way Journey, I would like to book a pilgrimage tour!");
      window.open(`https://web.whatsapp.com/send?phone=${formattedPhone}&text=${message}`, "_blank");
    }
  };

  return (
    <section className="package-details section-padding" id="package">
      <div className="container">
        <div className="package-card glass">
          <div className="package-content">
            <div className="package-tag">Special Pilgrimage Package</div>
            <h2 className="package-title sinhala-font">අනුරාධපුර අටමස්ථාන <br /> <span className="text-gradient">විශිෂ්ඨ වන්දනා චාරිකාව</span></h2>

            <p className="package-desc">අපගේ සැලසුම් සහගත දින 2ක උතුම් වන්දනා චාරිකාවට එක්වන්න.
              ඔබගේ ආත්මීය සුවය සහ වන්දනාමය කටයුතු වෙනුවෙන් සෑම විස්තරයක්ම අප සූදානම් කර ඇත.
            </p>

            <div className="inclusions-list">
              {inclusions.map((item, index) => (
                <div key={index} className="inclusion-item">
                  <CheckCircle size={20} className="icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="package-stats">
              <div className="stat-item">
                <ShieldCheck size={24} />
                <div>
                  <h4>100% Safe</h4>
                  <p>Certified travel agency</p>
                </div>
              </div>
              <div className="stat-item">
                <Zap size={24} />
                <div>
                  <h4>All-Inclusive</h4>
                  <p>No hidden charges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="package-pricing">
            <div className="pricing-box">
              <span className="duration">1 Night / 2 Days</span>
              <div className="price">
                <span className="currency">LKR</span>
                <span className="amount">20,000</span>
                <span className="per">/person</span>
              </div>
              <p className="price-note">* කණ්ඩායම් සඳහා විශේෂ වට්ටම්</p>
              <button className="btn-primary btn-large" onClick={handleBooking}>දැන්ම වෙන්කරවා ගන්න</button>

              <ul className="trust-badges">
                <li>ක්ෂණික තහවුරු කිරීම</li>
                <li>ආරක්ෂිත ගෙවීම් ක්‍රම</li>
                <li>නොමිලේ අවලංගු කිරීම</li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default PackageDetails;
