
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#0c0a09] text-white pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-20">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase mb-6 serif">Abida Dada</h2>
          <p className="text-gray-400 text-sm leading-relaxed font-light font-sans">
            Bringing the essence of Pakistani bridal couture to the world. Each piece is a masterpiece of tradition and modern flair.
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#CA8A04] font-sans">Connect</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light font-sans">
            <li>
              <a href="https://www.instagram.com/abidadada" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            </li>
            <li>
              <a href="https://www.facebook.com/abidadada" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h4 className="text-xs uppercase tracking-widest font-bold text-[#CA8A04] font-sans">Boutique</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-light font-sans">
            <li>By Appointment Only</li>
            <li>G 29, Block 8 Clifton, Karachi, 75600, Pakistan</li>
            <li>+92 320 2200100</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest font-sans">
        <p>&copy; 2024 Abida Dada. All Rights Reserved.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Shipping</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
