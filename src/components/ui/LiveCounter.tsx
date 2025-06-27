import React, { useState, useEffect } from 'react';
import { Shield, Eye } from 'lucide-react';

const LiveCounter: React.FC = () => {
  const [count, setCount] = useState(10983642);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + Math.floor(Math.random() * 5) + 1);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      className={`bg-[#121212] border border-gray-800 rounded-full transition-all duration-300 ${
        isHovered ? 'pl-4 pr-6 py-3 shadow-[0_0_15px_rgba(0,255,255,0.2)]' : 'p-3'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2">
        <div className="relative w-8 h-8 flex items-center justify-center">
          <div className={`absolute inset-0 bg-[#00ffff]/10 rounded-full animate-ping ${isHovered ? 'opacity-70' : 'opacity-30'}`}></div>
          {isHovered ? (
            <Eye className="w-5 h-5 text-[#00ffff]" />
          ) : (
            <Shield className="w-5 h-5 text-[#00ffff]" />
          )}
        </div>
        
        <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 overflow-hidden'}`}>
          <div className="text-xs font-mono whitespace-nowrap">
            <div className="text-gray-400">Ofertas espionadas:</div>
            <div className="text-[#00ffff] font-bold">{count.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCounter;