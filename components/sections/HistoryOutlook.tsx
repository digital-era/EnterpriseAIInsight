import React from 'react';
import { Section } from '../ui/Section';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';

const data = [
  { name: 'Cisco (.com Peak)', pe: 30, type: 'Infrastructure' },
  { name: 'Nvidia (AI Era)', pe: 38, type: 'Infrastructure' },
  { name: 'Cloud ASICs', pe: 0, type: 'Challenger', note: 'Efficiency' }, 
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900 border border-slate-700 p-4 rounded shadow-xl">
        <p className="text-white font-bold">{label}</p>
        <p className="text-brand-400">P/E Ratio (Approx): {payload[0].value > 0 ? payload[0].value : 'N/A'}</p>
      </div>
    );
  }
  return null;
};

export const HistoryOutlook: React.FC = () => {
  return (
    <Section id="outlook" title="第五部分：历史镜鉴与战略展望" subtitle="对比 .com 泡沫：从 Cisco 到 Nvidia，供需关系的结构性差异与潜在风险。">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
           <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
             <TrendingUp className="text-brand-500" /> 结构性差异：供给 vs 需求
           </h3>
           <p className="text-slate-300 mb-6 leading-relaxed">
             在 .com 时代，基础设施（光纤）建设是投机性的，导致供给严重过剩。而 AI 时代，GPU 处于极度稀缺状态，<strong>没有 GPU 是闲置的</strong>。这支撑了高估值，但风险依然存在。
           </p>
           
           <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
             <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
               <AlertTriangle className="text-yellow-500" size={18} /> 关键风险
             </h4>
             <ul className="space-y-2 text-sm text-slate-400 list-disc pl-4">
               <li>云巨头的定制 ASICs 能够大规模替代 Nvidia 进行推理吗？</li>
               <li>"Magnificent Seven" 的集体预期 P/E (38x) 已高于 .com 泡沫顶峰 (30x)。</li>
               <li>Agentic Workflows 的 ROI 能否支撑持续的基础设施投入？</li>
             </ul>
           </div>
        </div>

        <div className="h-80 w-full glass-panel p-4 rounded-xl">
           <h4 className="text-center text-slate-400 text-sm mb-4">估值对标：基础设施巨头 (P/E Ratio Context)</h4>
           <ResponsiveContainer width="100%" height="100%">
             <BarChart data={data} layout="vertical">
               <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
               <XAxis type="number" stroke="#94a3b8" />
               <YAxis dataKey="name" type="category" stroke="#e2e8f0" width={120} tick={{fontSize: 12}} />
               <Tooltip content={<CustomTooltip />} />
               <Bar dataKey="pe" fill="#0ea5e9" radius={[0, 4, 4, 0]} barSize={40} />
             </BarChart>
           </ResponsiveContainer>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-12">
        <h3 className="text-2xl font-bold text-white mb-8 text-center">CTO & CAIO 战略建议</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-slate-800 hover:border-brand-500/50 transition-colors group">
             <div className="w-12 h-12 bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-900/50">
               <span className="text-blue-400 font-bold text-xl">1</span>
             </div>
             <h4 className="text-white font-bold mb-2">混合架构</h4>
             <p className="text-slate-400 text-sm">利用云平台的多样性，采用多模型架构，避免被单一供应商锁定。</p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-slate-800 hover:border-brand-500/50 transition-colors group">
             <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-900/50">
               <span className="text-purple-400 font-bold text-xl">2</span>
             </div>
             <h4 className="text-white font-bold mb-2">投资治理</h4>
             <p className="text-slate-400 text-sm">将重点从模型训练转向 <strong>Agent Factory</strong> 的治理与审计。部署 AIP 或 Control Tower 类系统。</p>
          </div>

          <div className="bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-xl border border-slate-800 hover:border-brand-500/50 transition-colors group">
             <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-900/50">
               <span className="text-green-400 font-bold text-xl">3</span>
             </div>
             <h4 className="text-white font-bold mb-2">主权优先</h4>
             <p className="text-slate-400 text-sm">通过数据平台（Databricks/Snowflake）将专有知识固化到私有模型中，确保核心资产控制权。</p>
          </div>
        </div>
      </div>

    </Section>
  );
};