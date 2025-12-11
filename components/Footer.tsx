import React from 'react';
import { Sun } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-xl mb-4">
              <Sun className="text-emerald-500" />
              <span>SolarFrance</span>
            </div>
            <p className="text-sm">
              Leader de l'installation photovoltaïque résidentielle. Certifié RGE QualiPV pour une qualité irréprochable.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#avantages" className="hover:text-emerald-500 transition-colors">Avantages</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Services</a></li>
              <li><a href="#realisations" className="hover:text-emerald-500 transition-colors">Réalisations</a></li>
              <li><a href="#tarifs" className="hover:text-emerald-500 transition-colors">Tarifs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">CGV</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>01 23 45 67 89</li>
              <li>contact@solarfrance.fr</li>
              <li>10 Avenue de l'Énergie, 75000 Paris</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-xs">
          © {new Date().getFullYear()} SolarFrance. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;