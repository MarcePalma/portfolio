import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  JavascriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJSIcon,
  NodeJSIcon,
  MySQLIcon,
  PrismaIcon,
  SpotifyIcon,
  ApiIcon,
} from "../utils/skills/constSkills";
import { regex } from "../utils/regex/regex";

function renderIcon(iconName) {
  switch (iconName) {
    case 'CSS':
      return <CSSIcon />;
    case 'HTML':
      return <HTMLIcon />;
    case 'Javascript':
      return <JavascriptIcon />;
    case 'React':
      return <ReactIcon />;
    case 'TypeScript':
      return <TypeScriptIcon />;
    case 'NextJS':
      return <NextJSIcon />;
    case 'Tailwind':
      return <TailwindIcon />;
    case 'NodeJS':
      return <NodeJSIcon />;
    case 'Bases De Datos':
      return <MySQLIcon />;
    case 'Prisma':
      return <PrismaIcon />;
    case 'Spotify':
      return <SpotifyIcon />;
    case 'API':
      return <ApiIcon />;
    default:
      return null;
  }
}

function replaceKeywordsWithIcons(description) {
  const iconMap = {
    'CSS': <CSSIcon />,
    'HTML': <HTMLIcon />,
    'JavaScript': <JavascriptIcon />,
    'React': <ReactIcon />,
    'TypeScript': <TypeScriptIcon />,
    'NextJS': <NextJSIcon />,
    'Tailwind': <TailwindIcon />,
    'NodeJS': <NodeJSIcon />,
    'MySQL': <MySQLIcon />,
    'Prisma': <PrismaIcon />,
    'Spotify': <SpotifyIcon />,
    'API': <ApiIcon />,
  };


  const parts = description.split(regex);

  return parts.map((part, index) => {
    if (iconMap[part]) {
      return <span key={index} className="mr-2">{iconMap[part]}</span>;
    } else {
      return <span key={index}>{part}</span>;
    }
  });

}

export default function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }) {
  const iconDescription = replaceKeywordsWithIcons(description);

  return (
    <section>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl && (
            <Link href={previewUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <article className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="flex gap-x-2 text-[#ADB7BE]">{iconDescription}</p>
      </article>
    </section>
  );
}