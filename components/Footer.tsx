import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-4">全球AI企业战略深度报告 &copy; {new Date().getFullYear()}</p>
        <p className="max-w-2xl mx-auto leading-relaxed text-xs">
          本报告基于当前市场数据与技术趋势分析。涵盖 NVIDIA, Google, AWS, Palantir, Databricks, Snowflake 等核心企业战略动向。
          <br/>核心主题：模型主权、AI软件工厂架构、Agentic Workflows。
        </p>
      </div>
    </footer>
  );
};