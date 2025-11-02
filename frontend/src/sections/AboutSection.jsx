import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { aboutProfile } from '../data/profile';

const fadeIn = (direction = 'up', delay = 0) => {
  const distance = 40;

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

export default function AboutSection() {
  return (
    <motion.section
      className="grid items-center gap-12 rounded-[2.5rem] border border-foreground/10 bg-background/60 px-8 py-12 shadow-lg shadow-primary/10 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeIn('up', 0.1)}
    >
      <motion.div
        className="relative mx-auto flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/40 via-secondary/30 to-background shadow-xl"
        variants={fadeIn('right', 0.2)}
      >
        <div className="absolute inset-4 rounded-full bg-background/70 backdrop-blur" />
        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <span className="text-3xl font-display font-semibold text-primary">JultDev</span>
        </div>
        <span className="sr-only">Foto profil bergaya minimalis</span>
      </motion.div>

      <motion.div className="space-y-5" variants={fadeIn('left', 0.2)}>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {aboutProfile.title}
        </p>
        <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">
          {aboutProfile.headline}
        </h2>
        <p className="text-base text-foreground/80 sm:text-lg">{aboutProfile.description}</p>
        <ul className="grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
          {aboutProfile.highlights.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
        {aboutProfile.cta?.label && aboutProfile.cta?.href ? (
          <div>
            <Link
              to={aboutProfile.cta.href}
              className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
            >
              {aboutProfile.cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ) : null}
      </motion.div>
    </motion.section>
  );
}
