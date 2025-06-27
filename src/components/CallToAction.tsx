import React from 'react';
import Button from './ui/Button';
import { ChevronRight, Shield, Zap, Eye } from 'lucide-react';
import GlitchText from './ui/GlitchText';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#001a1a] via-black to-black opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-[#121212] border border-gray-800 rounded-xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,255,255,0.05)]">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
              <GlitchText>Conquiste a Vantagem Injusta</GlitchText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
             Comece a monitorar seus concorrentes hoje e veja estratégias e ofertas que eles não querem que você descubra.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { 
                icon: <Eye className="w-8 h-8 text-[#00ffff]" />, 
                title: 'Visibilidade Total', 
                description: 'Veja em tempo real tudo o que seus concorrentes estão fazendo.'
              },
              { 
                icon: <Zap className="w-8 h-8 text-[#00ffff]" />, 
                title: 'Alertas Instantâneos', 
                description: 'Seja notificado imediatamente sobre novas campanhas dos concorrentes.'
              },
              { 
                icon: <Shield className="w-8 h-8 text-[#00ffff]" />, 
                title: 'Proteção Anti Cloaker', 
                description: 'Nunca mais seja impedido de ver uma oferta'
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 font-mono">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-2 mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-[#00ff00] mr-2 animate-pulse"></span>
              <span className="text-sm">Pare de tentar acertar ofertas no escuro, saiba o que está dando certo</span>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">
                Assine agora
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="outline" size="lg">
                Veja por Dentro
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;