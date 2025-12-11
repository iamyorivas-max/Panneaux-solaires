import React from 'react';
import { Check, Info } from 'lucide-react';

const Subventions: React.FC = () => {
  return (
    <section id="aides" className="py-20 bg-emerald-50/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Aides & Subventions de l'État en <span className="text-emerald-600">{new Date().getFullYear()}</span>
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              L'État français encourage la transition énergétique. Nous nous occupons de toutes les démarches administratives pour vous faire bénéficier du maximum d'aides.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit">
                   <Check size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Prime à l'autoconsommation</h4>
                  <p className="text-slate-500 text-sm">Jusqu'à 430€ par kWc installé, versée en une fois.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit">
                   <Check size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">TVA réduite à 10%</h4>
                  <p className="text-slate-500 text-sm">Applicable sur le matériel et l'installation pour les puissances ≤ 3kWc.</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl shadow-sm border border-emerald-100 flex gap-4">
                <div className="mt-1 bg-emerald-100 p-2 rounded-full h-fit">
                   <Check size={20} className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Obligation d'Achat (EDF OA)</h4>
                  <p className="text-slate-500 text-sm">Vendez votre surplus d'électricité à un tarif garanti pendant 20 ans.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                    <Info className="text-emerald-500" />
                    <h3 className="text-xl font-bold text-slate-800">Exemple concret</h3>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-slate-600">Installation 6 kWc</span>
                        <span className="font-bold text-slate-800">~14 000 €</span>
                    </div>
                    <div className="flex justify-between items-center text-emerald-600">
                        <span>Prime à l'investissement</span>
                        <span className="font-bold">- 1 680 €</span>
                    </div>
                    <div className="flex justify-between items-center text-emerald-600">
                        <span>Revente surplus (20 ans)</span>
                        <span className="font-bold">~ 4 500 €</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 mt-4">
                         <div className="flex justify-between items-center">
                            <span className="text-lg font-bold text-slate-800">Coût réel final</span>
                            <span className="text-xl font-bold text-emerald-600">Super Rentable</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-2 italic">Estimations basées sur les moyennes nationales.</p>
                    </div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute top-10 -right-4 w-full h-full bg-emerald-200/50 rounded-2xl -z-0 blur-xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Subventions;