import heroBg from '../assets/catalog/hero-trailer.jpeg';
import imgTrailer2 from '../assets/catalog/trailer-2.jpeg';
import imgTrailer3 from '../assets/catalog/trailer-3.jpeg';

const products = [
  {
    id: 1,
    title: "Remolque Náutico Elite Doble Eje",
    price: "$5,500 USD",
    desc: "Diseñado para yates y lanchas pesadas. Estructura galvanizada en caliente resistente a la corrosión marina. Soporta hasta 8,000 lbs.",
    img: heroBg
  },
  {
    id: 2,
    title: "Remolque AquaSport Pro",
    price: "$3,800 USD",
    desc: "Ideal para lanchas deportivas y motos acuáticas. Rodillos ajustables, luces LED sumergibles y winche de alta capacidad.",
    img: imgTrailer2
  },
  {
    id: 3,
    title: "Plataforma Náutica Heavy Duty",
    price: "$7,200 USD",
    desc: "Plataforma especializada para embarcaciones de gran eslora. Frenos de disco hidráulicos en ambos ejes para máxima seguridad.",
    img: imgTrailer3
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
