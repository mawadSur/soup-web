import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar';
import Footer from '@/components/footer';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'GAZA SOUP KITCHEN',
  description: 'Our goal is clear: to ensure no one in Gaza goes to bed hungry. This is more than just an initiative, it\'s a personal vow.Don\'t wait, donate to Palestine Now.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
