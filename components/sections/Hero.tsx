import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Database, Bot } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-dark-950 pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-6">
          <Globe size={14} />
          <span>全球AI企业战略深度报告</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          AI时代<span className="gradient-text">企业核心竞争力</span>的重构
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
          建立高效、可治理的“AI软件工厂”
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={() => document.getElementById('theme')?.scrollIntoView()} className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
            开始阅读 <ArrowRight size={18} />
          </button>
          <button onClick={() => document.getElementById('outlook')?.scrollIntoView()} className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-8 py-3 rounded-lg font-semibold transition-colors">
            查看未来展望
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-4 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
            <Database className="text-brand-400 mb-3" size={24} />
            <h3 className="text-white font-semibold mb-2">Token Factory</h3>
            <p className="text-sm text-slate-400">算力代工厂的效率之争，定制芯片正在挑战通用GPU的垄断地位。</p>
          </div>
          <div className="p-4 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
            <ShieldCheck className="text-brand-400 mb-3" size={24} />
            <h3 className="text-white font-semibold mb-2">模型即主权</h3>
            <p className="text-sm text-slate-400">不仅是使用模型，更是通过Fine-tuning掌控核心隐性知识与决策权。</p>
          </div>
          <div className="p-4 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
            <Bot className="text-brand-400 mb-3" size={24} />
            <h3 className="text-white font-semibold mb-2">Agent Factory</h3>
            <p className="text-sm text-slate-400">从对话到行动，构建可治理、可审计的自动化业务本体论。</p>
          </div>
        </div>
      </div>
    </div>
  );
};