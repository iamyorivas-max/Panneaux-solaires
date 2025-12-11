import React from 'react';
import { Phone, ClipboardCheck, Hammer, Zap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Prise de contact",
    desc: "Échange téléphonique pour valider la faisabilité de votre projet.",
    icon: Phone
  },
  {
    id: 2,
    title: "Étude personnalisée",
    desc: "Visite technique gratuite et remise d'un devis détaillé.",
    icon: ClipboardCheck
  },
  {
    id: 3,
    title: "Installation",
    desc: "Pose de vos panneaux en 1 journée par nos techniciens agréés.",
    icon: Hammer
  },
  {
    id: 4,
    title: "Mise en service",
    desc: "Raccordement au réseau et activation du suivi de production.",
    icon: Zap
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-slate-400">Votre installation solaire clé en main en 4 étapes simples.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-700/50 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="relative flex flex-col items-center text-center z-10">
                <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10 group hover:border-emerald-500 transition-colors duration-300">
                  <step.icon size={32} className="text-emerald-400" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm max-w-[200px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;