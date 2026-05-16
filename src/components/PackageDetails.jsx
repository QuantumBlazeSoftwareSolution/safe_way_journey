import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section className="package-details section-padding" id="package">
      <div className="container">
        <div className="package-card glass">
          <div className="package-content">
            <div className="package-tag">Special Pilgrimage Package</div>
            <h2 className="package-title">Anuradhapura Atamasthana <br /> <span className="text-gradient">Premium Experience</span></h2>
            <p className="package-desc">
              Join us for a soul-stirring 2-day journey to the ancient capital. 
              We've meticulously planned every detail so you can focus on your spiritual well-being.
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
                <span className="amount">15,000</span>
                <span className="per">/person</span>
              </div>
              <p className="price-note">* Group discounts available for families</p>
              <button className="btn-primary btn-large">BOOK YOUR JOURNEY</button>
              <ul className="trust-badges">
                <li>Instant Confirmation</li>
                <li>Secure Payment</li>
                <li>Free Cancellation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;
