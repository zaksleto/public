import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "CyberIntl has completely transformed our marketing strategy. We can now see exactly what our competitors are doing in real-time, giving us a significant edge in our market.",
      author: "Alex Thompson",
      title: "CMO, Digital Innovations Inc.",
      image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The VSL library alone is worth the investment. Being able to see our competitors' sales videos has helped us refine our own messaging and dramatically improve conversion rates.",
      author: "Sarah Chen",
      title: "Growth Director, TechFlare",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "In just three months with CyberIntl, we've identified gaps in our market that our competitors weren't addressing. We've already launched two new product lines as a result.",
      author: "Michael Rodriguez",
      title: "Founder, Quantum Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">
            Depoimentos <span className="bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent">de quem está dentro</span>
          </h2>
          <p className="text-gray-400">
            Veja como players do mercado estão ganhando vantagem na nossa plataforma
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative z-10 bg-[#121212] border border-gray-800 rounded-xl p-8 md:p-12 shadow-[0_0_30px_rgba(0,255,255,0.05)]">
            <Quote className="w-12 h-12 text-[#00ffff] opacity-30 absolute top-6 left-6" />
            
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl italic mb-8 text-gray-200 relative z-10">
                "{testimonials[activeIndex].quote}"
              </p>
              
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00ffff] mr-4">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-white">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-400 text-sm">{testimonials[activeIndex].title}</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-4">
                <button 
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#00ffff] hover:border-[#00ffff] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeIndex 
                          ? 'bg-[#00ffff] w-6' 
                          : 'bg-gray-700 hover:bg-gray-500'
                      }`}
                    ></button>
                  ))}
                </div>
                <button 
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#00ffff] hover:border-[#00ffff] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#00ff00]/20 rounded-xl -z-10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          {['200+ Businesses', '15M+ Ads Tracked', '30K+ VSLs Archived'].map((stat, index) => (
            <div key={index} className="bg-[#121212] border border-gray-800 rounded-lg p-6 text-center">
              <h3 className="font-mono text-2xl font-bold bg-gradient-to-r from-[#00ff00] to-[#00ffff] bg-clip-text text-transparent">
                {stat.split(' ')[0]}
              </h3>
              <p className="text-gray-400">{stat.split(' ').slice(1).join(' ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;