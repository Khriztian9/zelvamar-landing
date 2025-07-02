import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import CarouselCard from '../components/CarouselCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero2 from '../components/Hero2';
import MapaZelvamar from '../components/MapaZelvamar';
import Precios from '../components/Precios';





export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <MapaZelvamar />



   <div style={{ overflow: 'hidden', lineHeight: 0 }}>
      <svg viewBox="0 0 1440 320" style={{ width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path
          fill="#000"
          d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>

      <Rooms />

      <div style={{ overflow: 'hidden', lineHeight: 0 }}>
      <svg viewBox="0 0 1440 320" style={{ width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path
          fill="#000"
          d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>


      <Precios />


    <div style={{ overflow: 'hidden', lineHeight: 0 }}>
      <svg viewBox="0 0 1440 320" style={{ width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path
          fill="#000"
          d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>

      <CarouselCard />

       <div style={{ overflow: 'hidden', lineHeight: 0 }}>
      <svg viewBox="0 0 1440 320" style={{ width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path
          fill="#000"
          d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>

      <Contact />
      <Footer />
    </>
  );
}
