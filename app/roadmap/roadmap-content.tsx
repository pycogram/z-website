import Link from 'next/link';
import { ChevronRight, CheckCircle2, Circle, Clock, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '@/components/framer/motion';

interface RoadmapItem {
  name: string;
  version: string;
  status: 'done' | 'in-progress' | 'planned';
  description: string;
  features: string[];
}

const roadmapItems: RoadmapItem[] = [
  {
    name: 'z-core',
    version: '0.1.0',
    status: 'done',
    description: 'Core agent primitives and lifecycle management',
    features: ['Agent trait', 'Derive macros', 'Lifecycle hooks', 'State management'],
  },
  {
    name: 'z-messaging',
    version: '0.1.0',
    status: 'done',
    description: 'Type-safe async message passing',
    features: ['Typed channels', 'Address system', 'Async/await', 'Serialization'],
  },
  {
    name: 'z-macros',
    version: '0.1.0',
    status: 'done',
    description: 'Procedural macros for ergonomic APIs',
    features: ['Agent derive', 'Message derive', 'Handler macros'],
  },
  {
    name: 'z-cognition',
    version: '0.1.0-beta',
    status: 'in-progress',
    description: 'BDI cognitive architecture',
    features: ['Beliefs', 'Desires', 'Intentions', 'Plan library', 'Goal reasoning'],
  },
  {
    name: 'z-patterns',
    version: '0.1.0-beta',
    status: 'in-progress',
    description: 'Organizational patterns for multi-agent coordination',
    features: ['Hierarchy', 'Swarm', 'Market', 'Coalition', 'Holarchy', 'Federation', 'Blackboard', 'Team'],
  },
  {
    name: 'z-runtime',
    version: '0.1.0',
    status: 'planned',
    description: 'Async execution engine with supervision',
    features: ['Tokio integration', 'Supervision trees', 'Fault tolerance', 'Scheduling'],
  },
  {
    name: 'z-deploy',
    version: '0.1.0',
    status: 'planned',
    description: 'Deployment and orchestration tools',
    features: ['Docker support', 'Kubernetes operators', 'Monitoring', 'Distributed deployment'],
  },
  {
    name: 'z-tools',
    version: '0.1.0',
    status: 'planned',
    description: 'Development and debugging utilities',
    features: ['Visual debugger', 'Message inspector', 'Performance profiler', 'Test harness'],
  },
  {
    name: 'z-storage',
    version: '0.1.0',
    status: 'planned',
    description: 'Persistence and state management',
    features: ['Agent state persistence', 'Event sourcing', 'Snapshot support'],
  },
  {
    name: 'z-network',
    version: '0.1.0',
    status: 'planned',
    description: 'Distributed agent networking',
    features: ['Remote messaging', 'Discovery', 'Clustering', 'P2P support'],
  },
];

const statusConfig = {
  done: { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500' },
  'in-progress': { icon: Clock, color: 'text-amber-500', bg: 'bg-amber-500' },
  planned: { icon: Circle, color: 'text-muted-foreground', bg: 'bg-muted-foreground/30' },
};

export default function Roadmap() {
  const completedCount = roadmapItems.filter((item) => item.status === 'done').length;
  const inProgressCount = roadmapItems.filter((item) => item.status === 'in-progress').length;
  const progress = Math.round(((completedCount + inProgressCount * 0.5) / roadmapItems.length) * 100);

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
              <span className="text-foreground">Roadmap</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Roadmap</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Track our progress as we build the complete ZeroicAI framework.
            </p>

            {/* Progress overview */}
            <div className="max-w-xl mx-auto">
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium">Overall Progress</span>
                <span className="text-primary font-bold">{progress}%</span>
              </div>
              <div className="progress-bar">
                <MotionDiv
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="progress-bar-fill"
                />
              </div>
              <div className="flex justify-center gap-6 mt-4 text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {completedCount} Complete
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  {inProgressCount} In Progress
                </span>
                <span className="flex items-center gap-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  {roadmapItems.length - completedCount - inProgressCount} Planned
                </span>
              </div>
            </div>
          </MotionDiv>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {roadmapItems.map((item, i) => {
                const { icon: Icon, color, bg } = statusConfig[item.status];
                const isEven = i % 2 === 0;

                return (
                  <MotionDiv
                    key={item.name}
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`relative flex items-start gap-8 mb-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1.5 z-10">
                      <div className={`h-3 w-3 rounded-full ${bg} ring-4 ring-background`} />
                    </div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className={`feature-card ${isEven ? 'md:ml-auto' : ''}`}>
                        <div className={`flex items-center gap-2 mb-2 ${isEven ? 'md:justify-end' : ''}`}>
                          <Icon className={`h-4 w-4 ${color}`} />
                          <span className="font-mono font-semibold">{item.name}</span>
                          <span className="text-xs text-muted-foreground">{item.version}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                        <div className={`flex flex-wrap gap-1 ${isEven ? 'md:justify-end' : ''}`}>
                          {item.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground mb-4">
              Want to contribute to the roadmap? We welcome contributions!
            </p>
            <a href="https://github.com/zeroicai" target="_blank" rel="noopener noreferrer">
              <Button variant="outline">
                <ExternalLink className="mr-2 h-4 w-4" />
                Contribute on GitHub
              </Button>
            </a>
          </MotionDiv>
        </div>
      </div>
    </Layout>
  );
}
