import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';

const navItems: NavItem[] = [
  { id: 'theme', label: '核心战略' },
  { id: 'factories', label: '三层架构' },
  { id: 'future', label: '未来与治理' },
  { id: 'outlook', label: '历史与展望' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
           <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
             <span className="text-white font-bold">AI</span>
           </div>
           <span>Sovereignty<span className="text-brand-500">.Report</span></span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-slate-300 hover:text-white hover:text-brand-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
           {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-sm font-medium text-slate-300 hover:text-white py-2"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};