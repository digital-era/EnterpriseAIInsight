import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = "", title, icon }) => {
  return (
    <div className={`glass-panel rounded-xl p-6 transition-all duration-300 hover:bg-slate-800/80 ${className}`}>
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <div className="text-brand-400">{icon}</div>}
          {title && <h3 className="text-xl font-semibold text-white">{title}</h3>}
        </div>
      )}
      <div className="text-slate-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export const StatCard: React.FC<{ label: string; value: string; desc: string }> = ({ label, value, desc }) => (
  <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-lg border border-slate-700">
    <div className="text-sm text-brand-400 font-medium uppercase tracking-wider mb-2">{label}</div>
    <div className="text-3xl font-bold text-white mb-2">{value}</div>
    <div className="text-xs text-slate-400">{desc}</div>
  </div>
);
