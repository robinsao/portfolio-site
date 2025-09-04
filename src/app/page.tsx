import Image from "next/image";
import TechStackSection from "./components/homepage-sections/TechStackSection";
import RecentBlogsSection from "./components/homepage-sections/RecentBlogsSection";
import ProjectsSection from "./components/homepage-sections/ProjectsSection";
import ContactSection from "./components/homepage-sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <main>
        <div className="snap-start min-h-screen flex items-center justify-center px-6 pt-12 gap-4 md:gap-16 flex-col-reverse md:flex-row">
          {/* Headline & description */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl text-center md:text-left font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
              Turning Vision Into
              <br />
              Reality With Code
              <br />
              And Design.
            </h1>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center md:text-justify">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
          </div>
          {/* Profile */}
          <div className="w-[240px] md:w-[300px] mb-8 md:mb-0 flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              width={420}
              height={420}
              className="w-full h-auto rounded-4xl shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Blogs */}
        <RecentBlogsSection />

        <ProjectsSection />

        <ContactSection />
      </main>
    </div>
  );
}
