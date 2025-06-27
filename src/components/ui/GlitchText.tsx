import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
  intensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  children, 
  className = '',
  intensity = 'medium'
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, intensity === 'high' ? 2000 : intensity === 'medium' ? 3000 : 5000);
    
    return () => clearInterval(glitchInterval);
  }, [intensity]);
  
  return (
    <span className={`relative inline-block ${className}`}>
      <span className={`relative z-10 ${isGlitching ? 'opacity-80' : ''}`}>
        {children}
      </span>
      
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 w-full text-[#00ffff] z-20"
            style={{ 
              clipPath: 'inset(20% 0 40% 0)',
              transform: 'translate(-2px, 0)',
              opacity: 0.8
            }}
          >
            {children}
          </span>
          <span 
            className="absolute top-0 left-0 w-full text-[#00ff00] z-20"
            style={{ 
              clipPath: 'inset(60% 0 10% 0)',
              transform: 'translate(2px, 0)',
              opacity: 0.8
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
};

export default GlitchText;