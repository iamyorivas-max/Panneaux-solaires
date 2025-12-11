import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    question: "Quelle est la rentabilité d'une installation solaire ?",
    answer: "Le retour sur investissement se situe généralement entre 7 et 10 ans selon votre région et votre consommation. Avec la hausse des prix de l'énergie, cette durée tend à raccourcir. Les panneaux ont ensuite une durée de vie supérieure à 30 ans."
  },
  {
    question: "Combien de temps dure l'installation ?",
    answer: "Pour une installation standard (jusqu'à 9kWc), la pose s'effectue généralement en une seule journée. Nous nous occupons ensuite de la mise en service."
  },
  {
    question: "Quelle est la durée de la garantie ?",
    answer: "Nos panneaux bénéficient d'une garantie constructeur de 25 ans sur la performance (85% de production garantie à 25 ans) et sur le matériel."
  },
  {
    question: "Faut-il nettoyer les panneaux ?",
    answer: "Les panneaux sont autonettoyants avec la pluie s'ils sont inclinés à plus de 15°. Toutefois, un nettoyage à l'eau claire tous les 2-3 ans peut optimiser la production, surtout en zone poussiéreuse."
  },
  {
    question: "Puis-je revendre mon électricité ?",
    answer: "Oui, vous pouvez revendre le surplus non consommé à EDF OA (Obligation d'Achat) à un tarif fixé par l'État et garanti pendant 20 ans."
  },
  {
    question: "Que se passe-t-il s'il n'y a pas de soleil ?",
    answer: "Les panneaux produisent de l'énergie grâce à la luminosité, même par temps nuageux (bien que la production soit réduite). La nuit, vous basculez automatiquement sur le réseau électrique classique."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Questions Fréquentes</h2>
          <p className="text-slate-600">Tout ce que vous devez savoir avant de vous lancer.</p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="font-semibold text-slate-800 pr-8">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-emerald-500" />
                ) : (
                  <ChevronDown className="text-slate-400" />
                )}
              </button>
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;