import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#252220] backdrop-blur-lg shadow-lg'
        : 'bg-[#252220] backdrop-blur-md shadow-md'
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center h-16 px-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex gap-2 sm:gap-4 items-center flex-shrink-0">
            <h2 
              className="font-bold text-lg sm:text-xl lg:text-2xl text-[#439a0d] cursor-pointer whitespace-nowrap" 
              onClick={() => scrollToSection('accueil')}
            >
              Logo
            </h2>
            <div className='hidden sm:flex gap-1 sm:gap-2 items-center'>
              {/* icon phone number */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#439a0d] shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.445l-1.516 1.864a11.95 11.95 0 01-5.516-5.517l1.864-1.517c.39-.27.556-.732.445-1.173L6.963 3.102a1.125 1.125 0 00-1.09-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div className='hidden lg:block'>
                <span className="text-white font-medium text-sm">+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block flex-1 mx-8">
            <ul className="flex gap-4 xl:gap-6 justify-center items-center">
              <li>
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="text-white hover:text-[#439a0d] text-sm xl:text-base font-medium transition-colors duration-300 relative group cursor-pointer whitespace-nowrap"
                >
                  Accueil
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439a0d] group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('apropos')}
                  className="text-white hover:text-[#439a0d] text-sm xl:text-base font-medium transition-colors duration-300 relative group cursor-pointer whitespace-nowrap"
                >
                  Le Traiteur
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439a0d] group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('prestations')}
                  className="text-white hover:text-[#439a0d] text-sm xl:text-base font-medium transition-colors duration-300 relative group cursor-pointer whitespace-nowrap"
                >
                  Prestations
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439a0d] group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('galerie')}
                  className="text-white hover:text-[#439a0d] text-sm xl:text-base font-medium transition-colors duration-300 relative group cursor-pointer whitespace-nowrap"
                >
                  Galerie
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439a0d] group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('temoignages')}
                  className="text-white hover:text-[#439a0d] text-sm xl:text-base font-medium transition-colors duration-300 relative group cursor-pointer whitespace-nowrap"
                >
                  Témoignages
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439a0d] group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-[#439a0d] text-sm xl:text-base font-medium transition-colors duration-300 relative group cursor-pointer whitespace-nowrap"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#439a0d] group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            </ul>
          </nav>

          {/* CTA Button - Desktop only */}
          <div className='hidden lg:block shrink-0'>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-4 lg:px-6 py-2 text-sm bg-transparent border border-[#439a0d] text-white rounded-full hover:bg-[#439a0d]/10 transition-colors duration-300 whitespace-nowrap cursor-pointer animate-pulse"
            >
              Réserver
            </button>
          </div>

          {/* Mobile CTA & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile CTA Button */}
            <button 
              onClick={() => scrollToSection('contact')} 
              className="px-3 py-2 text-sm bg-transparent border border-[#439a0d] text-white rounded-full hover:bg-[#439a0d]/10 transition-colors duration-300 whitespace-nowrap cursor-pointer animate-pulse"
            >
              Réserver
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="flex flex-col gap-1.5 p-2 shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-[500px] pb-6' : 'max-h-0'
            }`}
        >
          <ul className="flex flex-col gap-3 px-6">
            <li>
              <button
                onClick={() => scrollToSection('accueil')}
                className="text-white hover:text-[#439a0d] font-medium transition-colors duration-300 w-full text-left cursor-pointer py-2 border-b border-gray-700"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('apropos')}
                className="text-white hover:text-[#439a0d] font-medium transition-colors duration-300 w-full text-left cursor-pointer py-2 border-b border-gray-700"
              >
                Le Traiteur
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('prestations')}
                className="text-white hover:text-[#439a0d] font-medium transition-colors duration-300 w-full text-left cursor-pointer py-2 border-b border-gray-700"
              >
                Prestations
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('galerie')}
                className="text-white hover:text-[#439a0d] font-medium transition-colors duration-300 w-full text-left cursor-pointer py-2 border-b border-gray-700"
              >
                Galerie
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('temoignages')}
                className="text-white hover:text-[#439a0d] font-medium transition-colors duration-300 w-full text-left cursor-pointer py-2 border-b border-gray-700"
              >
                Témoignages
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#439a0d] font-medium transition-colors duration-300 w-full text-left cursor-pointer py-2 border-b border-gray-700"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
