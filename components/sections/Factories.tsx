import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { ChipData, AgentData } from '../../types';
import { Cpu, Server, Bot, Layers } from 'lucide-react';

const chipData: ChipData[] = [
  { company: "NVIDIA", chip: "H100/Blackwell", useCase: "通用训练 & 推理", advantage: "全栈生态 (CUDA), 90% 市场份额", status: "垄断基石" },
  { company: "Google", chip: "TPU v5e", useCase: "训练 & 大规模推理", advantage: "高能效比，用于 Anthropic 及自身", status: "强力替代" },
  { company: "AWS", chip: "Trainium/Inferentia", useCase: "推理成本优化", advantage: "推理成本降低 4x", status: "生态建设中" },
  { company: "Meta", chip: "MTIA", useCase: "推荐系统推理", advantage: "针对内部特定负载极致优化", status: "内部专用" },
];

const agentData: AgentData[] = [
  { company: "ServiceNow", architecture: "Control Tower", governance: "嵌入式治理", role: "自主解决IT/HR问题" },
  { company: "Palantir (AIP)", architecture: "Ontology + AIP Logic", governance: "强制人为监督 (Human Oversight)", role: "宏观委托，微观驾驭" },
  { company: "AWS AgentCore", architecture: "Runtime/Memory/Identity", governance: "细粒度授权", role: "多Agent团队协作 (A2A)" },
  { company: "Anthropic", architecture: "MCP Protocol", governance: "互操作性标准", role: "跨平台协作与商务交易" },
];

export const Factories: React.FC = () => {
  return (
    <Section id="factories" title="第二部分：AI软件工厂的三层架构" subtitle="AI软件工厂的构建可以被划分为三个核心层：关注效率的算力层(Token Factory)，关注价值最大化的应用服务器层(Agent Factory)，以及关注零摩擦可快速迭代的应用业务层(App)。">
      
      {/* Layer A: Token Factory */}
      <div className="mb-20 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent opacity-50 hidden md:block"></div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded bg-blue-900/50 text-blue-400 text-sm font-bold border border-blue-800">A</span>
          <span className="flex items-center gap-2"><Cpu className="text-brand-500" /> 基础设施层：算力代工厂 (Token Factory)</span>
        </h3>
        <p className="text-slate-400 mb-6 max-w-4xl pl-2">
          基础设施竞争的焦点已经发生结构性转移。NVIDIA 仍主导高价值训练市场，但推理市场正在被云巨头的定制 ASICs 挑战。竞争核心从“原始算力”转向“Token效率 (瓦特/美元)”。
        </p>
        
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/50 shadow-lg">
          <table className="w-full text-left text-sm text-slate-400">
            <thead className="bg-slate-950 text-slate-200 uppercase font-medium">
              <tr>
                <th className="px-6 py-4">公司</th>
                <th className="px-6 py-4">芯片架构</th>
                <th className="px-6 py-4">核心优势 / 效率目标</th>
                <th className="px-6 py-4">生态定位</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {chipData.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-white">{item.company}</td>
                  <td className="px-6 py-4">{item.chip}</td>
                  <td className="px-6 py-4 text-brand-300">{item.advantage}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      item.status.includes('垄断') ? 'bg-purple-900/50 text-purple-200 border border-purple-800' : 'bg-blue-900/50 text-blue-200 border border-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Layer B: Agent Factory */}
      <div className="mb-20 relative">
        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent opacity-50 hidden md:block"></div>
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded bg-indigo-900/50 text-indigo-400 text-sm font-bold border border-indigo-800">B</span>
          <span className="flex items-center gap-2"><Bot className="text-brand-500" /> 应用服务器层：代理工厂(Agent Factory)</span>
        </h3>
        <p className="text-slate-400 mb-6 pl-2">
          关注每个Token的价值最大化。瓶颈已不再是模型智力，而是互操作性、身份验证和事务处理。
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {agentData.map((agent, idx) => (
            <Card key={idx} className="border-t-4 border-t-indigo-600 h-full">
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-lg font-bold text-white">{agent.company}</h4>
                <div className="bg-slate-800 px-2 py-1 rounded text-xs text-slate-400 border border-slate-700">{agent.architecture}</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                   <div className="mt-1.5 min-w-[4px] h-[4px] rounded-full bg-indigo-400"></div>
                   <p className="text-sm"><span className="text-slate-300 font-medium">治理机制:</span> {agent.governance}</p>
                </div>
                <div className="flex items-start gap-2">
                   <div className="mt-1.5 min-w-[4px] h-[4px] rounded-full bg-indigo-400"></div>
                   <p className="text-sm"><span className="text-slate-300 font-medium">定位:</span> {agent.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

       {/* Layer C: App Layer */}
       <div className="relative">
          <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 to-transparent opacity-50 hidden md:block"></div>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="flex items-center justify-center w-8 h-8 rounded bg-green-900/50 text-green-400 text-sm font-bold border border-green-800">C</span>
            <span className="flex items-center gap-2"><Layers className="text-green-500"/> 应用业务层：通用、垂直应用 (App)</span>
          </h3>
          
          <p className="text-slate-400 mb-6 pl-2 max-w-4xl">
            理解业务背景，意图驱动，零摩擦使用成本，可快速迭代，集成开发环境 (IDE)或者画布(Canvas) 概念将扩展至所有知识工作者。
          </p>

          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-2xl border border-slate-800 shadow-xl">
            <div className="mb-6">
               <h4 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                 <Server size={18} className="text-green-400"/>
                 微软与数据平台的战略：智能模型集成
               </h4>
               <p className="text-slate-400 text-sm leading-relaxed">
                 在最上层业务层，微软的 AI 软件工厂战略着眼于最大化潜在市场 (TAM)。不绑定单一模型，而是通过“智能模型集成”让技术栈的每一层都参与竞争，实现数据民主化与模型主权。
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 hover:border-green-500/30 transition-colors">
                  <h4 className="text-white font-medium mb-3 border-b border-white/10 pb-2">Snowflake Cortex</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    <span className="text-green-400 font-semibold">“数据不移动原则”</span>。提供包括 Arctic, GPT-5, Llama 3 在内的策展模型组合。用户可用熟悉的 SQL/Python 直接在数据上运行模型，大幅降低 Time-to-Value。
                  </p>
               </div>
               <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800 hover:border-green-500/30 transition-colors">
                  <h4 className="text-white font-medium mb-3 border-b border-white/10 pb-2">Databricks Mosaic AI</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                     <span className="text-green-400 font-semibold">“模型主权”</span>。强调 BYOM (Bring Your Own Model) 和基础模型微调 (Foundation Model Fine-tuning)。允许企业拥有专业化模型的完全所有权，避免被厂商锁定。
                  </p>
               </div>
            </div>
          </div>
       </div>

    </Section>
  );
};