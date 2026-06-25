export default function Hero() {
  return (
    <header id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595166297395-585a0fb70c1e?q=80&w=2000&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 to-dark-900/70"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl animate-[fadeInUp_1s_ease_forwards]">
          <span className="inline-block py-1 px-3 bg-white/10 border border-white/10 rounded-full text-sm uppercase tracking-wider text-accent-400 mb-6 backdrop-blur-sm">
            Calidad Premium
          </span>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Transporta con <span className="text-accent-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Seguridad y Estilo</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Descubre nuestra línea exclusiva de remolques diseñados para máxima durabilidad. Soluciones ideales para carga, vehículos y embarcaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#catalog" className="btn-primary">Ver Catálogo</a>
            <a href="#rentas" className="btn-secondary">Explorar Yates</a>
          </div>
        </div>
      </div>
    </header>
  );
}
