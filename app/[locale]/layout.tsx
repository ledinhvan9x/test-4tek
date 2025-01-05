import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import { getMessages } from 'next-intl/server';
const montserrat = Montserrat({
  subsets: ['latin'],
});
import { Locale, routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import ScrollPart from '@/components/ScrollPart';
import PageAnimatePresence from '@/components/HOC/PageAnimatePresence';

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: 'ETech',
    template: '%s - ETech',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    creator: '@creator',
    images:
      'https://i1-thethao.vnecdn.net/2025/01/05/tua-n-ha-i-7-jpeg-1736091062-1-5809-8901-1736091430.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=Wbv4obFlg8ysQKJgHbOKZw',
  },
  openGraph: {
    type: 'website',
    url: 'https://',
    title: 'ETech',
    description:
      "Your one-stop platform for free online kids' games, reviews, cheats, walkthroughs, and exclusive downloads, covering all popular gaming platforms.",
    siteName: 'ETech',
    images: [
      {
        url: 'https://i1-thethao.vnecdn.net/2025/01/05/tua-n-ha-i-7-jpeg-1736091062-1-5809-8901-1736091430.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=Wbv4obFlg8ysQKJgHbOKZw',
      },
    ],
  },
};
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className={montserrat.className}>
          <PageAnimatePresence>
            <div>{children}</div>
          </PageAnimatePresence>
          <ScrollPart />
          <Toaster
            toastOptions={{}}
            containerStyle={{
              top: 15,
            }}
            position="top-right"
          />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
