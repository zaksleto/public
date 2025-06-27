import React, { useEffect, useRef } from 'react';
import { Shield, Eye, Bot } from 'lucide-react';
import Button from './ui/Button';
import GlitchText from './ui/GlitchText';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const characters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = Array(columns).fill(0);
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#00ff00';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    const interval = setInterval(draw, 40);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-2 mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00ff00] mr-2 animate-pulse"></span>
            <span className="text-sm">A plataforma mais avançada em inteligência de espionagem</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-mono font-bold mb-6 leading-tight">
            <GlitchText>Veja O Que Os Gurus</GlitchText><br />
            <span className="bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent">
              Não Querem Que Você Saiba
            </span>
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            O único swipefile que armazena a oferta de TODOS os players, 100% transparente com VSLs, anúncios e ainda quebramos os cloakers para você sem esconder nenhuma oferta.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button size="lg">
              Assine agora
            </Button>
            <Button variant="outline" size="lg">
              Veja por dentro
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Shield className="w-10 h-10 text-[#00ffff]" />, title: 'Transparência Total', description: 'Sem ofertas ocultas, sem cloakers. Veja tudo' },
              { icon: <Eye className="w-10 h-10 text-[#00ffff]" />, title: 'Acompanhamento em Tempo Real', description: 'Encontre ofertas em no máximo 2 horas de campanha rodada' },
              { icon: <Bot className="w-10 h-10 text-[#00ffff]" />, title: 'Deixe o trabalho pesado conosco', description: 'Nós espionamos, quebramos e organizamos. Você só precisa usar' }
            ].map((item, index) => (
              <div key={index} className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] transition-all duration-300">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 font-mono">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;