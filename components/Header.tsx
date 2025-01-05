'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import { Input } from './ui/input';
import toast from 'react-hot-toast';
import { ArrowRightIcon } from 'lucide-react';
import Image from 'next/image';
import personMobileImg from '@/public/assets/person-mobile.png';
import personImg from '@/public/assets/person.png';
import CountDownTimer from './CountDownTimer';
import { useTranslations } from 'next-intl';
import { isDateInPast, validateEmail } from '@/utils';

export default function Header() {
  const t = useTranslations('HomePage');

  const countdownDate = new Date('2025-01-06T23:18:07');

  const [email, setEmail] = useState('');

  const submitMail = () => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && validateEmail(trimmedEmail)) {
      toast.success(t('successSendMail', { email: trimmedEmail }));
      setEmail('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitMail();
    }
  };
  return (
    // chuyen ngon ngu push khong dung
    <>
      <div className="bg-[url(/assets/bg-header-mobile.png)] lg:bg-[url(/assets/bg-header.png)] w-screen pb-20 lg:pb-[180px] lg:bg-center bg-no-repeat bg-cover relative">
        <Navbar />
        <p className="text-40 lg:text-80 leading-[50px] font-[900] font-playfair text-center pt-14 lg:pt-32 text-white-lightest">
          {t('gettingReady')}
        </p>
        <div className="w-[90vw] lg:w-[80vw] xl:w-[50vw] mx-auto mt-9 mb-10 lg:mb-24 h-[120px] bg-white-lightest rounded-[20px]">
          {!isDateInPast(countdownDate) && (
            <CountDownTimer deadline={countdownDate} />
          )}
        </div>
        <p className="text-12 md:max-w-[500px] lg:max-w-[650px] mx-auto lg:text-18 px-6 leading-4 lg:leading-6 text-center tracking-[0.9px] text-white-lightest mb-4 lg:mb-8">
          {t('announcement')}
        </p>
        <div className="relative px-4 md:max-w-[500px] lg:max-w-[450px] xl:max-w-[560px] mb-20 mx-auto">
          <Input
            type="email"
            placeholder={t('enterEmail')}
            value={email}
            onKeyDown={handleKeyDown}
            onChange={e => setEmail(e.target.value)}
            className="h-14
                    bg-white
                    ring-transparent
                    focus:ring-0
                    border
                    border-white-lightest
                    pl-4
                    hover:border-white-lightest
                    placeholder:text-white-light
                    text-white-light"
          />
          <button
            onClick={submitMail}
            className="absolute inset-y-0 right-7 flex items-center"
          >
            <ArrowRightIcon color="black" />
          </button>
        </div>
        <div className="absolute -bottom-[220px] lg:hidden md:min-w-[500px] md:left-1/2 md:-translate-x-1/2">
          <Image
            src={personMobileImg}
            alt="Person Mobile"
            className="w-full h-full max-w-[520px] md:max-w-full"
            priority
          />
        </div>
        <div className="absolute bottom-14 w-auto lg:h-[500px] xl:h-[625px] overflow-hidden left-0 ml-0 hidden lg:block">
          <Image
            src={personImg}
            alt="Person"
            className="w-full h-full"
            priority
          />
        </div>
      </div>
      <div className="h-[266px] lg:hidden"></div>
    </>
  );
}
