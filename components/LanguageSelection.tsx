import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { languageData } from '@/data';

type Props = {
  isMobile?: boolean;
};
export default function LanguageSelection({ isMobile }: Props) {
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    const path = pathname.split('/').slice(2).join('/');
    const newUrl = `${window.location.origin}/${value}/${path}`;
    window.history.pushState({}, '', newUrl);
    window.location.reload();
  };

  return (
    <div className="relative">
      <Select
        value={pathname.split('/')[1]}
        onValueChange={handleLanguageChange}
      >
        <SelectTrigger
          className={`w-20 md:w-10 ${
            !isMobile
              ? 'custom-select'
              : 'custom-select-mobile border-gray-modal'
          }`}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          className={`${
            !isMobile && 'absolute right-0 translate-x-10 custom-padding'
          }`}
        >
          <SelectGroup>
            {languageData.map((item, index) => (
              <SelectItem
                value={item.value}
                key={index}
                className="cursor-pointer"
              >
                <div className={`flex items-center gap-2`}>
                  <Image
                    src={item.nation}
                    alt={item.language}
                    width={20}
                    height={20}
                  />
                  <span className="font-bold text-10 leading-[17.5px]">
                    {item.language}
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
