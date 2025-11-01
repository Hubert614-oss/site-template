import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold cursor-pointer" onClick={() => scrollToSection('accueil')}>
            MonSite
          </div>
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('accueil')}
                className="hover:text-blue-200 transition duration-300"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('galerie')}
                className="hover:text-blue-200 transition duration-300"
              >
                Galerie
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="hover:text-blue-200 transition duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
