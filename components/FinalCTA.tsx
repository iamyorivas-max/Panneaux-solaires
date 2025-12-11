import React from 'react';

interface FinalCTAProps {
  onOpenModal: (offerName?: string) => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="relative py-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/165/1920/800" 
          alt="Coucher de soleil maison solaire" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Prêt à réduire vos factures d’électricité ?
        </h2>
        <p className="text-slate-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Rejoignez plus de 500 foyers qui nous ont fait confiance cette année. 
          Étude gratuite et sans engagement.
        </p>
        <button 
          onClick={() => onOpenModal()}
          className="px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all transform hover:-translate-y-1"
        >
          Obtenir votre étude gratuite en 2 minutes
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;