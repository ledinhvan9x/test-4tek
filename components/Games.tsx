import { listGames } from '@/data';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Games() {
  const t = useTranslations('HomePage');
  return (
    <div
      className="flex flex-col justify-center mb-[84px] md:mb-[120px] lg:mb-[246px] mt-5 lg:mt-0 px-4 lg:px-6 xl:px-8 2xl:px-10"
      id="games"
    >
      <h1
        className="text-60 text-black-darkest font-[900] font-playfair leading-[60px] text-center"
        style={{ fontFamily: 'Playfair Display' }}
      >
        {t('games')}
      </h1>
      <p className="max-w-[350px] text-center lg:max-w-[840px] mx-auto mt-6 mb-10 lg:mb-20 md:max-w-[650px]">
        {t('gamesDescription')}
      </p>
      {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 2xl:gap-8">
        {listGames.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer relative transition duration-300 ease-in-out transform hover:scale-[1.03] group"
          >
            <div className="rounded-xl overflow-hidden bg-red-300 flex">
              <Link
                href={item.link}
                target="_blank"
                className="block w-full h-full grow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="lg:w-[410px] lg:h-[560px] min-w-[164px] min-h-[268px] object-cover"
                  width={410}
                  height={560}
                />
              </Link>
            </div>
            <div
              className="flex flex-col text-white-lightest
              absolute bottom-3 lg:bottom-10  xl:left-5 left-2 2xl:left-9"
              >
              <p className="font-bold text-24 lg:text-35 xl:text-48 max-w-[310px] leading-[30px] lg:leading-[60px] mb-1 lg:mb-4 gradient-text">
                {item.title}
              </p>
              <p className="max-w-[120px] lg:max-w-[310px] text-12 lg:text-14 leading-[15px] lg:leading-[19.5px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6 2xl:gap-8">
        {listGames.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer relative transition duration-300 ease-in-out transform hover:scale-[1.03] group ${
              index % 2 === 0 ? '' : 'absolute top-9 md:top-14 lg:top-[118px]'
            }`}
          >
            <div className="rounded-xl overflow-hidden bg-red-300 flex">
              <Link
                href={item.link}
                target="_blank"
                className="block w-full h-full grow"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="lg:w-[410px] lg:h-[560px] min-w-[164px] min-h-[268px] object-cover"
                  width={410}
                  height={560}
                />
              </Link>
            </div>
            <div
              className="flex flex-col text-white-lightest
           absolute bottom-3 lg:bottom-10 xl:left-5 left-2 2xl:left-9"
            >
              <p className="font-bold text-24 lg:text-35 xl:text-48 max-w-[310px] leading-[30px] lg:leading-[60px] mb-1 lg:mb-4 gradient-text">
                {item.title}
              </p>
              <p className="max-w-[120px] lg:max-w-[310px] text-12 lg:text-14 leading-[15px] lg:leading-[19.5px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
{
}
