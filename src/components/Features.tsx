import React from 'react';
import { Archive, Link, Activity, BellRing, Globe, Shield, Database, Zap } from 'lucide-react';
import Button from './ui/Button';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Archive className="w-10 h-10 text-[#00ffff]" />,
      title: 'Biblioteca Completa de VSLs',
      description: 'Acesse o maior e mais organizado arquivo de VSLs de Nutra, Info e até Low Ticket no Brasil, EUA e LATAM.'
    },
    {
      icon: <Link className="w-10 h-10 text-[#00ffff]" />,
      title: 'Links de Bibliotecas Ativas',
      description: 'Clique diretamente nos anúncios dos concorrentes a partir da nossa plataforma — veja exatamente o que seus leads estão vendo agora.'
    },
    {
      icon: <Activity className="w-10 h-10 text-[#00ffff]" />,
      title: 'Análises em Tempo Real',
      description: 'Monitore o desempenho das campanhas e acompanhe as estratégias dos seus concorrentes à medida que acontecem.'
    },
    {
      icon: <BellRing className="w-10 h-10 text-[#00ffff]" />,
      title: 'Alertas Instantâneos',
      description: 'Receba notificações imediatas quando os concorrentes lançarem novas campanhas ou fizerem mudanças significativas.'
    },
    {
      icon: <Globe className="w-10 h-10 text-[#00ffff]" />,
      title: 'Monitoramento Multiplataforma',
      description: 'Acompanhe as atividades dos concorrentes nas redes sociais, motores de busca e redes de anúncios.'
    },
    {
      icon: <Shield className="w-10 h-10 text-[#00ffff]" />,
      title: 'Monitoramento de Compliance',
      description: 'Não consegue aprovar um anúncio? Veja exatamente o que o seu concorrente está fazendo para aprovar os dele'
    },
    {
      icon: <Database className="w-10 h-10 text-[#00ffff]" />,
      title: 'Histórico de Ofertas',
      description: 'Acesse dados de campanhas anteriores para identificar padrões e ciclos sazonais de mercado'
    },
    {
      icon: <Zap className="w-10 h-10 text-[#00ffff]" />,
      title: 'Insights Estratégicos',
      description: 'Conte com a nossa equipe para contar os movimentos de mercado que estamos notando para você estar um passo a frente.'
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            VEJA <span className="bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent">TUDO</span>
          </h2>
          <p className="text-gray-400">
            Nossa plataforma oferece as ferramentas que você precisa para conquistar uma vantagem injusta no seu mercado sabendo exatamente o que está dando dinheiro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#121212] border border-gray-800 rounded-lg p-6 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:border-[#00ffff]/20 transition-all group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 font-mono">
                <span className="bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity">~&gt; </span>
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button>
            Espione agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;