import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import MapaZelvamar from '../components/MapaZelvamar';
import Rooms from '../components/Rooms';
import Precios from '../components/Precios';
import CarouselCard from '../components/CarouselCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';

export default function Home() {
  return (
    <>
      <Navbar />
      <ReactFullpage
        navigation
        scrollingSpeed={700}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Hero />
            </div>
            <div className="section">
              <Hero2 />
            </div>
            <div className="section">
              <MapaZelvamar />
            </div>
            <div className="section">
              <Rooms />
            </div>
            <div className="section">
              <Precios />
            </div>
            <div className="section">
              <CarouselCard />
            </div>
            <div className="section">
              <Contact />
            </div>
            <div className="section">
              <Footer />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}
