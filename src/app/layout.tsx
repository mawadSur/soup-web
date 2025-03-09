import { getGlobalData } from '@/actions/strapi';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { yesevaOne } from '@/app/fonts';
import Navbar from '../components/navbar';
import './globals.css';
import Hero from '@/components/hero';

export async function generateMetadata(): Promise<Metadata> {
  // const { data } = await getGlobalData();

  return {
    title: 'Gaza Soup Kitchen',
    description:
      "Our goal is clear: to ensure no one in Gaza goes to bed hungry. This is more than just an initiative, it's a personal vow. Don't wait, donate to Palestine Now.",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { data } = await getGlobalData();

  // if (!data) return null;

  return (
    <html lang="en">
      <body className={`${yesevaOne.className} antialiased`}>
        <ViewTransitions>
          <Navbar />
          <Hero />
          {children}
          <Footer />
        </ViewTransitions>
      </body>
    </html>
  );
}
