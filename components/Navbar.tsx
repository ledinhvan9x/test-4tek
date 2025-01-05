'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '@/public/logos/logo.png';
import { CloseIcon, MenuIcon } from '@/public/icons';
import LanguageSelection from './LanguageSelection';
import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('HomePage');

  const navbarItems = [
    {
      id: 'aboutUs',
      title: t('aboutUs'),
      adjustment: 50,
    },
    {
      id: 'games',
      title: t('games'),
      adjustment: 50,
    },
    {
      id: 'ourPartners',
      title: t('ourPartners'),
    },
    {
      id: 'contactUs',
      title: t('contactUs'),
    },
  ];

  const changeSection = (id: string, adjustment: number) => {
    const element = document.getElementById(id);
    if (!element) return;
    const offset = 0 + adjustment;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const onClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center h-full w-full px-4 lg:px-20 pt-4 lg:pt-5">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="cursor-pointer w-full h-full"
            priority
          />
        </Link>
        <div className="flex items-center gap-10 lg:gap-20">
          <div>
            <ul className="hidden sm:flex">
              {navbarItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => changeSection(item.id, item.adjustment || 0)}
                  className="ml-10 lg:ml-20 cursor-pointer uppercase hover:scale-110 transition-all hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-[#ff8a00] hover:to-[#da1b60] text-white-lightest font-bold leading-[17.5px]"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:block">
            <LanguageSelection />
          </div>
        </div>
        <div onClick={onClick} className="md:hidden cursor-pointer ml-24">
          <MenuIcon color="white" />
        </div>
      </div>
      <div
        className={`fixed top-0 p-4 pt-6 ease-in duration-300 z-50 h-screen ${
          menuOpen ? 'left-0 w-screen bg-white-lightest' : 'left-[-100%]'
        } sm:hidden`}
      >
        <div className="flex w-full items-center justify-between">
          <LanguageSelection isMobile={true} />
          <div onClick={onClick} className="cursor-pointer">
            <CloseIcon color="black" />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            {navbarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setMenuOpen(false);
                  changeSection(item.id, item.adjustment || 0);
                }}
                className="py-6 cursor-pointer font-bold leading-[17.5px] uppercase text-black-darkest text-center border-t border-gray-lighter"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
