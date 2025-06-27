import React, { useState, useEffect } from 'react';
import { Menu, X, Lock, ChevronRight } from 'lucide-react';
import GlitchText from './ui/GlitchText';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,255,0.15)]' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <Lock className="w-6 h-6 text-[#00ffff] absolute animate-pulse" />
              <Lock className="w-6 h-6 text-[#00ff00] absolute animate-[pulse_1.5s_infinite_0.3s]" style={{ clipPath: 'inset(0 50% 0 0)' }} />
            </div>
            <GlitchText className="text-xl font-bold tracking-wider font-mono">SWIPEFILE EXPRESS</GlitchText>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {['Ativos', 'Como funciona', 'Preços', 'Depoimentos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-300 hover:text-[#00ffff] transition-colors relative group text-sm"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00ff00] to-[#00ffff] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white text-sm">Entrar</a>
            <Button>
              Assine
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          <button className="md:hidden text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#121212]/95 backdrop-blur-md border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {['Features', 'How It Works', 'Pricing', 'Testimonials'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-gray-300 hover:text-[#00ffff] py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-800 flex flex-col space-y-4">
                <a href="#" className="text-gray-300 hover:text-white py-2">Entrar</a>
                <Button>
                  Assine
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;