import React from 'react';
import { Sun, FileText, Wrench, BarChart3 } from 'lucide-react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    title: "Installation Photovoltaïque",
    description: "Pose complète de panneaux premium monocristallins sur toiture ou au sol.",
    icon: Sun
  },
  {
    title: "Étude & Simulation",
    description: "Analyse précise de l'ensoleillement et calcul de rentabilité personnalisé.",
    icon: FileText
  },
  {
    title: "Maintenance & SAV",
    description: "Suivi de production en temps réel et intervention rapide en cas de besoin.",
    icon: Wrench
  },
  {
    title: "Audit Énergétique",
    description: "Optimisation globale de votre consommation pour maximiser vos économies.",
    icon: BarChart3
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-semibold tracking-wider uppercase text-sm">Nos expertises</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">Un accompagnement complet</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-6 rounded-2xl border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300">
              <div className="w-14 h-14 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                <service.icon className="text-slate-600 group-hover:text-white transition-colors duration-300" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-500">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;