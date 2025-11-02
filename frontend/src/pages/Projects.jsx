import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const [selectedTech, setSelectedTech] = useState('Semua');

  const filters = useMemo(() => {
    const techs = new Set();
    projects.forEach((project) => {
      project.techStack.forEach((tech) => techs.add(tech));
    });

    return ['Semua', ...Array.from(techs)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTech === 'Semua') {
      return projects;
    }

    return projects.filter((project) => project.techStack.includes(selectedTech));
  }, [selectedTech]);

  return (
    <div className="flex-1 bg-background">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:py-24">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">showcase</p>
          <h1 className="text-4xl font-display font-bold text-primary sm:text-5xl">Proyek Terpilih</h1>
          <p className="mx-auto max-w-2xl text-base text-foreground/70 sm:text-lg">
            Jelajahi proyek dengan pendekatan end-to-end, mulai dari identifikasi masalah hingga hasil yang dapat diukur.
            Gunakan filter untuk menemukan teknologi yang paling relevan dengan kebutuhan Anda.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setSelectedTech(tech)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedTech === tech
                  ? 'border-primary bg-primary text-background shadow-primary/30'
                  : 'border-foreground/20 bg-background text-foreground/80 hover:border-primary hover:text-primary'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-sm text-foreground/70">Belum ada proyek dengan teknologi tersebut.</p>
        )}
      </section>
    </div>
  );
}
