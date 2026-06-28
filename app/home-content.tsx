"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  MessageSquare,
  Brain,
  Network,
  Zap,
  Shield,
  ArrowRight,
  Package,
  Clock,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { FeatureCard } from '@/components/FeatureCard';
import { CodeBlock } from '@/components/CodeBlock';
import { OccultGlyph } from '@/components/effects/OccultGlyph';
import { EyeParticles } from '@/components/effects/EyeParticles';
import { AgentTicker } from '@/components/effects/AgentTicker';

const features = [
  {
    icon: Cpu,
    title: 'Agent Primitives',
    description: 'Implement the Agent trait with four async methods — initialize, execute, shutdown, handle_message. UUID-based AgentId, AgentContext for messaging and logging, and AgentState lifecycle machine.',
  },
  {
    icon: MessageSquare,
    title: 'FIPA Messaging',
    description: '11 FIPA performatives: Inform, Request, Query, Propose, Accept, Reject, Confirm, Disconfirm, Subscribe, CFP, Refuse. MessageBuilder API, typed Router, and bounded async Mailboxes.',
  },
  {
    icon: Brain,
    title: 'BDI Architecture',
    description: 'Full Beliefs-Desires-Intentions model. BeliefBase with certainty scoring, forward-chaining ReasoningEngine, STRIPS-style Planner, UtilityFunction, Goal types, and IntentionStack.',
  },
  {
    icon: Network,
    title: '8 Organizational Patterns',
    description: 'Blackboard, Swarm (Flocking/Foraging/Consensus), Federation (weighted voting), Hierarchy (delegation), Team (Leader/Coordinator/Executor), Market (4 auction types), Coalition, and Holarchy.',
  },
  {
    icon: Zap,
    title: 'Production Runtime',
    description: '4 restart strategies (Never, Always, OnFailure, ExponentialBackoff), CircuitBreaker (Closed/Open/HalfOpen), HealthCheck, MetricsRegistry, Sandbox isolation, and 4 scheduling policies.',
  },
  {
    icon: Shield,
    title: 'Rust Safety',
    description: 'All types are Send + Sync. Zero-cost async on Tokio. Memory safety without GC. The type system enforces agent contracts — AgentResult, AgentError variants, and lifecycle transitions at compile time.',
  },
];

const quickStartCode = `use z_core::prelude::*;

#[async_trait]
impl Agent for MyAgent {
    fn id(&self) -> &AgentId { &self.id }

    async fn initialize(&mut self, ctx: &AgentContext) -> AgentResult<()> {
        ctx.log_info("Agent initializing");
        Ok(())
    }

    async fn execute(&mut self, ctx: &AgentContext) -> AgentResult<()> {
        ctx.log_info("Agent executing");
        Ok(())
    }

    async fn shutdown(&mut self, ctx: &AgentContext) -> AgentResult<()> {
        ctx.log_info("Agent shutting down");
        Ok(())
    }
}`;

const stats = [
  { label: 'Crates', value: '10', icon: Package },
  { label: 'Progress', value: '40%', icon: Clock },
  { label: 'Patterns', value: '8+', icon: Network },
];

const roadmapItems = [
  { name: 'z-core', status: 'done' },
  { name: 'z-messaging', status: 'done' },
  { name: 'z-cognition', status: 'done' },
  { name: 'z-patterns', status: 'done' },
  { name: 'z-runtime', status: 'done' },
  { name: 'zeroicai', status: 'done' },
  { name: 'z-xbot', status: 'done' },
  { name: 'z-deploy', status: 'planned' },
];

