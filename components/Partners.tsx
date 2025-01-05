'use client';

import { partnersData } from '@/data';
import { ArrowLeft } from '@/public/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';

export default function Partners() {
  const t = useTranslations('HomePage');
  const containerRef = useRef<HTMLDivElement>(null);

  const slideList = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;
    const scrollAmount = 200;
    const container = containerRef.current;

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div
      id="ourPartners"
      className="bg-gray flex flex-col items-center justify-center gap-10 lg:gap-4 h-[245px] pt-0 lg:h-[475px]"
    >
      <h1
        className="text-40 lg:text-60 text-black-darkest font-[900] font-playfair leading-[50px] lg:leading-[80px] text-center"
        style={{ fontFamily: 'Playfair Display' }}
      >
        {t('ourPartners')}
      </h1>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-10 overflow-x-auto h-auto w-screen lg:w-[70vw] scrollbar-none"
        >
          <div className="flex gap-5">
            {partnersData.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                key={index}
                className="lg:w-[260px] lg:h-[100px] w-[188px] h-[72px]"
              >
                <Image
                  src={item.logo}
                  alt={item.title}
                  className="cursor-pointer transition-all duration-200 hover:bg-gradient-to-r from-[#ffa07a] to-[#ffb07a] rounded-lg"
                  width={260}
                  height={100}
                />
              </Link>
            ))}
          </div>
        </div>
        <ArrowLeft
          onClick={() => slideList('left')}
          width={40}
          height={40}
          className="absolute left-4 top-1/2 lg:-left-10 cursor-pointer -translate-y-1/2 hover:scale-110 transition-all duration-200"
        />
        <ArrowLeft
          onClick={() => slideList('right')}
          width={40}
          height={40}
          className="absolute rotate-180 right-4 top-1/2 lg:-right-10 cursor-pointer -translate-y-1/2 hover:scale-110 transition-all duration-200"
        />
      </div>
    </div>
  );
}
