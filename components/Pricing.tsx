import React from 'react';
import { Check } from 'lucide-react';
import { PricingTier } from '../types';

const tiers: PricingTier[] = [
  {
    name: "Essentiel",
    power: "3 kWc",
    price: "À partir de 8 500€*",
    features: [
      "8 Panneaux Premium",
      "Onduleur centralisé",
      "Application de suivi",
      "Garantie 25 ans",
      "Démarches administratives"
    ],
    recommended: false
  },
  {
    name: "Premium",
    power: "6 kWc",
    price: "À partir de 14 000€*",
    features: [
      "16 Panneaux Premium Black",
      "Micro-onduleurs Enphase",
      "Application de suivi avancée",
      "Garantie 25 ans",
      "Démarches administratives",
      "Optimiseurs de puissance"
    ],
    recommended: true
  },
  {
    name: "Autonomie +",
    power: "9 kWc + Batterie",
    price: "Sur devis",
    features: [
      "24 Panneaux Haute Performance",
      "Batterie de stockage virtuelle",
      "Gestionnaire d'énergie intelligent",
      "Garantie 25 ans",
      "Démarches administratives",
      "Maintenance prioritaire"
    ],
    recommended: false
  }
];

interface PricingProps {
  onOpenModal: (offerName?: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenModal }) => {
  return (
    <section id="tarifs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Nos offres clés en main</h2>
          <p className="text-slate-600">Des solutions transparentes adaptées à votre consommation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 transition-all ${
                tier.recommended 
                  ? 'bg-white border-2 border-emerald-500 shadow-xl scale-105 z-10' 
                  : 'bg-slate-50 border border-slate-200 hover:shadow-lg'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  LE PLUS POPULAIRE
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{tier.name}</h3>
                <div className="text-3xl font-extrabold text-emerald-600 mb-2">{tier.power}</div>
                <div className="text-sm text-slate-500">{tier.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-slate-600">
                    <Check size={18} className="text-emerald-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => onOpenModal(`${tier.name} (${tier.power})`)}
                className={`w-full py-3 rounded-xl font-bold transition-colors ${
                  tier.recommended 
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200' 
                    : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-600'
                }`}
              >
                Demander un devis
              </button>
              
              <div className="mt-4 text-center">
                 <p className="text-[10px] text-slate-400">*Prix indicatif aides non déduites</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;