export default function Home() {
  return (
    <Layout>

      {/* ── Hero ───────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">

        {/* Rotating glyph backdrop */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[var(--cyan)] opacity-[0.09]">
          <div className="animate-ring-rotate">
            <OccultGlyph size={900} />
          </div>
        </div>

        {/* Eye particles */}
        <EyeParticles count={18} />

        {/* Scan beam */}
        <div className="scan-beam" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="terminal-text text-[0.65rem] uppercase tracking-[0.55em] mb-6"
          >
            ▸ Multi-Agent Systems Framework
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight mb-6"
          >
            Agent-Oriented
            <br />
            Programming{' '}
            <span className="text-[var(--cyan)] text-glow-cyan animate-flicker">
              for Rust
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-mono text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
          >
            Build intelligent, autonomous multi-agent systems.<br />
            BDI cognition. FIPA messaging. 8 organizational patterns.<br />
            <span className="text-[var(--yellow-glow)] text-glow-yellow">Deployed in Rust.</span>
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <Link href="/chat" className="btn-cyber glitch-hover">
              Chat with Agent
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="https://github.com/zeroicai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber btn-cyber-ghost glitch-hover"
            >
              <ArrowRight className="h-3.5 w-3.5" />
              View on GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center gap-10 sm:gap-16"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <stat.icon className="h-3.5 w-3.5 text-[var(--cyan)]" />
                  <span className="font-display text-2xl font-black text-[var(--cyan)] text-glow-cyan">
                    {stat.value}
                  </span>
                </div>
                <span className="terminal-text text-[0.6rem] uppercase tracking-[0.3em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Agent Ticker ────────────────────────────────── */}
      <AgentTicker />

      {/* ── Features ────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="terminal-text text-[0.65rem] uppercase tracking-[0.5em] mb-3">
              ▸ Framework capabilities
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
              Everything You Need for{' '}
              <span className="text-[var(--cyan)]">Multi-Agent Systems</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Modular crates designed for production-grade agent applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Start ─────────────────────────────────── */}
      <section className="py-24 border-y border-[var(--cyan)]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="terminal-text text-[0.65rem] uppercase tracking-[0.5em] mb-3">
                ▸ Getting started
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
                Start Building in{' '}
                <span className="text-[var(--cyan)]">Minutes</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Simple, expressive API that feels natural in Rust. Implement
                the Agent trait, define behaviors with async methods, and let
                the runtime handle the rest.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Agent trait with lifecycle hooks',
                  'Async/await message handling',
                  'Type-safe channel communication',
                  'Built-in lifecycle management',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="text-[var(--cyan)] text-glow-cyan font-mono">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/docs/getting-started" className="btn-cyber">
                Read the Documentation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            <motion.div
              className="relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="scan-beam" />
              <CodeBlock code={quickStartCode} language="rust" filename="main.rs" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Crate Roster ────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="terminal-text text-[0.65rem] uppercase tracking-[0.5em] mb-3">
              ▸ Architecture
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4">
              Polyrepo{' '}
              <span className="text-[var(--cyan)]">Crate System</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              Modular design. Use only what you need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="mb-8">
              <div className="flex justify-between text-xs mb-2 font-mono">
                <span className="text-muted-foreground uppercase tracking-wider">Overall Progress</span>
                <span className="text-[var(--cyan)] text-glow-cyan font-bold">Phase 2 — Stable</span>
              </div>
              <div className="progress-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '85%' }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="progress-bar-fill"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {roadmapItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="holo-frame flex items-center gap-3 p-4"
                >
                  <div
                    className={`h-2 w-2 rounded-full flex-shrink-0 ${
                      item.status === 'done'
                        ? 'bg-emerald-400'
                        : 'bg-muted-foreground/30'
                    }`}
                    style={item.status === 'done' ? { boxShadow: '0 0 6px #34d399' } : {}}
                  />
                  <span className={`font-mono text-sm ${item.status === 'done' ? 'text-[var(--cyan)]' : 'text-muted-foreground'}`}>
                    {item.name}
                  </span>
                  <span className={`ml-auto text-[0.6rem] font-mono uppercase tracking-wider opacity-70 ${
                    item.status === 'done' ? 'text-emerald-400' : 'text-muted-foreground'
                  }`}>
                    {item.status === 'done' ? 'online' : 'planned'}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/roadmap" className="btn-cyber btn-cyber-ghost">
                View Full Roadmap
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="holo-frame relative overflow-hidden p-10 sm:p-16 text-center"
          >
            <div className="scan-beam" />

            {/* Glyph watermark */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-[var(--cyan)] opacity-[0.05]">
              <OccultGlyph size={600} />
            </div>

            <div className="relative z-10">
              <p className="terminal-text text-[0.65rem] uppercase tracking-[0.5em] mb-4">
                ▸ Open Source — MIT / Apache-2.0
              </p>
              <h2 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">
                Ready to Build{' '}
                <span className="text-[var(--cyan)] text-glow-cyan animate-flicker">
                  Intelligent Agents?
                </span>
              </h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10">
                Join the community building the future of multi-agent systems
                in Rust.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/docs/getting-started" className="btn-cyber glitch-hover">
                  Get Started
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="https://github.com/zeroicai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyber btn-cyber-ghost glitch-hover"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                  Star on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
