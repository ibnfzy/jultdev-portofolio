import { motion } from 'framer-motion';
import { skillCategories } from '../data/profile';

const fadeIn = (direction = 'up', delay = 0) => {
  const distance = 36;

  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        delay,
      },
    },
  };
};

export default function SkillsSection() {
  return (
    <motion.section
      className="space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeIn('up', 0.1)}
    >
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">Keterampilan Unggulan</h2>
        <p className="text-base text-foreground/70 sm:text-lg">
          Spektrum kemampuan teknis dan kolaboratif yang menopang proses pengembangan produk end-to-end.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.name}
            className="flex h-full flex-col gap-5 rounded-3xl border border-foreground/10 bg-background/80 p-6 shadow-sm shadow-secondary/10 transition hover:-translate-y-1 hover:shadow-lg"
            variants={fadeIn('up', index * 0.08)}
            whileHover={{ y: -6 }}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
              <p className="text-sm text-foreground/70">{category.description}</p>
            </div>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2 rounded-2xl bg-foreground/5 p-4">
                  <div className="flex items-center justify-between text-sm font-medium text-foreground/80">
                    <span className="text-base font-semibold text-foreground">{skill.name}</span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-foreground/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                      style={{ width: `${skill.percentage}%` }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-right text-xs font-medium text-foreground/60">{skill.percentage}%</div>
                </div>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
