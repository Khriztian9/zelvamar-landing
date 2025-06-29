import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

   <div style={{ overflow: 'hidden', lineHeight: 0 }}>
      <svg viewBox="0 0 1440 320" style={{ width: '100%', height: '100px' }} preserveAspectRatio="none">
        <path
          fill="#000"
          d="M0,160 C480,260 960,60 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>

      <Rooms />

      <Carousel />

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
