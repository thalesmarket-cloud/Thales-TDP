import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  User, 
  Mail, 
  Phone, 
  Building2, 
  ChevronDown, 
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  MapPin
} from 'lucide-react';
import { SecureShield, AnimatedBadge } from './VisualElements.tsx';

type ServiceOption = 
  | 'Demander un devis'
  | 'Prendre un rendez-vous'
  | 'Demander une démonstration';

export const LeadFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    city: '',
    service: '' as ServiceOption | ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // --- COLLEZ VOTRE LIEN /EXEC CI-DESSOUS ---
    const scriptUrl = "https://script.google.com/macros/s/AKfycbz7ljooB_3aKSnTc9cHs2F0WIrZijZUrKuvUruSiiAWqNEozUgPUUwd9eR2BlhH07aoTQ/exec";
    // ------------------------------------------
    
    try {
      if (scriptUrl && scriptUrl !== 'MY_APPS_SCRIPT_URL') {
        // We use fetch with mode no-cors for simple Google App Script submissions if needed, 
        // but standard POST with JSON is preferred if script is configured for it.
        const response = await fetch(scriptUrl, {
          method: 'POST',
          mode: 'no-cors', // Common for Apps Script to avoid CORS preflight issues in simple setups
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        // Note: with no-cors, we can't read the response, so we assume success if no error thrown
      } else {
        // Fallback or demo mode
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Données du formulaire (Mode Démo) :", formData);
      }
      
      setSuccess(true);
    } catch (error) {
      console.error("Erreur d'envoi :", error);
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-corporate-blue focus:border-transparent transition-all duration-200";
  const labelClasses = "block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2 ml-1";

  if (success) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-12 text-center max-w-xl mx-auto border border-blue-50"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="text-green-600" size={32} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Demande envoyée !</h3>
        <p className="text-slate-600">
          Merci pour votre confiance. Un expert de <strong>Thalès Informatique</strong> vous recontactera sous 24h ouvrées pour votre projet.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="mt-8 text-corporate-blue font-medium hover:underline flex items-center justify-center w-full"
        >
          Envoyer une autre demande
        </button>
      </motion.div>
    );
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <AnimatedBadge />
          <h1 className="text-4xl md:text-6xl font-bold text-corporate-dark leading-[1.1] mb-6">
            Télédéclaration simplifée & conformité
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
            Déclarez vos délais de paiement en toute simplicité et restez 100% conforme avec IntuiEDI
          </p>

          <div className="mt-12 flex items-center space-x-8 opacity-70 grayscale transition-all hover:grayscale-0">
             {/* Trusted Labels */}
             <div className="text-sm font-bold uppercase tracking-widest text-slate-400">Partenaire de confiance</div>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="relative z-20"
        >
          <div className="bg-white rounded-3xl shadow-[0_32px_100px_-20px_rgba(0,69,139,0.15)] p-8 md:p-10 border border-slate-100 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-corporate-dark mb-2 text-center w-full">Parlez à un conseiller</h3>
            <p className="text-slate-500 text-sm mb-8 text-center w-full leading-snug">Remplissez le formulaire pour une réponse personnalisée</p>
            
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="fullName" className={labelClasses}>Nom Complet</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="text" 
                      id="fullName"
                      placeholder="Ahmed Alaoui"
                      className={`${inputClasses} pl-12`}
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email Professionnel</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="email" 
                      id="email"
                      placeholder="a.alaoui@entreprise.ma"
                      className={`${inputClasses} pl-12`}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className={labelClasses}>Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="tel" 
                      id="phone"
                      placeholder="+212 6 12 34 56 78"
                      className={`${inputClasses} pl-12`}
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className={labelClasses}>Société <span className="text-slate-400 italic normal-case">(Optionnel)</span></label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      type="text" 
                      id="company"
                      placeholder="Nom de l'entreprise"
                      className={`${inputClasses} pl-12`}
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="city" className={labelClasses}>Ville</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input 
                      required
                      type="text" 
                      id="city"
                      placeholder="Casablanca, Rabat, Tanger..."
                      className={`${inputClasses} pl-12`}
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className={labelClasses}>Vous souhaitez :</label>
                  <div className="relative">
                    <select 
                      required
                      id="service"
                      className={`${inputClasses} appearance-none cursor-pointer`}
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value as ServiceOption})}
                    >
                      <option value="" disabled>Sélectionnez une option</option>
                      <option value="Demander un devis">Demander un devis</option>
                      <option value="Prendre un rendez-vous">Prendre un rendez-vous</option>
                      <option value="Demander une démonstration">Demander une démonstration</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  disabled={isSubmitting}
                  type="submit" 
                  className="w-full bg-corporate-blue hover:bg-corporate-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Je souhaite être contacté</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-col items-center">
                 <SecureShield />
                 <p className="text-[10px] text-slate-400 mt-6 text-center">
                   En soumettant ce formulaire, vous acceptez que Thalès Informatique traite vos données pour répondre à votre demande. Votre confidentialité est notre priorité.
                 </p>
              </div>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
