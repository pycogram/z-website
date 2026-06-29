import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CrateCard, CrateStatus } from '@/components/CrateCard';
import { MotionDiv } from '@/components/framer/motion';

interface CrateInfo {
  name: string;
  description: string;
  status: CrateStatus;
  features: string[];
  href: string;
}

const crates: CrateInfo[] = [
  {
    name: 'z-core',
    description: 'Core agent primitives, lifecycle management, and capability system. The foundation for all agents.',
    status: 'stable',
    features: ['Agent derive macro', 'Lifecycle hooks', 'Capability system', 'State management'],
    href: '/crates/core',
  },
  {
    name: 'z-messaging',
    description: 'Type-safe async message passing with channels, addresses, and serialization support.',
    status: 'stable',
    features: ['Typed channels', 'Async/await', 'Address system', 'Serialization'],
    href: '/crates/messaging',
  },
  {
    name: 'z-cognition',
    description: 'BDI cognitive architecture with beliefs, desires, intentions, plan libraries, and reasoning.',
    status: 'beta',
    features: ['BDI model', 'Plan library', 'Goal reasoning', 'Deliberation'],
    href: '/crates/cognition',
  },
  {
    name: 'z-patterns',
    description: 'Organizational patterns for multi-agent coordination: hierarchy, swarm, market, coalition, and more.',
    status: 'beta',
    features: ['Hierarchy', 'Swarm', 'Market', 'Coalition', 'Holarchy', 'Blackboard'],
    href: '/crates/patterns',
  },
  {
    name: 'z-runtime',
    description: 'Async execution engine built on Tokio. Handles agent scheduling, supervision, and fault tolerance.',
    status: 'coming-soon',
    features: ['Tokio runtime', 'Supervision', 'Scheduling', 'Fault tolerance'],
    href: '/crates/runtime',
  },
  {
    name: 'z-deploy',
    description: 'Deployment utilities for containerization, orchestration, and distributed systems.',
    status: 'coming-soon',
    features: ['Docker', 'Kubernetes', 'Distributed', 'Monitoring'],
    href: '/crates/deploy',
  },
  {
    name: 'z-tools',
    description: 'Development tools including debugging, visualization, and testing utilities.',
    status: 'coming-soon',
    features: ['Debugger', 'Visualizer', 'Testing', 'Benchmarks'],
    href: '/crates/tools',
  },
  {
    name: 'z-macros',
    description: 'Procedural macros for agent definition, message types, and pattern implementation.',
    status: 'stable',
    features: ['Agent derive', 'Message derive', 'Pattern macros'],
    href: '/crates/macros',
  },
];

export default function Crates() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Crates</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Crates</h1>
            <p className="text-xl text-start text-muted-foreground max-w-2xl mx-auto">
              ZeroicAI is built as a polyrepo of independent crates. Use only what you need,
              or combine them for a complete multi-agent framework.
            </p>
          </MotionDiv>

          {/* Status legend */}
          <div className="grid grid-cols-1 sm:flex justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <span className="crate-badge stable">Stable</span>
              <span className="text-sm text-muted-foreground">Production ready</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="crate-badge beta">Beta</span>
              <span className="text-sm text-muted-foreground">API may change</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="crate-badge coming-soon">Coming Soon</span>
              <span className="text-sm text-muted-foreground">In development</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crates.map((crate, i) => (
              <CrateCard key={crate.name} {...crate} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
