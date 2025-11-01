import React from 'react';

const Galerie: React.FC = () => {
  const images = [
    { id: 1, title: 'Projet 1', color: 'from-blue-400 to-blue-600' },
    { id: 2, title: 'Projet 2', color: 'from-purple-400 to-purple-600' },
    { id: 3, title: 'Projet 3', color: 'from-pink-400 to-pink-600' },
    { id: 4, title: 'Projet 4', color: 'from-green-400 to-green-600' },
    { id: 5, title: 'Projet 5', color: 'from-yellow-400 to-yellow-600' },
    { id: 6, title: 'Projet 6', color: 'from-red-400 to-red-600' },
  ];

  return (
    <section id="galerie" className="min-h-screen py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Notre Galerie
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos projets récents et laissez-vous inspirer par notre travail
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`bg-linear-to-br ${image.color} h-64 flex items-center justify-center`}>
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <h3 className="text-2xl font-bold">{image.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold">
                  Voir Plus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galerie;
