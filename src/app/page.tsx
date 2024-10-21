import Image from "next/image";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/icons/portfolio.svg"
          alt="Portfolio logo"
          width={180}
          height={38}
          priority
        />
        <ul className="list-inside list-disc text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Developer just started working on this website.
          </li>
          <li className="mb-2">
            A portfolio website that showcases my projects and skills.
          </li>
          <li>
            Built with Next.js, TypeScript, Shadcn, and Tailwind CSS.
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://robink.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiNetlify 
              aria-hidden
              width={20}
              height={20}
            />
            Live Demo
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="hhttps://www.linkedin.com/in/developer-robin-kurian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            aria-hidden
            width={16}
            height={16}
          />
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Robin-Kurian/robin-portfolio-frontend/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            aria-hidden
            width={16}
            height={16}
          />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://robink.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGlobe
            aria-hidden
            width={16}
            height={16}
          />
          Go to Portfolio →
        </a>
      </footer>
    </div>
  );
}
