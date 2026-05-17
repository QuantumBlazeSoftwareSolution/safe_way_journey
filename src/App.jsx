
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Destinations from './components/Destinations';
import PackageDetails from './components/PackageDetails';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Destinations />
      <PackageDetails />
      <Footer />
    </div>
  );
}

export default App;
