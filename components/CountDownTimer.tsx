'use client';

import { INITIAL_TIME_LEFT } from '@/data';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

interface Props {
  deadline: Date;
}

interface CountdownTimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export default function CountDownTimer({ deadline }: Props) {
  const t = useTranslations('HomePage');

  const [timeLeft, setTimeLeft] =
    useState<CountdownTimeLeft>(INITIAL_TIME_LEFT);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function calculateTimeLeft(): CountdownTimeLeft {
    let timeLeft: CountdownTimeLeft = {};
    const currentDate = new Date();
    const difference = deadline.getTime() - currentDate.getTime();

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }

  return (
    <div className="w-full h-full flex items-center px-0">
      <div className="w-full h-full px-6 md:px-8 lg:px-10 py-[26px] items-center flex justify-between gap-0 lg:gap-14">
        {Object.entries(timeLeft).map(([unit, value], index, array) => (
          <React.Fragment key={unit}>
            <div className="flex flex-col text-black-darkest items-center gap-1">
              <div
                className="flex items-center font-[900] tracking-[4.8px] text-[36px] lg:text-60 leading-[45px] lg:leading-[64px]"
                style={{ fontFamily: 'Playfair Display' }}
              >
                <p>{Math.floor(value / 10)}</p>
                <p>{value % 10}</p>
              </div>
              <p className="font-bold text-16 tracking-[-0.65px]">
                {t(unit.toString())}
              </p>
            </div>
            {index !== array.length - 1 && (
              <div className="font-[900] text-20 lg:text-40 tracking-[-0.65px] text-black-darkest flex flex-col gap-[1.5px] lg:gap-0.5">
                <span>.</span>
                <span>.</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
