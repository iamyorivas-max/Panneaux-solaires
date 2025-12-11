import React, { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenModal: (offerName?: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-1.5 rounded-lg">
            <Sun className="text-white w-6 h-6" />
          </div>
          <span className={`font-bold text-xl ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
            SolarFrance
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['Avantages', 'Services', 'Réalisations', 'Tarifs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className={`text-sm font-medium hover:text-emerald-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
            onClick={() => onOpenModal()}
            className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
              isScrolled 
                ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                : 'bg-white text-emerald-700 hover:bg-slate-100'
            }`}
          >
            Devis Gratuit
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4">
           {['Avantages', 'Services', 'Réalisations', 'Tarifs'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-slate-600 font-medium py-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button 
            onClick={() => {
              onOpenModal();
              setMobileMenuOpen(false);
            }}
            className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold mt-2"
          >
            Obtenir un devis gratuit
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;