import React from 'react'
import {
  HTMLIcon,
  CSSIcon,
  TailwindIcon,
  JavascriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJSIcon,
  NodeJSIcon,
  DatabasesIcon,
  PrismaIcon
} from '../utils/skills/constSkills';

export default function SkillItem(props) {
  const { icon, title } = props;
  const colorClass = getColorClass(title);
  const borderClass = getBorderClass(title);

  return (
    <section className={`flex items-center mb-2 ${colorClass}`}>
      {icon}
      <span className={`ml-2 ${colorClass} ${borderClass}`}>{title}</span>
    </section>
  );
}


function getColorClass(title) {
  switch (title) {
    case 'HTML':
      return 'text-red-500';
    case 'CSS':
      return 'text-blue-500';
    case 'Tailwind':
      return 'text-blue-500';
    case 'JavaScript':
      return 'text-yellow-500';
    case 'TypeScript':
      return 'text-blue-500'; 
    case 'React':
      return 'text-blue-400';
    case 'NextJS':
      return 'text-white';
    case 'NodeJs':
      return 'text-green-500';
    case 'Bases De Datos':
      return 'text-blue-500';
    case 'Prisma':
      return 'text-blue-500';
    case 'Iniciacion al Desarrollo WEB con JavaScript':
      return 'text-white';
    case 'Desarrollo WEB con NextJS':
      return 'text-white';
    default:
      return 'text-gray-500';
  }
}


function getBorderClass(title) {
  switch (title) {
    case 'HTML':
      return 'border-red-500';
    case 'CSS':
      return 'border-blue-500';
    case 'Tailwind':
      return 'border-blue-500';
    case 'JavaScript':
      return 'border-yellow-500';
    case 'TypeScript':
      return 'border-blue-500';
    case 'React':
      return 'border-blue-400';
    case 'NextJS':
      return 'border-black';
    case 'NodeJs':
      return 'border-green-500';
    case 'Bases De Datos':
      return 'border-blue-500';
    case 'Prisma':
      return 'border-blue-500';
    case 'Iniciacion al Desarrollo WEB con JavaScript':
      return 'border-white';
    case 'Desarrollo WEB con NextJS':
      return 'border-white';
    default:
      return 'border-gray-500';
  }
}