import React, { useState, useEffect } from 'react';

interface Notification {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    // Animation au scroll pour les éléments
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message: string, type: 'success' | 'error' | 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation côté client
    if (!formData.nom || !formData.email || !formData.message) {
      showNotification('Veuillez remplir tous les champs', 'error');
      return;
    }

    if (!isValidEmail(formData.email)) {
      showNotification('Veuillez saisir un email valide', 'error');
      return;
    }

    setIsSubmitting(true);

    // TODO: Remplacer par un vrai appel API
    // Pour l'instant, simulation d'envoi
    try {
      // Simulation d'un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      showNotification('Message envoyé avec succès !', 'success');
      setFormData({ nom: '', email: '', message: '' });
    } catch {
      showNotification('Erreur lors de l\'envoi. Réessayez plus tard.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getNotificationClasses = (type: string) => {
    const baseClasses = "fixed top-5 right-5 max-w-md z-[9999] p-4 rounded-lg shadow-2xl flex items-center gap-3 animate-slide-in";
    const typeClasses = {
      success: "bg-green-500 text-white",
      error: "bg-red-500 text-white",
      info: "bg-blue-500 text-white"
    };
    return `${baseClasses} ${typeClasses[type as keyof typeof typeClasses]}`;
  };

  return (
    <>
      {/* Notification */}
      {notification && (
        <div className={getNotificationClasses(notification.type)}>
          <span className="flex-1">{notification.message}</span>
          <button
            onClick={() => setNotification(null)}
            className="text-white hover:text-gray-200 text-2xl font-bold leading-none transition-colors"
            aria-label="Close notification"
          >
            ×
          </button>
        </div>
      )}

      {/* Section Contact */}
      <section id="contact" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Contactez-nous
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-16 rounded"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">
            {/* Informations de contact */}
            <div className="space-y-6">
              {/* Adresse */}
              <div className="flex items-start gap-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <div className="shrink-0">
                  <i className="fas fa-map-marker-alt text-blue-500 text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Adresse</h4>
                  <p className="text-gray-600 leading-relaxed">
                    123 Rue de la République<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
                <div className="shrink-0">
                  <i className="fas fa-phone text-blue-500 text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Téléphone</h4>
                  <p className="text-gray-600 leading-relaxed">+33 1 23 45 67 89</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
                <div className="shrink-0">
                  <i className="fas fa-envelope text-blue-500 text-2xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">Email</h4>
                  <p className="text-gray-600 leading-relaxed">contact@monsite.fr</p>
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              {/* Nom */}
              <div className="mb-6">
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slide-in 0.3s ease;
        }
      `}</style>
    </>
  );
};

export default Contact;
