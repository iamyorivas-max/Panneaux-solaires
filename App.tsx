import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySolar from './components/WhySolar';
import Services from './components/Services';
import Process from './components/Process';
import Subventions from './components/Subventions';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <WhySolar />
        <Services />
        <Process />
        <Subventions />
        <Gallery />
        <Testimonials />
        <Pricing onOpenModal={openModal} />
        <FAQ />
        <FinalCTA onOpenModal={openModal} />
      </main>

      <Footer />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;