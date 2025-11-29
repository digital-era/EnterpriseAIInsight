import React from 'react';
import { Section } from '../ui/Section';
import { Card, StatCard } from '../ui/Card';
import { Workflow, UserCheck, Search, ShieldAlert } from 'lucide-react';
import { GovernanceData } from '../../types';

const governanceData: GovernanceData[] = [
    { platform: "ServiceNow", mechanism: "AI Control Tower", sovereignty: "统一管理跨平台AI资产与策略" },
    { platform: "Palantir AIP", mechanism: "Ontology & Audit Logs", sovereignty: "内置于数据与行动流的动态治理" },
    { platform: "Snowflake", mechanism: "Unified Governance / RBAC", sovereignty: "数据驻留与统一安全策略" },
    { platform: "Databricks", mechanism: "Unity Catalog", sovereignty: "细粒度权限与完全的模型所有权" },
];

export const FutureAndGovernance: React.FC = () => {
  return (
    <Section id="future" title="第三 & 四部分：未来工作模式与治理" subtitle="AI正在重塑工作流：从“宏观委托，微观驾驭”到Agentic Commerce。">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
         <StatCard label="Agentic Commerce" value="$3T - $5T" desc="2030年全球潜在市场规模 (McKinsey)" />
         <StatCard label="ServiceNow" value="+20%" desc="Agentic AI 能力带来的生产力收益" />
         <StatCard label="NVIDIA Share" value="90%" desc="目前在GPU-based AI芯片领域的市场份额" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-stretch">
        <div className="flex flex-col h-full">
           <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 h-10">
             <Workflow className="text-brand-500" /> 代理工作流 (Agentic Workflows)
           </h3>
           <div className="flex-1 flex flex-col gap-6">
             <Card title="全民 IDE：审查与迭代" className="flex-1 flex flex-col">
               <div className="flex-1">
                 <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                   Agent 的自主性不代表人类缺席。知识工作者（律师、会计师）将需要类似 IDE 的环境来审查、干预 AI 的输出。
                 </p>
               </div>
               <div className="bg-slate-800/50 p-4 rounded-lg text-sm text-slate-300 border-l-2 border-brand-500 mt-auto">
                 <strong className="block mb-1 text-white">Palantir AIP 解决方案</strong>
                 Ontology-based decision support 确保 AI 建议在可理解的业务背景下呈现，而非黑箱。提供强制性的人为监督工作流 (Human Oversight Workflows)。
               </div>
             </Card>
             <Card title="Agentic Commerce" className="flex-1 flex flex-col">
                <div className="flex-1">
                  <p className="text-slate-400 text-sm leading-relaxed">
                     通过 MCP 和 A2A 协议，Agent 将能够自主完成购买旅程。零售商必须构建 Agent-ready 的接口，并重新思考身份管理和忠诚度模型，以适应数万亿美元的 Agent 经济。
                  </p>
                </div>
             </Card>
           </div>
        </div>

        <div className="flex flex-col h-full">
           <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2 h-10">
             <Search className="text-brand-500" /> 商业化与知识服务
           </h3>
           <div className="flex-1 flex flex-col gap-6">
              <Card title="Perplexity: AI原生搜索" className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                      Perplexity Enterprise 代表了AI驱动下的知识发现新商业模式。通过提供高信任度、实时、可引用来源的外部研究能力构建商业壁垒。
                    </p>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg border-l-2 border-green-500 mt-auto">
                     <div className="text-sm text-slate-300 mb-2 font-medium text-white">信任与合规壁垒：</div>
                     <div className="flex gap-2 flex-wrap">
                        <span className="px-2 py-1 bg-green-900/20 text-green-400 text-xs rounded border border-green-800/50">SOC 2 Type II</span>
                        <span className="px-2 py-1 bg-green-900/20 text-green-400 text-xs rounded border border-green-800/50">不用于训练</span>
                        <span className="px-2 py-1 bg-green-900/20 text-green-400 text-xs rounded border border-green-800/50">实时引用</span>
                     </div>
                  </div>
              </Card>
              <Card title="OpenAI & Anthropic 生态" className="flex-1 flex flex-col">
                  <div className="space-y-4 flex-1">
                    <div>
                      <strong className="text-white block text-sm mb-1">OpenAI AgentKit</strong>
                      <p className="text-slate-400 text-sm">商业化的“简单按钮”，可视化的 Agent 构建器，允许商家轻松嵌入 Agent 功能。</p>
                    </div>
                    <div className="w-full h-px bg-white/5"></div>
                    <div>
                      <strong className="text-white block text-sm mb-1">Anthropic Protocols</strong>
                      <p className="text-slate-400 text-sm">专注于支付与互操作性协议 (AP2/MCP)，做 Agent 经济的基础设施与连接器。</p>
                    </div>
                  </div>
              </Card>
           </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <ShieldAlert className="text-brand-500" /> 企业AI治理架构深度对比
      </h3>
      <div className="overflow-hidden rounded-xl border border-slate-800 shadow-xl">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-slate-900/80 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            {governanceData.map((item, idx) => (
                <div key={idx} className="p-6 hover:bg-slate-800/50 transition-colors flex flex-col h-full">
                    <div className="font-bold text-white mb-2 text-lg">{item.platform}</div>
                    <div className="text-brand-400 text-xs font-bold uppercase mb-4 tracking-wider">{item.mechanism}</div>
                    <p className="text-sm text-slate-400 leading-relaxed mt-auto">{item.sovereignty}</p>
                </div>
            ))}
         </div>
      </div>

    </Section>
  );
};