import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-900/95 shadow-lg border-b border-white/5' : 'glass-nav'}`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-wide">
          ELITE<span className="text-accent-500">TRAILERS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="text-sm font-medium hover:text-accent-500 transition-colors">Inicio</a>
          <a href="#catalog" className="text-sm font-medium hover:text-accent-500 transition-colors">Remolques en Venta</a>
          <a href="#rentas" className="text-sm font-medium bg-accent-500/10 text-accent-400 px-4 py-2 rounded-lg border border-accent-500/20 hover:bg-accent-500/20 transition-all">
            Renta de Lanchas/Yates
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-accent-500 transition-colors">Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-dark-800 border-b border-white/10 p-6 flex flex-col space-y-4 shadow-xl">
          <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-500">Inicio</a>
          <a href="#catalog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-500">Remolques en Venta</a>
          <a href="#rentas" onClick={() => setIsMobileMenuOpen(false)} className="text-accent-400 font-semibold">Renta de Lanchas/Yates</a>
          <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent-500">Contacto</a>
        </div>
      )}
    </nav>
  );
}
