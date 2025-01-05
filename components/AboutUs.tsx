'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import illustratorImg from '@/public/assets/illustrator.png';
import pinMapImg from '@/public/assets/pin-map.png';
import { useIsClient } from '@/hooks/useIsClient';
import {
  AccessIcon,
  AccessSmallIcon,
  DesignIcon,
  DesignSmallIcon,
  TeamIcon,
  TeamSmallIcon,
} from '@/public/icons';

export default function AboutUs() {
  const isClient = useIsClient();

  const t = useTranslations('HomePage');
  const listFeatures = [
    {
      icon: <AccessIcon className={`hidden lg:block`} />,
      iconMobile: <AccessSmallIcon className={`block lg:hidden `} />,
      title: t('twentyFourHour'),
      desc: t('accessDescription'),
    },
    {
      icon: <DesignIcon className={`hidden lg:block`} />,
      iconMobile: <DesignSmallIcon className={`block lg:hidden `} />,
      title: t('design'),
      desc: t('designDescription'),
    },
    {
      icon: <TeamIcon className={`hidden lg:block`} />,
      iconMobile: <TeamSmallIcon className={`block lg:hidden`} />,
      title: t('team'),
      desc: t('teamDescription'),
    },
  ];
  const usersAndGames = [
    {
      title: t('users'),
      content:
        '<p class="text-blue text-[44px] leading-12 lg:text-[80px] lg:leading-[96px]">600<span class="text-20 lg:text-40 leading-6 lg:leading-12">M</span><span class="text-[36px] lg:text-[80px] leading-11">+</span></p>',
    },
    {
      title: t('games'),
      content:
        '<p class="text-blue text-[44px] leading-12 lg:text-[80px] lg:leading-[96px]">135<span class="text-[36px] lg:text-[80px] leading-11">+</span></p>',
    },
  ];

  if (!isClient) return null;
  return (
    <>
      <div
        className="lg:px-14 xl:px-[100px] flex flex-col lg:flex-row lg:gap-10 justify-center lg:mt-14"
        id="aboutUs"
      >
        <div className="px-4 flex flex-col lg:mt-0">
          <div className="md:flex md:flex-col md:items-center lg:block">
            <h1
              className="text-40 lg:text-60 leading-[50px] lg:leading-[60px] text-black-darkest font-[900] mb-4 lg:mb-10"
              style={{ fontFamily: 'Playfair Display' }}
            >
              {t('aboutUs')}
            </h1>
            <p className="max-w-[340px] lg:max-w-[560px] lg:mt-[10px]">
              {t('description')}
            </p>
          </div>
          <div className="flex lg:flex-col gap-4 lg:gap-10 mt-10 lg:mt-20 mb-10 lg:mb-0 md:justify-center">
            {usersAndGames.map((item, index) => (
              <div
                key={index}
                className="font-bold basis-[45%] flex flex-col justify-between md:text-center lg:text-left"
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                />
                <p className="text-24 leading-[30px] text-black-darkest mt-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-lighter py-10 px-4 lg:py-28 w-full lg:w-[560px] flex flex-col items-center justify-center">
          <div className="flex flex-col gap-10">
            {listFeatures.map((item, index) => (
              <div className="flex gap-5 lg:gap-6" key={index}>
                {item.icon}
                {item.iconMobile}
                <div className="flex flex-col gap-3 lg:gap-2">
                  <p className="text-black-darkest font-bold text-24">
                    {item.title}
                  </p>
                  <p className="max-w-[290px] lg:max-w-[340px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10 lg:mt-[68px]">
        <motion.div
          initial={{ opacity: 0.9, x: '-5vw', scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, x: '5vw', scale: 1, rotate: 5 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        >
          <Image
            src={illustratorImg}
            alt="Illustrator Image"
            width={533}
            height={437}
            className="max-w-[300px] lg:max-w-none"
          />
        </motion.div>
        <Image
          src={pinMapImg}
          alt="Pin Map Image"
          className="w-full h-auto relative bottom-7 lg:bottom-[124px]"
        />
      </div>
    </>
  );
}
