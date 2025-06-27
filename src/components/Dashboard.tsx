import React, { useState } from 'react';
import { ArrowRight, Play, Eye, BarChart3, Bell } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('vsls');
  
  const tabs = [
    { id: 'vsls', label: 'Biblioteca de VSL', icon: <Play className="w-4 h-4" /> },
    { id: 'ads', label: 'Anúncios', icon: <Eye className="w-4 h-4" /> },
    { id: 'analytics', label: 'Bibliotecas', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'alerts', label: 'Transcrições', icon: <Bell className="w-4 h-4" /> }
  ];

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent">
              Visão de Raio-X
            </span>
            <p></p>
             No Mercado Todo
          </h2>
          <p className="text-gray-400">
            Não importa se é low-ticket, X1, nutra, infoproduto e nem em qual país é.
            Se escala, nós temos — e ninguém pode esconder de você.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#121212] border-[#00ffff] border text-[#00ffff]' 
                    : 'bg-[#121212] border-gray-800 border text-gray-400 hover:text-[#00ffff]'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-[#121212] shadow-[0_0_30px_rgba(0,255,255,0.05)]">
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#1a1a1a] flex items-center px-4 border-b border-gray-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-gray-400 text-xs font-mono">Swipe File Express Dashboard</div>
            </div>
            
            <div className="pt-12 pb-4 px-4">
              {activeTab === 'vsls' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="group relative bg-[#1a1a1a] rounded-md overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={`https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                          alt="VSL Preview" 
                          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-xs py-1 px-2 rounded font-mono">
                          09:23
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-sm truncate">
                            VSL {item} - Bifi
                          </h3>
                          <span className="text-[#00ffff] text-xs bg-[#00ffff]/10 px-2 py-1 rounded">New</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-400 text-xs">Encontrada 2h atrás</p>
                          <button className="text-xs flex items-center text-[#00ff00] hover:underline">
                            Assistir
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'ads' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="bg-[#1a1a1a] rounded-md overflow-hidden group">
                      <div className="aspect-square relative">
                        <img 
                          src={`https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} 
                          alt="Ad Preview" 
                          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                          <div className="text-[11px] text-gray-300">Facebook Ad • Active</div>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="font-medium text-xs truncate">
                            Competitor {item} Ad Campaign
                          </h3>
                          <span className="text-[11px] text-gray-400">$5.4k spend</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <p className="text-gray-400 text-[11px]">Running for 3d</p>
                          <button className="text-[11px] flex items-center text-[#00ffff] hover:underline">
                            Open link
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {activeTab === 'analytics' && (
                <div className="text-center py-20 text-gray-400">
                  <BarChart3 className="w-12 h-12 mx-auto mb-4 text-[#00ffff]" />
                  <h3 className="text-xl font-medium mb-2">Analytics Dashboard View</h3>
                  <p>Real-time competitive analytics and insights</p>
                </div>
              )}
              
              {activeTab === 'alerts' && (
                <div className="text-center py-20 text-gray-400">
                  <Bell className="w-12 h-12 mx-auto mb-4 text-[#00ffff]" />
                  <h3 className="text-xl font-medium mb-2">Alerts Dashboard View</h3>
                  <p>Get notified when competitors launch new content</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;