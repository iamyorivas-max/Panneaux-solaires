import React from 'react';
import { MapPin, Zap } from 'lucide-react';

const realizations = [
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80",
    title: "Villa Moderne",
    location: "Lyon (69)",
    power: "9 kWc"
  },
  {
    src: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?auto=format&fit=crop&w=800&q=80",
    title: "Maison Traditionnelle",
    location: "Bordeaux (33)",
    power: "6 kWc"
  },
  {
    src: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80",
    title: "Pavillon Récent",
    location: "Nantes (44)",
    power: "3 kWc"
  },
  {
    src: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?auto=format&fit=crop&w=800&q=80",
    title: "Rénovation Énergétique",
    location: "Toulouse (31)",
    power: "4.5 kWc"
  },
  {
    src: "https://i.pinimg.com/736x/fd/de/6f/fdde6fbebd82f75da1288f75f587c810.jpg",
    title: "Installation Sur-imposition",
    location: "Lille (59)",
    power: "6 kWc"
  },
  {
    src: "https://i.pinimg.com/1200x/e4/4d/a5/e44da5f0251f003cb6e5a3054b24e670.jpg",
    title: "Autoconsommation Totale",
    location: "Strasbourg (67)",
    power: "7.5 kWc"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="realisations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Nos Réalisations</h2>
          <p className="text-slate-600">Découvrez nos dernières installations partout en France.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {realizations.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md h-72">
              <img 
                src={item.src} 
                alt={`Installation solaire ${item.location}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center text-xs font-bold px-2 py-1 rounded bg-emerald-500 text-white">
                            <Zap size={12} className="mr-1" fill="currentColor" /> {item.power}
                        </span>
                    </div>
                    <h3 className="text-white font-bold text-xl leading-tight mb-1">{item.title}</h3>
                    <div className="flex items-center text-slate-300 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {item.location}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;