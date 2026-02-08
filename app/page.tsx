import React from 'react';
import { ArrowRight, Menu, X, ChevronRight, Globe, Layout, Cpu, Mail } from 'lucide-react';

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#FDFDFD]/80 backdrop-blur-md border-b border-black/5 px-6 py-4 flex justify-between items-center">
    <div className="text-xl font-semibold tracking-tighter">AINTLY<span className="text-neutral-400">.</span></div>
    <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
      <a href="#work" className="hover:text-black/60 transition-colors">Work</a>
      <a href="#studio" className="hover:text-black/60 transition-colors">Studio</a>
      <a href="#contact" className="hover:text-black/60 transition-colors">Contact</a>
    </div>
    <button className="md:hidden">
      <Menu size={20} />
    </button>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-5xl md:text-8xl font-light tracking-tight leading-[1.1] mb-8">
        Digital <br />
        <span className="font-serif italic text-neutral-400">Architecture</span> <br />
        for the Modern Web.
      </h1>
      <p className="max-w-xl text-lg text-neutral-600 mb-12 leading-relaxed">
        We craft high-end digital experiences where clean minimalism meets structural integrity. A studio for those who value space, typography, and precision.
      </p>
      <div className="flex items-center space-x-6">
        <button className="bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center group">
          View Projects <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-px bg-black/10 hidden lg:block" />
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc }: any) => (
  <div className="border border-black/5 p-8 hover:border-black/20 transition-colors bg-white">
    <Icon size={24} className="mb-6 stroke-[1.5px]" />
    <h3 className="text-xl font-medium mb-4 tracking-tight">{title}</h3>
    <p className="text-neutral-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Services = () => (
  <section id="studio" className="py-24 px-6 md:px-12 lg:px-24 bg-[#F9F9F9]">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight">Our Discipline</h2>
        <p className="max-w-sm text-neutral-500 text-sm mb-2">
          Through a rigorous design process, we eliminate the unnecessary to leave only what matters.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={Layout} 
          title="Spatial Design" 
          desc="Responsive layouts that breathe. We prioritize whitespace and structural balance to ensure content clarity."
        />
        <FeatureCard 
          icon={Globe} 
          title="Digital Presence" 
          desc="Full-stack solutions that scale. We build robust architectures using modern frameworks like Next.js."
        />
        <FeatureCard 
          icon={Cpu} 
          title="System Design" 
          desc="Component-based systems that ensure visual consistency and long-term maintainability for your brand."
        />
      </div>
    </div>
  </section>
);

const ProjectPreview = ({ index, title, category }: any) => (
  <div className="group cursor-pointer">
    <div className="aspect-[16/10] bg-neutral-100 mb-6 overflow-hidden relative">
       <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700" />
       <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-white px-6 py-3 text-xs uppercase tracking-widest">Case Study</span>
       </div>
    </div>
    <div className="flex justify-between items-center">
      <div>
        <span className="text-[10px] uppercase tracking-widest text-neutral-400 mb-1 block">0{index} / {category}</span>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <ChevronRight size={18} className="text-neutral-300 group-hover:text-black transition-colors" />
    </div>
  </div>
);

const Work = () => (
  <section id="work" className="py-24 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-xs uppercase tracking-[0.3em] font-semibold mb-16 text-neutral-400">Selected Works</h2>
      <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
        <ProjectPreview index={1} title="The Linear House" category="Architectural Portfolios" />
        <ProjectPreview index={2} title="Aura Skincare" category="E-commerce Experience" />
        <ProjectPreview index={3} title="Monogram Capital" category="Fintech Platform" />
        <ProjectPreview index={4} title="Flux Dynamics" category="Motion Brand Identity" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-black text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <div>
          <h2 className="text-4xl md:text-6xl font-light mb-8">Ready to build?</h2>
          <a href="mailto:hello@aintly.com" className="text-xl md:text-2xl border-b border-white/20 pb-2 hover:border-white transition-colors flex items-center w-fit">
            hello@aintly.com <ArrowRight className="ml-4" size={20} />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-8 text-neutral-400 text-sm">
          <div className="space-y-4">
            <p className="text-white font-medium mb-2">Navigation</p>
            <p className="hover:text-white cursor-pointer transition-colors">Work</p>
            <p className="hover:text-white cursor-pointer transition-colors">Studio</p>
            <p className="hover:text-white cursor-pointer transition-colors">Journal</p>
          </div>
          <div className="space-y-4">
            <p className="text-white font-medium mb-2">Social</p>
            <p className="hover:text-white cursor-pointer transition-colors">Instagram</p>
            <p className="hover:text-white cursor-pointer transition-colors">LinkedIn</p>
            <p className="hover:text-white cursor-pointer transition-colors">Twitter</p>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-semibold tracking-tighter">AINTLY<span className="text-neutral-500">.</span></div>
        <p className="text-[10px] uppercase tracking-widest text-neutral-500">© 2026 AINTLY Studio. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <Footer />
    </main>
  );
}
