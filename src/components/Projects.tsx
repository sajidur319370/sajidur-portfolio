import { FiGithub, FiTool } from "react-icons/fi";
import { projects, socials, upcomingProjects } from "@/data/portfolio";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

// Projects section.
// No projects yet → "Currently building" + the projects I'm working on.
// Projects added → a grid of ProjectCards.
export default function Projects() {
  // My GitHub link from the socials list (undefined if not found)
  const github = socials.find((social) => social.name === "GitHub");

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <SectionHeading
          number="03"
          title="Projects"
          subtitle={
            projects.length > 0 ? "Things I've built" : "What I'm building now"
          }
        />
      </FadeIn>

      {projects.length === 0 ? (
        <>
          {/* Empty state: honest "currently building" message */}
          <FadeIn delay={0.1}>
            <div className="mx-auto max-w-2xl rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
              <FiTool
                className="mx-auto h-10 w-10 text-cyan-700 dark:text-cyan-400"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-xl font-bold">
                Currently building 3 full-stack MERN projects
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                They will appear here when they&apos;re live. Follow my progress
                on GitHub.
              </p>
              {github && (
                <a
                  href={github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-cyan-700 px-5 py-2.5 font-medium text-white transition hover:scale-105 hover:bg-cyan-800 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
                >
                  <FiGithub aria-hidden="true" />
                  See my GitHub
                </a>
              )}
            </div>
          </FadeIn>

          {/* What I'm building: simple cards with a status badge */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingProjects.map((project, index) => (
              <FadeIn key={project.title} delay={0.1 * (index + 1)}>
                <article className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      project.status === "In progress"
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                        : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                    }`}
                  >
                    {project.status}
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((name) => (
                      <li
                        key={name}
                        className="rounded-full bg-cyan-700/10 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </>
      ) : (
        // Real projects: 1 column on phones, 2 on tablets, 3 on desktops
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.1 * index}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}
