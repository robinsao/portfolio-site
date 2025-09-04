import { cn } from "@/lib/utils";
import Image from "next/image";

const projects: Array<{
  name: string;
  summary: string;
  image: string;
  github: string;
  subtitle?: string;
}> = [
  {
    name: "Blog Platform",
    summary:
      "A blog site built with Next.js and Strapi CMS. Code is written once, and \
      blogs can be arbitrarily created/updated with no code. With an API token, \
      other sites -- like the one you're on -- can fetch the blogs as well!",
    image: "/projects/blog.png",
    subtitle: "https://blog.robinsao.uk",
    github: "https://blog.robinsao.uk",
  },
  {
    name: "Cloud Storage App",
    summary:
      "A cloud storage app built with Next.js and AWS S3. Authentication is handled via Auth0. Easy setup with git clone & docker!",
    image: "/projects/solidstore.png",
    github: "https://github.com/robinsao/solidstore",
  },
];

export default function ProjectsSection({ className }: { className?: string }) {
  return (
    <div
      id="projects"
      className={cn(
        "snap-start min-h-screen flex flex-col justify-center items-center",
        className,
      )}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center text-shadow-lg mt-24 mb-12 w-full">
        Selected Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-5/6 max-w-7xl">
        {projects.map((project) => (
          <a
            key={project.github}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-[66vh] min-h-96 max-h-[50rem] rounded-2xl 
                grid grid-cols-1 grid-rows-[1fr_minmax(120px,auto)]
                shadow-lg border
                hover:shadow-2xl transition-shadow overflow-hidden hover:-translate-y-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <div className="relative h-full flex items-center justify-center overflow-hidden">
              <Image
                src={project.image}
                alt={project.name + " preview"}
                fill
                className="group-hover:scale-110 transition-transform duration-300 object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
              {project.subtitle && (
                <h3 className="text-lg opacity-50 mb-2">{project.subtitle}</h3>
              )}
              <p className="text-justify">{project.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
