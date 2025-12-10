import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Courses from '@/components/home/Courses';
import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Courses />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
