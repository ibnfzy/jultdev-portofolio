import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-background/70 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[16/10] w-full overflow-hidden bg-foreground/5">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 hover:scale-105" loading="lazy" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
          <p className="text-sm text-foreground/70">{project.summary}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2 pt-4 text-sm font-medium sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <Link to={`/projects/${project.slug}`} className="text-primary transition hover:text-primary/80">
              Lihat detail →
            </Link>
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="text-foreground/80 transition hover:text-primary">
              Demo
            </a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-foreground/80 transition hover:text-primary">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
