// import { getGlobalData } from '@/actions/strapi';
import { yesevaOne } from '@/app/fonts';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import type { Metadata } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import Navbar from '../components/navbar';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  // const { data } = await getGlobalData();

  return {
    title: {
      template: '%s - Gaza Soup Kitchen',
      default: 'Home - Gaza Soup Kitchen',
    },
    description:
      "Our goal is clear: to ensure no one in Gaza goes to bed hungry. This is more than just an initiative, it's a personal vow. Don't wait, donate to Palestine Now.",
    applicationName: 'Gaza Soup Kitchen',
    authors: [{ name: 'Gaza Soup Kitchen' }],
    keywords: [
      'Gaza Food Aid',
      'Humanitarian Relief',
      'Food Distribution',
      'Emergency Support',
      'Palestine Aid',
      'Food Security',
      'Humanitarian Crisis',
      'Food Assistance',
      'Aid Organization',
      'Emergency Relief',
    ],
    generator: 'Gaza Soup Kitchen',
    creator: 'Gaza Soup Kitchen',
    publisher: 'Gaza Soup Kitchen',
    twitter: {
      card: 'summary_large_image',
    },
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
