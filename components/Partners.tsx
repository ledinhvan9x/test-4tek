'use client';

import { partnersData } from '@/data';
import { ArrowLeft } from '@/public/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Partners() {
  const t = useTranslations('HomePage');
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

      <div className="flex gap-10 overflow-x-auto h-auto w-screen lg:w-[70vw] scrollbar-none">
        <div className="flex gap-5 relative">
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
          <ArrowLeft
            width={40}
            height={40}
            className="absolute top-1/2 -left-0 cursor-pointer -translate-y-1/2 hover:scale-100"
          />
        </div>
      </div>
    </div>
  );
}
