import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import HowItWorks from './components/HowItWorks';
import ComparisonGrid from './components/ComparisonGrid';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import LiveCounter from './components/ui/LiveCounter';

function App() {
  return (
    <div className="bg-black text-gray-200 min-h-screen overflow-x-hidden">
      <div className="fixed bottom-8 right-8 z-50">
        <LiveCounter />
      </div>
      
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <HowItWorks />
        <ComparisonGrid />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;