import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
          {/* Section 1: À propos */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2 text-blue-400">
              <i className="fas fa-gem"></i>
              <span>MonSite</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Votre partenaire digital de confiance pour tous vos projets web et mobiles.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-gray-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Section 2: Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Développement Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Applications Mobile
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  SEO & Marketing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-blue-400"></i>
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <span>contact@monsite.fr</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} MonSite. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
