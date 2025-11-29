import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 md:px-8 border-b border-white/5 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-brand-500 mt-6 rounded-full"></div>
        </div>
        {children}
      </div>
    </section>
  );
};