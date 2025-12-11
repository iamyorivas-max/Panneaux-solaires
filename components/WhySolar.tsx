import React from 'react';
import { TrendingDown, Leaf, Wallet, Home } from 'lucide-react';

const benefits = [
  {
    title: "Réduction des factures",
    description: "Réduisez vos factures d'électricité jusqu'à 70% grâce à l'autoconsommation directe.",
    icon: TrendingDown,
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Énergie propre",
    description: "Produisez une électricité verte et locale, sans émission de CO2, pour un avenir durable.",
    icon: Leaf,
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "Aides de l'État",
    description: "Bénéficiez de la prime à l'autoconsommation et de la TVA réduite à 10%.",
    icon: Wallet,
    color: "bg-amber-100 text-amber-600"
  },
  {
    title: "Valorisation du bien",
    description: "Une maison autonome en énergie se revend plus cher et plus vite sur le marché.",
    icon: Home,
    color: "bg-purple-100 text-purple-600"
  }
];

const WhySolar: React.FC = () => {
  return (
    <section id="avantages" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Pourquoi choisir le solaire ?</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Un investissement rentable et écologique qui transforme votre habitation en centrale d'énergie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className={`w-12 h-12 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1920&auto=format&fit=crop" 
              alt="Panneaux photovoltaïques au coucher du soleil" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent flex flex-col justify-end p-8">
              <h4 className="text-white text-2xl font-bold mb-2">L'indépendance énergétique</h4>
              <p className="text-white/90">Devenez producteur de votre propre énergie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySolar;