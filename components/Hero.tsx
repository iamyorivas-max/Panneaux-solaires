import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sun, CheckCircle } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1920&auto=format&fit=crop" 
          alt="Panneaux solaires sur un toit français" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-slate-900/70 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center md:text-left pt-16">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-100 text-sm font-semibold mb-6 backdrop-blur-sm">
              <Sun className="w-4 h-4 inline-block mr-2" />
              Leader de l'énergie verte en France
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Passez à l’énergie solaire et <span className="text-emerald-400">réduisez vos factures</span> dès maintenant
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
              Installation professionnelle de panneaux photovoltaïques partout en France. 
              Profitez d'une énergie propre et durable tout en valorisant votre patrimoine.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button 
              onClick={onOpenModal}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-emerald-500/25 transform hover:-translate-y-1"
            >
              Obtenir un devis gratuit
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl backdrop-blur-md border border-white/20 transition-all">
              Être rappelé rapidement
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start items-center text-white/80 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Certifié RGE QualiPV</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>Garantie 25 ans</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-emerald-400" />
              <span>Installation Premium</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;