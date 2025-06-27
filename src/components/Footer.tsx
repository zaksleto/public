import React from 'react';
import { Lock, Mail, Phone, MapPin, Shield, CheckCircle, ExternalLink } from 'lucide-react';
import GlitchText from './ui/GlitchText';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <Lock className="w-6 h-6 text-[#00ffff] absolute" />
                <Lock className="w-6 h-6 text-[#00ff00] absolute" style={{ clipPath: 'inset(0 50% 0 0)' }} />
              </div>
              <GlitchText className="text-xl font-bold tracking-wider font-mono">CYBERINTL</GlitchText>
            </a>
            
            <p className="text-gray-400 text-sm mb-6">
              The advanced competitive intelligence platform that gives you complete visibility into your market.
            </p>
            
            <div className="flex space-x-4 mb-6">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-8 h-8 rounded-full bg-[#121212] flex items-center justify-center text-gray-400 hover:text-[#00ffff] hover:bg-[#121212] transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <i className={`fab fa-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-mono text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Security', 'Integrations', 'API Access'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff] text-sm transition-colors flex items-center">
                    <span className="inline-block w-1 h-1 bg-[#00ffff] mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-[#00ffff] text-sm transition-colors flex items-center">
                    <span className="inline-block w-1 h-1 bg-[#00ffff] mr-2"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-mono text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#00ffff] mt-1" />
                <span className="text-gray-400 text-sm">support@cyberintl.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#00ffff] mt-1" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00ffff] mt-1" />
                <span className="text-gray-400 text-sm">
                  123 Cyber Street, Suite 456<br />
                  San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00ffff]" />
                <span className="text-gray-300 text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#00ffff]" />
                <span className="text-gray-300 text-sm">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5 text-[#00ffff]" />
                <span className="text-gray-300 text-sm">256-bit Encryption</span>
              </div>
            </div>
            
            <div className="text-gray-500 text-sm text-center md:text-right">
              © {new Date().getFullYear()} CyberIntl. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;