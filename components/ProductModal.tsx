
import React, { useState } from 'react';
import { CollectionItem } from '../types';

interface ProductModalProps {
  item: CollectionItem;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ item, onClose }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setMousePos({ x, y });
  };

  const handleWhatsAppInquiry = () => {
    const phoneNumber = "923202200100";
    const text = encodeURIComponent(`Assalam o Alaikum, I am interested in inquiring about "${item.title}" from your collection.`);
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white z-[110] p-2 hover:rotate-90 transition-transform duration-300"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Modal Content */}
      <div className="relative bg-[#FAFAF9] w-full max-w-6xl h-full md:h-[85vh] flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl z-[105] ring-1 ring-white/10">

        {/* Left Side: Image with Amplify/Zoom */}
        <div
          className="w-full md:w-3/5 h-[50vh] md:h-full relative overflow-hidden bg-gray-100 cursor-crosshair group"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
          onMouseMove={handleMouseMove}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full object-cover transition-transform duration-200 ${isZoomed ? 'scale-[2.5]' : 'scale-100'}`}
            style={isZoomed ? { transformOrigin: `${mousePos.x}% ${mousePos.y}%` } : {}}
          />

          {/* Zoom Instruction */}
          {!isZoomed && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white pointer-events-none font-sans">
              Hover to Amplify Detail
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-2/5 flex flex-col bg-[#FAFAF9]">
          <div className="flex-grow overflow-y-auto no-scrollbar p-8 md:p-12">
            <div className="mb-auto">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#CA8A04] font-bold mb-4 font-sans">{item.category}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight serif text-primary">{item.title}</h2>
              <div className="w-12 h-px bg-primary/20 mb-8"></div>
              <p className="text-secondary font-light leading-relaxed mb-8 italic font-serif">
                "{item.description}"
              </p>

              <div className="space-y-6">
                <h4 className="text-xs uppercase tracking-widest font-bold font-sans text-primary">Key Details</h4>
                <ul className="space-y-3">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-secondary font-light font-sans">
                      <span className="w-1.5 h-1.5 bg-[#CA8A04] rounded-full mr-4"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 pt-6 border-t border-gray-200 space-y-4 bg-[#FAFAF9]">
            <div className="flex justify-between items-center py-4 border-b border-gray-200">
              <span className="text-xs uppercase tracking-widest font-bold font-sans text-primary">Consultation</span>
              <span className="text-sm font-semibold text-[#CA8A04] font-sans">Price on Request</span>
            </div>
            <button
              onClick={handleWhatsAppInquiry}
              className="w-full bg-primary text-white py-5 text-xs uppercase tracking-[0.3em] hover:bg-black transition-colors shadow-lg font-sans"
            >
              Inquire via WhatsApp
            </button>
            <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest pt-2 font-sans">
              Worldwide Shipping Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
