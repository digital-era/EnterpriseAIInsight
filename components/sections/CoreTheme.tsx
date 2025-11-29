import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Brain, Lock, Network } from 'lucide-react';

export const CoreTheme: React.FC = () => {
  return (
    <Section id="theme" title="第一部分：核心主题与战略愿景" subtitle="未来的企业核心竞争力在于建立高效、可治理的“AI软件工厂”。核心目标已从简单的数据使用转向“模型即主权”——确保对AI产出、决策和底层知识的绝对控制。">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card title="Databricks: 知识固化" icon={<Brain size={24}/>}>
          <p className="mb-4">
            专注于最纯粹的技术路径。提供 <strong>Foundation Model Fine-tuning</strong>，允许企业利用专有数据微调基础模型。
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
            <li><strong className="text-slate-200">核心承诺：</strong> 客户对训练后的模型拥有完全所有权 (Full Ownership)。</li>
            <li><strong className="text-slate-200">价值：</strong> 将隐性知识沉淀为模型权重，解决数据隐私与敏感性问题。</li>
          </ul>
        </Card>

        <Card title="Palantir: 行动与决策治理" icon={<Network size={24}/>}>
          <p className="mb-4">
            战略重点在于行动约束。通过 <strong>AIP (Artificial Intelligence Platform)</strong> 将模型能力与 Foundry Ontology（本体论）深度集成。
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-400 text-sm">
            <li><strong className="text-slate-200">核心机制：</strong> Ontology 定义了AI决策的框架、行动边界和人类监督环节。</li>
            <li><strong className="text-slate-200">价值：</strong> 主权体现为对决策流程、可审计性和行动后果的全面控制。</li>
          </ul>
        </Card>
      </div>

      <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-800">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <Lock className="text-brand-500" /> 无摩擦治理的竞争
        </h3>
        <p className="text-slate-300 mb-6">
          企业AI面临的三大挑战——变革管理、合规性与数据架构——正被“无摩擦治理”重新定义。
          未来的竞争不在于谁的模型更强，而在于谁能将数据安全、合规性、审计追踪内置于底层架构中。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-950 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="text-white font-semibold">Snowflake</h4>
            <p className="text-sm text-slate-400 mt-2">“数据不移动原则”。Cortex LLMs 直接作用于数据，无需复制，受到统一治理策略保护。</p>
          </div>
          <div className="bg-slate-950 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="text-white font-semibold">ServiceNow</h4>
            <p className="text-sm text-slate-400 mt-2">变革管理。通过 Now Assist Agents 嵌入现有工作流，强调生产力提升而非颠覆。</p>
          </div>
           <div className="bg-slate-950 p-4 rounded-lg border-l-4 border-purple-500">
            <h4 className="text-white font-semibold">Google Cloud</h4>
            <p className="text-sm text-slate-400 mt-2">隔离部署。Vertex AI 提供 VPC 内自部署模型，甚至为极高安全机构提供气隙（Air-Gapped）基础设施。</p>
          </div>
        </div>
      </div>
    </Section>
  );
};