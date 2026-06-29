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
    description: 'Blackboard, Swarm, Federation, Hierarchy, Team, Market (4 auction types), Coalition, and Holarchy. Each pattern ships as a composable struct.',
  },
  {
    icon: Zap,
    title: 'Production Runtime',
    description: '4 restart strategies, CircuitBreaker (Closed/Open/HalfOpen), HealthCheck, MetricsRegistry, Sandbox isolation, and 4 scheduling policies. Built on Tokio.',
  },
  {
    icon: Shield,
    title: 'Rust Safety',
    description: 'All types are Send + Sync. Zero-cost async on Tokio. Memory safety without GC. The type system enforces agent contracts at compile time.',
  },
];

const heroCode = `use z_core::prelude::*;

#[async_trait]
impl Agent for MyAgent {
    fn id(&self) -> &AgentId { &self.id }

    async fn initialize(&mut self, ctx: &AgentContext) -> AgentResult<()> {
        ctx.log_info("Agent ready");
        Ok(())
    }

    async fn execute(&mut self, ctx: &AgentContext) -> AgentResult<()> {
        ctx.log_info("Tick");
        Ok(())
    }

    async fn shutdown(&mut self, ctx: &AgentContext) -> AgentResult<()> {
        ctx.log_info("Agent stopped");
        Ok(())
    }
}`;

const quickStartCode = `# Cargo.toml
[dependencies]
z-core      = { git = "https://github.com/ZeroicAI/z-core" }
z-messaging = { git = "https://github.com/ZeroicAI/z-messaging" }
z-cognition = { git = "https://github.com/ZeroicAI/z-cognition" }
z-patterns  = { git = "https://github.com/ZeroicAI/z-patterns" }
z-runtime   = { git = "https://github.com/ZeroicAI/z-runtime" }`;

const stats = [
  { label: 'Crates', value: '7', icon: Package },
  { label: 'Progress', value: '85%', icon: Clock },
  { label: 'Patterns', value: '8', icon: Network },
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
      <section className="relative min-h-screen flex items-center overflow-hidden px-4 pt-20">

        {/* Dot grid background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: 'radial-gradient(circle, #88e4f8 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-16">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-[var(--cyan)] mb-5"
            >
              Multi-Agent Framework · Rust
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              Build Autonomous{' '}
              <span className="text-[var(--cyan)]">Agent Systems</span>{' '}
              in Rust
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-base leading-relaxed mb-8 max-w-lg"
            >
              ZeroicAI is a modular, production-ready multi-agent framework.
              BDI cognition, FIPA messaging, 8 organizational patterns, and a
              supervised async runtime — all in safe Rust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <Link href="/docs/getting-started" className="btn-cyber">
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://github.com/ZeroicAI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber btn-cyber-ghost"
              >
                View on GitHub
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-10"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[var(--cyan)] font-mono mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — code */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CodeBlock code={heroCode} language="rust" filename="agent.rs" />
          </motion.div>

        </div>
      </section>

      {/* ── Features ────────────────────────────────────── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-[var(--cyan)] mb-3">
              Framework capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Everything you need for{' '}
              <span className="text-[var(--cyan)]">multi-agent systems</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Modular crates designed for production-grade agent applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Start ─────────────────────────────────── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-[var(--cyan)] mb-3">
                Getting started
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Add to your project in{' '}
                <span className="text-[var(--cyan)]">seconds</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Add the crates you need to your Cargo.toml. Each crate is
                independent — use only what your application requires.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  'Agent trait with async lifecycle hooks',
                  'Type-safe FIPA message passing',
                  'BDI cognitive reasoning engine',
                  'Supervised async runtime on Tokio',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="text-[var(--cyan)] font-mono text-xs">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/docs/getting-started" className="btn-cyber">
                Read the docs
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <CodeBlock code={quickStartCode} language="toml" filename="Cargo.toml" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Crate Roster ────────────────────────────────── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-[var(--cyan)] mb-3">
              Architecture
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Polyrepo{' '}
              <span className="text-[var(--cyan)]">crate system</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl">
              Modular design. Each crate ships independently — use only what you need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="mb-8">
              <div className="flex justify-between text-xs mb-2 font-mono">
                <span className="text-muted-foreground uppercase tracking-wider">Overall Progress</span>
                <span className="text-[var(--cyan)] font-semibold">Phase 2 — Stable</span>
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
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="holo-frame flex items-center gap-3 p-4"
                >
                  <div
                    className={`h-2 w-2 rounded-full flex-shrink-0 ${
                      item.status === 'done' ? 'bg-emerald-400' : 'bg-muted-foreground/30'
                    }`}
                    style={item.status === 'done' ? { boxShadow: '0 0 6px #34d399' } : {}}
                  />
                  <span className={`font-mono text-sm ${item.status === 'done' ? 'text-[var(--cyan)]' : 'text-muted-foreground'}`}>
                    {item.name}
                  </span>
                  <span className={`ml-auto text-[0.6rem] font-mono uppercase tracking-wider ${
                    item.status === 'done' ? 'text-emerald-400' : 'text-muted-foreground/50'
                  }`}>
                    {item.status === 'done' ? 'online' : 'planned'}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/roadmap" className="btn-cyber btn-cyber-ghost">
                View full roadmap
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="holo-frame p-10 sm:p-16"
          >
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.4em] text-[var(--cyan)] mb-4">
              Open Source · MIT / Apache-2.0
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to build{' '}
              <span className="text-[var(--cyan)]">intelligent agents?</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mb-10">
              Join the community building the future of multi-agent systems in Rust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/docs/getting-started" className="btn-cyber">
                Get Started
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="https://github.com/ZeroicAI"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber btn-cyber-ghost"
              >
                Star on GitHub
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
