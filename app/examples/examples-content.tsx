import Link from 'next/link';
import { ChevronRight, Code } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CodeBlock } from '@/components/CodeBlock';
import { Badge } from '@/components/ui/badge';
import { MotionDiv } from '@/components/framer/motion';

interface Example {
  title: string;
  description: string;
  pattern: string;
  code: string;
}

const examples: Example[] = [
  {
    title: 'Hierarchy Pattern',
    description: 'Corporate organization with CEO delegating to departments and employees.',
    pattern: 'Hierarchy',
    code: `use zeroicai_patterns::hierarchy::*;

    // Define the organizational hierarchy
    let org = Hierarchy::new()
        .with_root(CeoAgent::new("Alice"))
        .add_child("Alice", DepartmentAgent::new("Engineering"))
        .add_child("Alice", DepartmentAgent::new("Sales"))
        .add_child("Engineering", EmployeeAgent::new("Bob"))
        .add_child("Engineering", EmployeeAgent::new("Charlie"));

    // CEO broadcasts a directive
    org.broadcast_down(Directive::new("Q4 Goals")).await?;

    // Employees report up the chain
    org.report_up("Bob", Report::new("Feature shipped")).await?;`,
  },
  {
    title: 'Swarm Pattern',
    description: 'Drone coordination with emergent behavior and local communication.',
    pattern: 'Swarm',
    code: `use zeroicai_patterns::swarm::*;

    // Create a swarm of drone agents
    let swarm = Swarm::new(SwarmConfig {
        size: 50,
        neighborhood_radius: 10.0,
        alignment_weight: 1.0,
        cohesion_weight: 1.0,
        separation_weight: 1.5,
    });

    // Spawn drones with position
    for i in 0..50 {
        swarm.spawn(DroneAgent::new(random_position())).await?;
    }

    // Drones automatically coordinate via local rules
    swarm.start().await?;`,
  },
  {
    title: 'Market Pattern',
    description: 'Auction system with buyers, sellers, and price discovery.',
    pattern: 'Market',
    code: `use zeroicai_patterns::market::*;

    let market = Market::new(AuctionRules::english());

    // Register participants
    market.register_seller(SellerAgent::new("Alice", item)).await?;
    market.register_buyer(BuyerAgent::new("Bob", budget: 1000)).await?;
    market.register_buyer(BuyerAgent::new("Charlie", budget: 1500)).await?;

    // Run the auction
    let result = market.run_auction(Duration::from_secs(60)).await?;
    println!("Winner: {} at price {}", result.winner, result.price);`,
  },
  {
    title: 'Coalition Pattern',
    description: 'Dynamic team formation based on capabilities and goals.',
    pattern: 'Coalition',
    code: `use zeroicai_patterns::coalition::*;

    // Agents with different capabilities
    let agents = vec![
        Agent::new("Alice").with_skills(["rust", "ml"]),
        Agent::new("Bob").with_skills(["python", "data"]),
        Agent::new("Charlie").with_skills(["devops", "k8s"]),
    ];

    // Form coalition for a task
    let task = Task::new("Deploy ML Model")
        .requires(["ml", "devops"]);

    let coalition = CoalitionFormation::greedy()
        .form(&agents, &task).await?;

    println!("Coalition: {:?}", coalition.members());`,
  },
  {
    title: 'Blackboard Pattern',
    description: 'Shared knowledge space for collaborative problem solving.',
    pattern: 'Blackboard',
    code: `use zeroicai_patterns::blackboard::*;

    let blackboard = Blackboard::new();

    // Specialist agents contribute knowledge
    let hypothesis_agent = HypothesisAgent::new();
    let analyzer_agent = AnalyzerAgent::new();
    let validator_agent = ValidatorAgent::new();

    // Agents react to blackboard changes
    blackboard.on_change(|entry| {
        match entry.level {
            Level::Raw => hypothesis_agent.process(entry),
            Level::Hypothesis => analyzer_agent.analyze(entry),
            Level::Analysis => validator_agent.validate(entry),
        }
    });

    blackboard.post(RawData::new(sensor_reading)).await?;`,
  },
];


export default function Examples() {
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
              <span className="text-foreground">Examples</span>
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
            <h1 className="text-4xl font-bold mb-4">Examples</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore real-world examples of organizational patterns and multi-agent coordination.
            </p>
          </MotionDiv>

          <div className="space-y-12">
            {examples.map((example) => (
              <MotionDiv
                key={example.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border rounded-xl overflow-hidden bg-card"
              >
                <div className="p-6 border-b bg-muted/30">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-semibold">{example.title}</h2>
                        <Badge variant="secondary">{example.pattern}</Badge>
                      </div>
                      <p className="text-muted-foreground">{example.description}</p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`https://github.com/zeroicai/examples/${example.pattern.toLowerCase()}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        title="View on GitHub"
                      >
                        <Code className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <CodeBlock code={example.code} language="rust" showLineNumbers />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
