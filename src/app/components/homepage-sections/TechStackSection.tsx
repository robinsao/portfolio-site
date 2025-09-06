import Link from "next/link";
import { TooltipProvider } from "../shadcn-ui/tooltip";
import TechStackImage from "./TechStackImage";

export default function TechStackSection() {
  return (
    <TooltipProvider>
      <div
        id="tech-stack"
        className="snap-start min-h-screen flex flex-col justify-center items-center
        [&_h1]:text-shadow-lg [&_h2]:text-shadow-lg"
      >
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-16">
          Tech Stack
        </h1>
        <div
          className="grid grid-cols-[1fr] md:grid-cols-2 px-4 gap-x-20 gap-y-0 md:gap-y-8 md:grid-rows-3 auto-rows-[minmax(1px,auto)]
          [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mb-4 [&_h2]:md:mb-8
          [&_*]:text-center [&_*]:font-bold
          [&_ul]:flex [&_ul]:justify-center [&_ul]:items-center [&_ul]:gap-8 [&_ul]:mb-8 [&_ul]:md:mb-8
          [&_li]:hover:cursor-pointer 
          [&_img]:block [&_img]:rounded-xl [&_img]:w-16 [&_img]:h-auto [&_img]:hover:scale-125 [&_img]:hover:shadow-xl [&_img]:transition-transform"
        >
          <div>
            <h2>Languages</h2>
            <ul>
              <li key="javascript">
                <TechStackImage
                  src="/techstack-icons/javascript.png"
                  alt="JavaScript"
                  tooltipText="JavaScript"
                  width={100}
                  height={100}
                />
              </li>
              <li key="python">
                <TechStackImage
                  src="/techstack-icons/python.png"
                  alt="Python"
                  tooltipText="Python"
                  width={100}
                  height={100}
                />
              </li>
              <li key="csharp">
                <TechStackImage
                  src="/techstack-icons/csharp.svg"
                  alt="C Sharp"
                  tooltipText="C Sharp"
                  width={100}
                  height={100}
                />
              </li>
              <li key="java">
                <TechStackImage
                  src="/techstack-icons/java.png"
                  alt="Java"
                  tooltipText="Java"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h2>Cloud</h2>
            <ul className="[&_img]:w-20">
              <li key="aws">
                <Link
                  href="https://www.credly.com/badges/57ccdd90-38dd-4514-9126-58a6c991e1b0/public_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col relative items-center [&_*]:font-light text-foreground"
                >
                  <TechStackImage
                    src="/techstack-icons/aws.png"
                    alt="AWS"
                    tooltipText="AWS"
                    width={100}
                    height={100}
                  />
                  <span className="italic absolute bottom-[-20px] w-[200%] ">
                    View Certificate
                  </span>
                </Link>
              </li>
              <li key="azure">
                <TechStackImage
                  src="/techstack-icons/azure.png"
                  alt="Azure"
                  tooltipText="Azure"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          <div>
            <h2>Frontend</h2>
            <ul>
              <li key="react">
                <TechStackImage
                  src="/techstack-icons/react.png"
                  alt="React"
                  tooltipText="React"
                  width={100}
                  height={100}
                />
              </li>
              <li key="nextjs">
                <TechStackImage
                  src="/techstack-icons/nextjs.png"
                  alt="Next.js"
                  tooltipText="Next.js"
                  width={100}
                  height={100}
                />
              </li>
              <li key="tailwindcss">
                <TechStackImage
                  src="/techstack-icons/tailwindcss.png"
                  alt="Tailwind CSS"
                  tooltipText="Tailwind CSS"
                  width={100}
                  height={100}
                />
              </li>
              <li key="mui">
                <TechStackImage
                  src="/techstack-icons/mui.jpg"
                  alt="MUI"
                  tooltipText="MUI"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          <div>
            <h2>Backend</h2>
            <ul>
              <li key="Node.js">
                <TechStackImage
                  src="/techstack-icons/nodejs.png"
                  alt="Node.js"
                  tooltipText="Node.js"
                  width={100}
                  height={100}
                />
              </li>
              <li key="Express.js">
                <TechStackImage
                  src="/techstack-icons/expressjs.png"
                  alt="Express.js"
                  tooltipText="Express.js"
                  width={100}
                  height={100}
                />
              </li>
              <li key="ASP.NET">
                <TechStackImage
                  src="/techstack-icons/dotnet.png"
                  alt="ASP.NET"
                  tooltipText="ASP.NET"
                  width={100}
                  height={100}
                />
              </li>
              <li key="Auth0">
                <TechStackImage
                  src="/techstack-icons/auth0.png"
                  alt="Auth0"
                  tooltipText="Auth0"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h2>Others</h2>
            <ul>
              <li key="SQL">
                <TechStackImage
                  src="/techstack-icons/sql.png"
                  alt="SQL"
                  tooltipText="SQL"
                  width={100}
                  height={100}
                />
              </li>
              <li key="Git">
                <TechStackImage
                  src="/techstack-icons/git.png"
                  alt="Git"
                  tooltipText="Git"
                  width={100}
                  height={100}
                />
              </li>
              <li key="Docker">
                <TechStackImage
                  src="/techstack-icons/docker.png"
                  alt="Docker"
                  tooltipText="Docker"
                  width={100}
                  height={100}
                />
              </li>
              <li key="Cloudflare">
                <TechStackImage
                  src="/techstack-icons/cloudflare.svg"
                  alt="Cloudflare"
                  tooltipText="Cloudflare"
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
