import { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(() => new Audio());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    import('hls.js').then(({ default: Hls }) => {
      const audioUrl = "/audio/hls/playlist.m3u8";
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(audioUrl);
        hls.attachMedia(audio);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          audio.currentTime = 3;
        });
      } else if (audio.canPlayType('application/vnd.apple.mpegurl')) {
        audio.src = audioUrl;
        audio.addEventListener('loadedmetadata', () => {
          audio.currentTime = 3;
        });
      }
    });

    audio.loop = true;

    return () => {
      audio.pause();
    };
  }, [audio]);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.log("Audio play failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <img src="/assets/logo.png" alt="Safe Way Journey Logo" className="logo-img" />
          <span className="logo-text">Safe Way Journey</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#package">Package</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="nav-actions">
          <button 
            className={`btn-audio ${isPlaying ? 'playing' : ''}`}
            onClick={toggleAudio}
            title={isPlaying ? "Pause Music" : "Play Music"}
          >
            {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
          </button>
          <button 
            className="btn-primary" 
            onClick={() => window.open("https://wa.me/94711105959?text=Hi%20Safe%20Way%20Journey%2C%20I%20would%20like%20to%20book%20a%20pilgrimage%20tour!", "_blank")}
          >
            Book Now
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
