
import React from 'react';

const Story: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 aspect-[4/5] overflow-hidden">
            <img
              src="/assets/story/heritage.jpg"
              alt="Artisan Craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-10 -left-10 w-full h-full border border-[#CA8A04]/20 -z-10 hidden md:block"></div>
          <div className="absolute -bottom-6 -right-6 bg-[#faf9f6]/90 backdrop-blur-sm p-8 hidden md:block z-20 shadow-xl border border-white/50">
            <p className="serif italic text-2xl text-[#CA8A04]">"Tradition woven into every thread."</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight serif text-white">Craftsmanship <br /> & Heritage</h2>
          <div className="w-20 h-px bg-[#CA8A04]"></div>
          <p className="text-gray-400 leading-relaxed font-light text-lg">
            Abida Dada is a celebration of South Asian couture, where ancient techniques meet contemporary design. Our artisans spend hundreds of hours on a single bridal piece, using age-old techniques like Zardozi, Vasli, and Gota work.
          </p>
          <p className="text-gray-400 leading-relaxed font-light text-lg">
            Each ensemble is a labor of love, designed to make every bride feel like royalty on her most momentous day. We don't just create clothes; we create heirlooms.
          </p>
          <div className="pt-4">
            <a
              href="https://www.instagram.com/abidadada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 group"
            >
              <span className="text-sm uppercase tracking-[0.3em] font-bold">Follow our Journey</span>
              <div className="w-12 h-px bg-black group-hover:w-20 transition-all"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
