'use client';
import React from 'react';
import Link from 'next/link';
import NavLink from './NavLink.jsx';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image.js';
import LanguageSwitcher from './LanguageSwitcher'; // Importa el nuevo componente
import { useTranslation } from 'react-i18next';



export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { t } = useTranslation("global");

  const navLinks = [
    {
      title: `${t("navbar.about")}`,
      path: '#about',
    },
    {
      title: `${t("navbar.project")}`,
      path: '#projects',
    },
    {
      title: `${t("navbar.contact")}`,
      path: '#contact',
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
          <Image width={70} height={70} src="/images/LOGO.webp" alt="Logo" />
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <LanguageSwitcher />
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}

    </nav>
  );
}