
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/70 backdrop-blur-lg py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-gold transition-colors">Home</a>
          <a href="#collection" className="hover:text-gold transition-colors">Collection</a>
        </nav>

        <div className="text-center">
          <h1 className="text-2xl md:text-3xl tracking-[0.3em] font-bold uppercase transition-all serif text-white">
            Abida Dada
          </h1>
          <p className="text-[10px] tracking-[0.5em] uppercase mt-1 text-[#CA8A04]">Collection</p>
        </div>

        <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#about" className="hover:text-gold transition-colors">Our Story</a>
          <a href="#footer" className="hover:text-gold transition-colors">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-primary mix-blend-difference">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
