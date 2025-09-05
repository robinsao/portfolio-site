import TechStackSection from "./components/homepage-sections/TechStackSection";
import RecentBlogsSection from "./components/homepage-sections/RecentBlogsSection";
import ProjectsSection from "./components/homepage-sections/ProjectsSection";
import ContactSection from "./components/homepage-sections/ContactSection";
import IntroSection from "./components/homepage-sections/IntroSection";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <main>
        <IntroSection />

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
