import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Hero2 from '../components/Hero2';
import MapaZelvamar from '../components/MapaZelvamar';
import Rooms from '../components/Rooms';
import Precios from '../components/Precios';
import CarouselCard from '../components/CarouselCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Hero2 />
      <MapaZelvamar />
      <Rooms />
      <Precios />
      <CarouselCard />
      <Contact />
      <Footer />
    </>
  );
}
