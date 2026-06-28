import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="holo-frame feature-card group"
    >
      <div className="h-10 w-10 flex items-center justify-center mb-4"
        style={{ border: '1px solid rgba(136,228,248,0.25)', background: 'rgba(136,228,248,0.06)' }}>
        <Icon className="h-5 w-5 text-[var(--cyan)]" style={{ filter: 'drop-shadow(0 0 4px var(--cyan))' }} />
      </div>
      <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-2 text-foreground group-hover:text-[var(--cyan)] transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
