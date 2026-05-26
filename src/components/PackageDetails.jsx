import { useState, useEffect, useRef } from 'react';
import { CheckCircle, ShieldCheck, Zap, Play, Pause } from 'lucide-react';
import './PackageDetails.css';

const inclusions = [
  "Round-trip luxury AC transport",
  "Professional spiritual guide",
  "1 Night stay in Premium AC Hotel",
  "All 5 meals included (Local & International)",
  "Entrance tickets to all sites",
  "Refreshments during the journey",
  "Insurance coverage for all pilgrims",
  "Special pooja arrangements"
];

const PackageDetails = () => {
  const handleBooking = () => {
    const formattedPhone = "94711105959"; // Sri Lanka country code prefix for WA
    const message = encodeURIComponent("Hi Safe Way Journey, I would like to book a pilgrimage tour!");
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, "_blank");
  };

  const [isVoicePlaying, setIsVoicePlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const waveformRef = useRef(null);

  const waveHeights = [
    12, 22, 32, 18, 8, 28, 42, 22, 12, 28, 
    38, 18, 12, 32, 42, 28, 18, 22, 32, 12, 
    18, 28, 38, 22, 12, 32, 42, 18, 22, 12
  ]; // 30 bars representing the waveform

  useEffect(() => {
    audioRef.current = new Audio("/audio/safe-way-journey-audio-clip.mp3");
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsVoicePlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    if (audio.duration) {
      setDuration(audio.duration);
    }

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const toggleVoicePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isVoicePlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.log("Voice audio play failed:", err));
    }
    setIsVoicePlaying(!isVoicePlaying);
  };

  const handleWaveformClick = (e) => {
    const audio = audioRef.current;
    const waveform = waveformRef.current;
    if (!audio || !waveform || duration === 0) return;

    const rect = waveform.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickRatio = Math.min(Math.max(clickX / rect.width, 0), 1);
    
    audio.currentTime = clickRatio * duration;
    setCurrentTime(audio.currentTime);
  };

  const formatTime = (secs) => {
    if (isNaN(secs)) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const activeBarIndex = Math.floor((progress / 100) * waveHeights.length);

  return (
    <section className="package-details section-padding" id="package">
      <div className="container">
        <div className="package-card glass">
          <div className="package-content">
            <div className="package-tag">Special Pilgrimage Package</div>
            <h2 className="package-title sinhala-font">අනුරාධපුර අටමස්ථාන <br /> <span className="text-gradient">විශිෂ්ට වන්දනා චාරිකාව</span></h2>

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

              {/* Premium Voice Tour Player */}
              <div className="voice-player-container">
                <h4 className="voice-player-title">🎙️ ශ්‍රව්‍ය චාරිකා විස්තරය (Voice Guide)</h4>
                <div className="voice-player">
                  <button className="voice-play-btn" onClick={toggleVoicePlay} aria-label={isVoicePlaying ? "Pause Voice Guide" : "Play Voice Guide"}>
                    {isVoicePlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
                  </button>
                  <div 
                    className="voice-waveform" 
                    ref={waveformRef} 
                    onClick={handleWaveformClick}
                  >
                    {waveHeights.map((height, i) => {
                      const isActive = i <= activeBarIndex;
                      return (
                        <div 
                          key={i} 
                          className={`wave-bar ${isActive ? 'active' : ''}`} 
                          style={{ height: `${height}px` }}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="voice-time">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default PackageDetails;
