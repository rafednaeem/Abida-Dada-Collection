
import React from 'react';
import { CollectionItem } from '../types';

interface GalleryProps {
  items: CollectionItem[];
  onItemClick: (item: CollectionItem) => void;
}

const Gallery: React.FC<GalleryProps> = ({ items, onItemClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="group cursor-pointer"
          onClick={() => onItemClick(item)}
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white text-xs uppercase tracking-widest border border-white/50 px-6 py-2 backdrop-blur-md bg-white/10 hover:bg-white/20 transition-colors font-sans">
                View Details
              </span>
            </div>
          </div>
          <div className="text-center px-2">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#CA8A04] mb-2 font-semibold font-sans">
              {item.category}
            </p>
            <h3 className="text-xl font-bold mb-1 tracking-wide group-hover:text-[#CA8A04] transition-colors serif">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 font-light font-sans">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
