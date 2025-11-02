import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects.js';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="flex-1 bg-background">
        <section className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-24 text-center">
          <h1 className="text-4xl font-display font-semibold text-primary">Proyek tidak ditemukan</h1>
          <p className="text-base text-foreground/70">
            Kami tidak dapat menemukan proyek yang Anda cari. Silakan kembali ke daftar proyek untuk melihat showcase lainnya.
          </p>
          <Link to="/projects" className="mx-auto inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary/90">
            Kembali ke Proyek
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-background">
      <article className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16 sm:py-24">
        <header className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            case study
          </div>
          <h1 className="text-4xl font-display font-bold text-primary sm:text-5xl">{project.title}</h1>
          <p className="mx-auto max-w-3xl text-base text-foreground/70 sm:text-lg">{project.summary}</p>
        </header>

        <div className="overflow-hidden rounded-3xl border border-foreground/10 shadow-lg">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        </div>

        <section className="grid gap-8 rounded-3xl border border-foreground/10 bg-background/60 p-8 shadow-sm lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">Problem</h2>
            <p className="text-base leading-relaxed text-foreground/80">{project.problem}</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">Solusi</h2>
            <p className="text-base leading-relaxed text-foreground/80">{project.solution}</p>
          </div>
        </section>

        <section className="grid gap-8 rounded-3xl border border-foreground/10 bg-background/60 p-8 shadow-sm lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">Teknologi</h2>
            <ul className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <li key={tech} className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-display font-semibold text-foreground">Hasil</h2>
            <p className="text-base leading-relaxed text-foreground/80">{project.result}</p>
          </div>
        </section>

        <section className="rounded-3xl border border-foreground/10 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 p-8 text-center shadow-md">
          <h2 className="text-2xl font-display font-semibold text-primary">Ingin melihatnya secara langsung?</h2>
          <p className="mt-3 text-base text-foreground/70">Jelajahi demo interaktif atau tinjau repositori untuk melihat detail implementasi.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:bg-primary/90">
              Buka Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-background">
              Kunjungi GitHub
            </a>
            <Link to="/projects" className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground/80 transition hover:border-primary hover:text-primary">
              Kembali ke daftar proyek
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
