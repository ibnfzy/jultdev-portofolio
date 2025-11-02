import { motion } from 'framer-motion';
import { experienceTimeline } from '../data/profile';

const fadeIn = (direction = 'up', delay = 0) => {
  const distance = 32;

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

export default function ExperienceTimeline() {
  return (
    <motion.section
      className="space-y-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeIn('up', 0.1)}
    >
      <div className="space-y-3 text-center">
        <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">Perjalanan Karier</h2>
        <p className="text-base text-foreground/70 sm:text-lg">
          Rekam jejak pengalaman profesional yang membentuk pendekatan produk dan kolaborasi saya.
        </p>
      </div>

      <div className="relative mx-auto max-w-4xl">
        <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent sm:left-1/2 sm:-translate-x-1/2" aria-hidden="true" />
        <div className="space-y-10">
          {experienceTimeline.map((item, index) => (
            <motion.article
              key={item.id}
              className="relative grid gap-4 rounded-3xl border border-foreground/10 bg-background/70 p-6 shadow-sm shadow-primary/10 sm:grid-cols-[minmax(0,0.4fr),minmax(0,1fr)]"
              variants={fadeIn(index % 2 === 0 ? 'left' : 'right', index * 0.08)}
            >
              <div className="flex flex-col gap-1 text-sm font-medium text-foreground/70">
                <span className="text-xs uppercase tracking-[0.2em] text-primary/80">{item.period}</span>
                <h3 className="text-xl font-semibold text-secondary">{item.title}</h3>
                <span className="text-base text-foreground/80">{item.company}</span>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-foreground/80 sm:text-base">{item.description}</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className="absolute left-4 top-8 h-3 w-3 rounded-full border-4 border-background bg-primary sm:left-1/2 sm:-translate-x-1/2"
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
