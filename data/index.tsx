import eSpaceImg from '@/public/assets/e-space.png';
import kinglandImg from '@/public/assets/king-land.png';
import theLastGameImg from '@/public/assets/the-last-game.png';
import gDragonImg from '@/public/assets/g-dragon.png';
import piratesImg from '@/public/assets/pirates.png';
import witchPartyImg from '@/public/assets/witch-party.png';
import rockyImg from '@/public/assets/rocky.png';
import blueFireImg from '@/public/assets/blue-fire.png';
import magicTreeImg from '@/public/assets/magic-tree.png';
import cinderellaImg from '@/public/assets/cinderella.png';
import egyptGameImg from '@/public/assets/egypt-game.png';
import aboriginesImg from '@/public/assets/aborigines.png';
import eaGamesImg from '@/public/assets/ea-games.png';
import gameImg from '@/public/assets/game.png';
import firstPowerUpImg from '@/public/assets/first-power-up.png';
import disneyImg from '@/public/assets/disney.png';
import gameShowImg from '@/public/assets/game-show.png';
import segaImg from '@/public/assets/sega.png';
import kImg from '@/public/assets/2k.png';
import viLogo from '@/public/assets/vietnam.png';
import enLogo from '@/public/assets/united-states.png';
import {
  FacebookIcon,
  LinkedinIcon,
  LocationIcon,
  MobileIcon,
  TwitterIcon,
} from '@/public/icons';

export const partnersData = [
  { logo: eaGamesImg, title: 'EA', link: '/' },
  { logo: gameImg, title: 'Game', link: '/' },
  { logo: firstPowerUpImg, title: 'First Power Up', link: '/' },
  { logo: disneyImg, title: 'Disney', link: '/' },
  { logo: gameShowImg, title: 'Game Show', link: '/' },
  { logo: segaImg, title: 'Sega', link: '/' },
  { logo: kImg, title: 'K', link: '/' },
];

export const listGames = [
  {
    image: eSpaceImg,
    title: 'E-Space',
    link: '/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: kinglandImg,
    link: '/',
    title: 'Kingland',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: theLastGameImg,
    link: '/',
    title: 'The Last Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: gDragonImg,
    link: '/',
    title: 'G-Dragon',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: piratesImg,
    link: '/',
    title: 'Pirates',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: witchPartyImg,
    link: '/',
    title: 'Witch Party',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: rockyImg,
    link: '/',
    title: 'Rocky',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: blueFireImg,
    link: '/',
    title: 'Blue Fire',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: magicTreeImg,
    link: '/',
    title: 'Magic tree',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: aboriginesImg,
    link: '/',
    title: 'Aborigines',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: cinderellaImg,
    link: '/',
    title: 'Cinderella',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    image: egyptGameImg,
    link: '/',
    title: 'Egypt Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export const INITIAL_TIME_LEFT = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export const listSocials = [
  { link: 'https://twitter.com', icon: <TwitterIcon /> },
  { link: 'https://facebook.com', icon: <FacebookIcon /> },
  { link: 'https://linkedin.com', icon: <LinkedinIcon /> },
];

export const addresses = [
  {
    icon: <LocationIcon />,
    content:
      'Valletta Buildings, South Street, Valletta - VLT 1103 Malta, Mỹ/Số 20 đường Phan Đăng Lưu, quận Hải Châu, thành phố Đà Nẵng, Việt Nam',
  },
  {
    icon: <MobileIcon />,
    content: '(+1) 555-0108-000 hoặc (+236) 555-0108',
    isSingleLine: true,
  },
];

export const languageData = [
  { nation: viLogo, language: 'Vietnamese', value: 'vi' },
  { nation: enLogo, language: 'English', value: 'en' },
];
