const products = [
  {
    id: 1,
    title: "Remolque Cerrado Cargo X-200",
    price: "$12,500 USD",
    desc: "Ideal para transportar mercancía sensible al clima. Chasis reforzado y ejes tándem.",
    img: "https://images.unsplash.com/photo-1610660600109-8d7d65dfcb69?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Remolque Náutico AquaTrek",
    price: "$4,200 USD",
    desc: "Diseñado específicamente para embarcaciones de hasta 24 pies. Galvanizado en caliente.",
    img: "https://images.unsplash.com/photo-1587840134442-70b925f694e9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Plataforma Heavy Duty Pro",
    price: "$8,900 USD",
    desc: "Plataforma abierta para maquinaria y vehículos. Capacidad de carga de 10,000 lbs.",
    img: "https://images.unsplash.com/photo-1549429598-a3206fb5d9ef?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ProductCatalog() {
  return (
    <section id="catalog" className="py-24 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Remolques en Venta</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Nuestra selección de remolques de alta gama, listos para el trabajo pesado y la aventura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map(product => (
            <article key={product.id} className="glass-card group flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-4 right-4 bg-dark-900/80 backdrop-blur-md px-4 py-2 rounded-lg font-bold border border-white/10">
                  {product.price}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">{product.desc}</p>
                <button className="btn-outline mt-auto">Solicitar Info</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
