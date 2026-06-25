import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCatalog from './components/ProductCatalog';
import BotpressChat from './components/BotpressChat';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCatalog />
      <BotpressChat />
    </div>
  );
}

export default App;
