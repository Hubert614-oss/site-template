import React, { useEffect } from 'react';

const Accueil: React.FC = () => {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 70;
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Section Hero / Accueil */}
      <section 
        id="accueil" 
        className="min-h-screen flex items-center justify-center text-center text-white relative overflow-hidden pt-20 px-6 bg-linear-to-br from-indigo-600 via-purple-600 to-purple-700"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <polygon fill="white" points="0,1000 1000,0 1000,1000"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Bienvenue sur MonSite
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-delay-1">
            Votre partenaire de confiance pour tous vos projets
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-fade-in-delay-2">
            <button
              onClick={() => scrollToSection('apropos')}
              className="bg-blue-500 hover:bg-transparent border-2 border-blue-500 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Découvrir
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent hover:bg-white border-2 border-white text-white hover:text-gray-800 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      {/* Section Services */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            Nos Services
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-16 rounded"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-laptop-code text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Développement Web</h3>
              <p className="text-gray-600 leading-relaxed">
                Création de sites web modernes et responsives adaptés à vos besoins.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-mobile-alt text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Applications Mobile</h3>
              <p className="text-gray-600 leading-relaxed">
                Développement d'applications mobiles natives et cross-platform.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="w-20 h-20 bg-linear-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-search text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">SEO & Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimisation pour les moteurs de recherche et stratégies marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section id="apropos" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texte */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                À propos de nous
              </h2>
              <div className="w-20 h-1 bg-blue-500 mb-8 rounded"></div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nous sommes une équipe passionnée de professionnels dédiés à la création 
                de solutions digitales innovantes. Avec plus de 5 ans d'expérience dans 
                le domaine, nous accompagnons nos clients dans leur transformation numérique.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700 font-medium">Expertise technique reconnue</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700 font-medium">Accompagnement personnalisé</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700 font-medium">Support technique 24/7</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-check-circle text-green-500 text-xl"></i>
                  <span className="text-gray-700 font-medium">Solutions sur mesure</span>
                </div>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Parlons de votre projet
              </button>
            </div>

            {/* Image */}
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Notre équipe"
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease;
        }

        .animate-fade-in-delay-1 {
          animation: fade-in 1s ease 0.2s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease 0.4s both;
        }
      `}</style>
    </>
  );
};

export default Accueil;
