import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">MonSite</h3>
            <p className="text-gray-400 mt-2">© 2025 Tous droits réservés</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              Instagram
            </a>
            <a href="#" className="hover:text-blue-400 transition duration-300">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
