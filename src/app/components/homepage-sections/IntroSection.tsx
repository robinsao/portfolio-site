import Image from "next/image";

export default function IntroSection() {
  return (
    <div
      id="intro"
      className="snap-start min-h-screen flex items-center justify-center px-6 pt-12 gap-4 md:gap-16 flex-col-reverse md:flex-row"
    >
      {/* Headline & description */}
      <div className="max-w-xl">
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-center md:text-left font-extrabold mb-6 leading-tight text-gray-900 dark:text-white">
          <span className="hidden sm:inline-block md:hidden lg:inline-block transform scale-x-150">
            - &nbsp;
          </span>
          Hello, I&apos;m Robin
          <span className="hidden sm:inline-block md:hidden lg:inline-block transform scale-x-150">
            &nbsp; -
          </span>
        </h1>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 text-center md:text-justify">
          As a developer with strong foundational skills in web development and
          cloud computing, I love to work on impactful projects that solves
          real-world problems. Explore my projects and blogs below, to gain
          insights into my skills and the tech stack I work with.
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
  );
}
