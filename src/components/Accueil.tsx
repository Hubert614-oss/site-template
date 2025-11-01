import React, { useState, useEffect } from 'react';

const Accueil: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Bienvenue sur Notre Site",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Découvrez nos services exceptionnels et notre galerie de projets inspirants. Nous sommes là pour transformer vos idées en réalité.",
      gradient: "from-purple-500 via-pink-500 to-red-500",
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="accueil" className="min-h-screen pt-20 relative overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`h-full w-full bg-linear-to-br ${slide.gradient} flex items-center justify-center`}>
              <div className="container mx-auto px-6 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in max-w-5xl mx-auto leading-tight">
                  {slide.title}
                </h1>
                <div className="flex gap-4 justify-center mt-12">
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white text-gray-800 px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300 shadow-2xl font-semibold text-lg"
                  >
                    Contactez-nous
                  </button>
                  <button 
                    onClick={() => document.getElementById('galerie')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-800 transition duration-300 shadow-2xl font-semibold text-lg"
                  >
                    Voir la Galerie
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-blue-50 to-blue-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Innovation</h3>
              <p className="text-gray-600">Des solutions modernes et innovantes pour votre entreprise</p>
            </div>
            <div className="bg-linear-to-br from-purple-50 to-purple-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Créativité</h3>
              <p className="text-gray-600">Des designs uniques qui captivent votre audience</p>
            </div>
            <div className="bg-linear-to-br from-pink-50 to-pink-100 p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Performance</h3>
              <p className="text-gray-600">Des sites rapides et optimisés pour tous les appareils</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
