import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

const reviews: Testimonial[] = [
  {
    id: 1,
    name: "Michel & Sophie L.",
    location: "Lyon (69)",
    rating: 5,
    text: "Installation impeccable réalisée en une journée. L'équipe a été très pédagogue et le dossier administratif géré de A à Z. Nos factures ont déjà baissé de 50% !",
    avatar: "https://picsum.photos/seed/user1/100/100"
  },
  {
    id: 2,
    name: "Jean-Pierre D.",
    location: "Bordeaux (33)",
    rating: 5,
    text: "J'hésitais depuis longtemps, mais leur étude de rentabilité m'a convaincu. Matériel de qualité et poseurs très soigneux. Je recommande vivement.",
    avatar: "https://picsum.photos/seed/user2/100/100"
  },
  {
    id: 3,
    name: "Claire M.",
    location: "Nantes (44)",
    rating: 5,
    text: "Un vrai plaisir de produire sa propre électricité. L'application de suivi est top pour voir sa production en direct. Service client très réactif.",
    avatar: "https://picsum.photos/seed/user3/100/100"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Ce que disent nos clients</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="flex text-amber-400">
                {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={20} />)}
            </div>
            <span className="font-bold text-slate-700">4.9/5 sur Google Avis</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full">
              <div className="flex items-center gap-4 mb-6">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100" />
                <div>
                  <h4 className="font-bold text-slate-800">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.location}</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-4">
                 {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-slate-600 italic flex-grow">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;