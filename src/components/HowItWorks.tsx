import React, { useState } from 'react';
import { Search, Database, BarChart3, BellRing, ArrowRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-[#00ffff]" />,
      title: 'Escanear e Descobrir',
      description: 'Nossos robôs e equipe escaneiam continuamente o native, as redes sociais como usuário e as bibliotecas de anúncios para identificar e capturar as ofertas dos seus concorrentes.'
    },
    {
      icon: <Database className="w-10 h-10 text-[#00ffff]" />,
      title: 'Indíce e Arquivo',
      description: 'Todo o conteúdo encontrado é automaticamente indexado, categorizado e armazenado no nosso banco de ofertas para acesso instantâneo e comparação.'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#00ffff]" />,
      title: 'Transcrições',
      description: 'Além de proporcionar os vídeos, também transcrevemos para você poder fazer a sua análise sem passar trabalho'
    },
    {
      icon: <BellRing className="w-10 h-10 text-[#00ffff]" />,
      title: 'Alerta de Atualização',
      description: 'Seja avisado no whatsapp sempre que uma nova oferta for colocada no swipe'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#001a1a] via-black to-black opacity-40 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Como <span className="bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent">Encontramos</span> O Que Está Oculto
          </h2>
          <p className="text-gray-400">
            Nossa tecnologia avançada trabalha 24 horas por dia para capturar e analisar dados da concorrência, proporcionando a você uma vantagem injusta no seu mercado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex gap-4 p-4 rounded-lg transition-all cursor-pointer ${
                    activeStep === index 
                      ? 'bg-[#121212] border border-[#00ffff]/20 shadow-[0_0_15px_rgba(0,255,255,0.1)]' 
                      : 'hover:bg-[#121212] border border-transparent'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg bg-[#1a1a1a] border border-gray-800">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-mono font-semibold text-xl mb-2 flex items-center">
                      <span className={activeStep === index ? 'text-[#00ffff]' : 'text-white'}>
                        {step.title}
                      </span>
                      {activeStep === index && <ArrowRight className="w-4 h-4 ml-2 text-[#00ffff]" />}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 border-2 border-dashed border-gray-800 rounded-full animate-spin-slow"></div>
              
              <div className="absolute inset-6 border-2 border-dashed border-gray-800 rounded-full animate-spin-slow animation-delay-500"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-[#121212] rounded-full flex items-center justify-center p-4 z-10 border border-gray-800">
                  <div className="text-center">
                    <div className="font-mono font-bold text-2xl bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent mb-1">
                      {steps[activeStep].title.split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-400">Fase {activeStep + 1}</div>
                  </div>
                </div>
              </div>
              
              {[45, 135, 225, 315].map((degree, i) => (
                <div 
                  key={i}
                  className={`absolute w-16 h-16 bg-[#121212] rounded-full border ${
                    activeStep === i ? 'border-[#00ffff] shadow-[0_0_10px_rgba(0,255,255,0.3)]' : 'border-gray-800'
                  } flex items-center justify-center transition-all`}
                  style={{
                    top: `calc(50% - 2rem + ${Math.sin(degree * Math.PI / 180) * 8}rem)`,
                    left: `calc(50% - 2rem + ${Math.cos(degree * Math.PI / 180) * 8}rem)`,
                  }}
                  onClick={() => setActiveStep(i)}
                >
                  {steps[i].icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;