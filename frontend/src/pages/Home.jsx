import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const techHighlights = [
  {
    name: 'React',
    description: 'Membangun UI modular dengan komponen yang dapat digunakan ulang dan state yang terkelola.',
    icon: '⚛️',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first styling untuk menyusun layout responsif dengan cepat tanpa meninggalkan JSX.',
    icon: '🎨',
  },
  {
    name: 'Framer Motion',
    description: 'Animasi interaktif dan transisi halus yang meningkatkan pengalaman pengguna.',
    icon: '🌀',
  },
  {
    name: 'RESTful API',
    description: 'Integrasi API yang andal untuk sinkronisasi data dan automasi alur kerja.',
    icon: '🔗',
  },
  {
    name: 'Testing',
    description: 'Pendekatan yang mengutamakan kualitas melalui pengujian otomatis dan manual.',
    icon: '✅',
  },
  {
    name: 'CI/CD',
    description: 'Pipeline modern untuk rilis yang cepat dan stabil pada berbagai lingkungan.',
    icon: '🚀',
  },
];

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

export default function Home() {
  return (
    <div className="flex-1 bg-background">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-16 sm:py-24">
        <motion.section
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)]"
          initial="hidden"
          animate="visible"
          variants={fadeIn('up', 0.1)}
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Halo, saya
            </p>
            <h1 className="text-4xl font-display font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Julianto Putra
            </h1>
            <div className="text-lg font-semibold text-secondary sm:text-xl">
              <Typewriter
                words={['Frontend Engineer', 'UI Enthusiast', 'Product-focused Developer']}
                loop
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={2500}
              />
            </div>
            <p className="text-lg text-foreground/80 sm:text-xl">
              Saya membantu tim produk merancang antarmuka yang konsisten dan berperforma tinggi
              dengan menggabungkan desain sistematis, aksesibilitas, dan alur kerja berbasis data.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-background shadow-lg shadow-primary/30 transition hover:translate-y-0.5 hover:bg-primary/90"
              >
                Ajak Kolaborasi
              </Link>
              <a
                href="#highlight"
                className="inline-flex items-center justify-center rounded-full border border-foreground/20 px-6 py-3 text-base font-semibold text-foreground transition hover:border-primary hover:text-primary"
              >
                Lihat Teknologi Unggulan
              </a>
            </div>
          </div>
          <motion.div
            className="relative mx-auto flex h-64 w-64 items-center justify-center rounded-[3rem] bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/30 p-1 shadow-xl"
            variants={fadeIn('down', 0.3)}
          >
            <div className="flex h-full w-full items-center justify-center rounded-[2.8rem] bg-background/70 backdrop-blur">
              <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                <span className="text-4xl font-display font-semibold text-background">JP</span>
              </div>
            </div>
            <span className="sr-only">Avatar ilustrasi Julianto Putra</span>
          </motion.div>
        </motion.section>

        <motion.section
          id="highlight"
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeIn('up', 0.1)}
        >
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Teknologi Unggulan
            </h2>
            <p className="text-base text-foreground/70 sm:text-lg">
              Pilar teknologi yang paling sering saya gunakan untuk membangun pengalaman digital yang kaya dan dapat diskalakan.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {techHighlights.map((tech, index) => (
              <motion.article
                key={tech.name}
                className="flex h-full flex-col gap-3 rounded-2xl border border-foreground/10 bg-background/60 p-6 shadow-sm shadow-primary/10 transition hover:-translate-y-1 hover:shadow-lg"
                variants={fadeIn('up', index * 0.05)}
                whileHover={{ y: -6 }}
              >
                <div className="text-3xl" aria-hidden="true">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary">{tech.name}</h3>
                <p className="text-base text-foreground/70">{tech.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn('up', 0.1)}
        >
          <motion.div
            className="relative mx-auto h-56 w-56 overflow-hidden rounded-full border-4 border-primary/30 bg-gradient-to-br from-primary/40 via-secondary/30 to-background shadow-xl"
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
              Tentang Saya
            </p>
            <h2 className="text-3xl font-display font-semibold text-foreground sm:text-4xl">
              Membawa konsistensi, kolaborasi, dan fokus pada dampak bisnis
            </h2>
            <p className="text-base text-foreground/80 sm:text-lg">
              Dengan pengalaman lintas produk SaaS dan layanan digital, saya terbiasa menerjemahkan visi bisnis menjadi antarmuka yang intuitif.
              Saya menikmati bekerja dekat dengan desainer, PM, dan engineer backend untuk memastikan setiap rilis membawa nilai nyata bagi pengguna.
            </p>
            <ul className="grid gap-3 text-sm text-foreground/80 sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                Desain sistem dan dokumentasi komponen yang rapih
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                Fokus pada performa dan aksesibilitas sejak awal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                Eksperimen iteratif dengan data kuantitatif maupun kualitatif
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                Kolaborasi lintas tim dengan komunikasi yang transparan
              </li>
            </ul>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-primary transition hover:text-primary/80"
              >
                Pelajari perjalanan lengkap saya
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
