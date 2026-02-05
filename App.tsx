
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LuminaGallery from './components/LuminaGallery';
import Story from './components/Story';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import NeuralBackground from './components/NeuralBackground';
import { CollectionItem } from './types';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<CollectionItem | null>(null);

  const collections: CollectionItem[] = [
    {
      id: 1,
      title: "Badshahi Jora",
      category: "Bridal Couture",
      description: "A masterpiece of zardozi and kora work on deep crimson velvet. This silhouette embodies the timeless elegance of Pakistani heritage.",
      price: "P.O.R",
      image: "/assets/bridal/Badshahi Jora.jpg",
      details: ["Hand-embroidered bodice", "Gota patti detailing", "Raw silk inner lining", "Silk net dupatta with heavy borders"]
    },
    {
      id: 2,
      title: "Crimson Grace",
      category: "Nikkah Collection",
      description: "Subtle yet sophisticated. A blend of ivory silk and silver threadwork, perfect for an ethereal Nikkah ceremony.",
      price: "P.O.R",
      image: "/assets/bridal/Crimson Grace.jpg",
      details: ["Chatta patti borders", "Swarovski crystal accents", "Crinkle chiffon veil", "Bespoke tailoring"]
    },
    {
      id: 3,
      title: "Rani-e-Laal",
      category: "Shendi Special",
      description: "A vibrant fusion of antique gold and emerald green, featuring traditional motifs reimagined for the modern bride.",
      price: "P.O.R",
      image: "/assets/bridal/Rani-e-Laal.jpg",
      details: ["Dabka and Marori work", "Velvet appliqués", "Kimkhab fabric", "Customized length"]
    },
    {
      id: 4,
      title: "Silver Lining",
      category: "Formal Elegance",
      description: "Fluid movements meet intricate craftsmanship. The Mahnoor Pishwas is a celebration of volume and detail.",
      price: "P.O.R",
      image: "/assets/bridal/Silver Lining.jpg",
      details: ["60-kali flare", "Tilla and Resham embroidery", "Pure organza wrap", "Hand-crafted tassels"]
    }
  ];

  return (
    <div className="min-h-screen relative">
      <NeuralBackground className="fixed inset-0 -z-10" />
      <Header />
      <main className="pt-24">
        <section id="collection" className="py-20 px-4 md:px-12 bg-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4 font-bold tracking-tight serif text-white">The Bridal Edit</h2>
              <div className="w-24 h-px bg-[#CA8A04] mx-auto mb-6"></div>
              <p className="text-[#A8A29E] max-w-2xl mx-auto font-light font-sans">
                Discover a legacy of craftsmanship. Each piece is meticulously hand-crafted by our artisans, ensuring you carry a piece of art on your special day.
              </p>
            </div>
            <LuminaGallery items={collections} onItemClick={setSelectedItem} />
          </div>
        </section>
        <Story />
      </main>
      <Footer />

      {selectedItem && (
        <ProductModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default App;
