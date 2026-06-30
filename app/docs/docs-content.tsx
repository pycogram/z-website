import Link from 'next/link';
import { ChevronRight, ArrowRight, BookOpen, Code, Cpu, Network, ExternalLink } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { MotionDiv } from '@/components/framer/motion';

const docSections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Install the crates, implement your first Agent, and run it with the runtime in minutes.',
    href: '/docs/getting-started',
    external: false,
  },
  {
    icon: Code,
    title: 'Examples',
    description: 'Six runnable examples — hello_agent, cognitive_agent, market_pattern, swarm_pattern, supervised_agents, full_system.',
    href: '/examples',
    external: false,
  },
  {
    icon: Cpu,
    title: 'Crates',
    description: 'Browse all crates: z-core, z-messaging, z-cognition, z-patterns, z-runtime, and the zeroicai facade.',
    href: '/crates',
    external: false,
  },
  {
    icon: Network,
    title: 'GitHub',
    description: 'Source code, open issues, and contributions. All crates are open source under MIT / Apache-2.0.',
    href: 'https://github.com/ZeroicAI',
    external: true,
  },
];

export default function Docs() {
  return (
    <Layout>
      <div>
        {/* Breadcrumb */}
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Documentation</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to build multi-agent systems with ZeroicAI.
            </p>
          </MotionDiv>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {docSections.map((section, i) => (
              <MotionDiv
                key={`${section.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {section.external ? (
                  <a href={section.href} target="_blank" rel="noopener noreferrer" className="feature-card block h-full">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1">
                      Open GitHub <ExternalLink className="h-4 w-4" />
                    </span>
                  </a>
                ) : (
                  <Link href={section.href} className="feature-card block h-full">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <p className="text-muted-foreground mb-4">{section.description}</p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1">
                      Read more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                )}
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}