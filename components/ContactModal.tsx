import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => setSubmitted(true), 1000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative"
          onClick={e => e.stopPropagation()}
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X size={20} />
          </button>

          <div className="p-8">
            {!submitted ? (
              <>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-800">Étude solaire gratuite</h3>
                  <p className="text-slate-500 mt-2">Remplissez ce formulaire pour recevoir votre devis personnalisé sous 24h.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Prénom</label>
                      <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Jean" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Nom</label>
                      <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="Dupont" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input required type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="jean.dupont@email.com" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone</label>
                    <input required type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="06 12 34 56 78" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Adresse postale (pour l'étude d'ensoleillement)</label>
                    <input required type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="10 Rue de la Paix, 75000 Paris" />
                  </div>

                  <div className="pt-2">
                    <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-200">
                      Recevoir mon étude gratuite
                    </button>
                    <p className="text-xs text-center text-slate-400 mt-3">
                      Vos données sont confidentielles et sécurisées.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Demande reçue !</h3>
                <p className="text-slate-600 mb-6">
                  Merci de votre confiance. Un expert solaire vous contactera très prochainement pour finaliser votre étude.
                </p>
                <button onClick={onClose} className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                  Fermer
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactModal;