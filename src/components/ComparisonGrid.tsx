import React from 'react';
import { Check, X } from 'lucide-react';
import GlitchText from './ui/GlitchText';

const ComparisonGrid: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Sem ofertas ocultas',
      cyberintl: true,
      others: false,
      highlight: true
    },
    {
      feature: 'VSL tanto do produtor quanto do top afiliado',
      cyberintl: true,
      others: false,
      highlight: true
    },
    {
      feature: 'Links Atuais e sem Cloaker',
      cyberintl: true,
      others: false,
      highlight: true
    },
    {
      feature: 'Links das Bibliotecas',
      cyberintl: true,
      others: true,
      highlight: false
    },
    {
      feature: 'Transcrições de VSL',
      cyberintl: true,
      others: true,
      highlight: false
    },
    {
      feature: 'Documentos das Ofertas que Escalaram',
      cyberintl: true,
      others: true,
      highlight: false
    },
    {
      feature: 'Avisos Pelo Whatsapp',
      cyberintl: true,
      others: false,
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <GlitchText>Porque Somos Diferentes</GlitchText>
          </h2>
          <p className="text-gray-400">
            Não trabalhamos para operações nem temos rabo preso com ninguém, nosso trabalho e fonte de renda é te dar o que os outros escondem.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left font-mono"></th>
                  <th className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-xl text-[#00ffff] mb-1">SWIPE EXPRESS</span>
                      <span className="bg-[#00ffff]/10 text-[#00ffff] text-xs px-2 py-1 rounded">Nossa Plataforma</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 text-center">
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-xl text-gray-500 mb-1">OUTROS</span>
                      <span className="bg-gray-800 text-gray-400 text-xs px-2 py-1 rounded">SWIPES</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`border-t border-gray-800 ${
                      item.highlight ? 'bg-[#001a1a] bg-opacity-30' : ''
                    }`}
                  >
                    <td className={`py-4 px-6 font-medium ${item.highlight ? 'text-[#00ffff]' : 'text-gray-300'}`}>
                      {item.feature}
                      {item.highlight && (
                        <span className="ml-2 inline-block px-2 py-1 bg-[#00ffff]/10 text-[#00ffff] text-xs rounded">
                          Diferencial único
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.cyberintl ? (
                        <Check className="w-6 h-6 text-[#00ff00] mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {item.others ? (
                        <Check className="w-6 h-6 text-gray-500 mx-auto" />
                      ) : (
                        <X className="w-6 h-6 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 bg-[#121212] border border-gray-800 rounded-lg p-6">
            <h3 className="font-mono text-xl mb-4">A Dura Verdade</h3>
            <p className="text-gray-400 mb-4">
              A maioria das plataformas de inteligência competitiva esconde deliberadamente os dados dos concorrentes ou mostra apenas informações básicas. Nós acreditamos que você merece ver <span className="text-[#00ffff]">tudo </span> 
               exatamente como os leads veem.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#00ff00]"></span>
                <span>SWIPE EXPRESS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gray-500"></span>
                <span>Outros Swipes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonGrid;