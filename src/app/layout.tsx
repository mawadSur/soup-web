import { fetchNavbar } from '@/api';
import Footer from '@/components/footer';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from '../components/navbar';
import './globals.css';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await fetchNavbar();

  return {
    title: data.title,
    description: data.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await fetchNavbar();

  if (!data) return null;

  return (
    <html lang="en">
      <body className={`${openSans} antialiased`}>
        <Navbar navbar={data.navbar} />
        {children}
        <Footer footer={data.footer} />
      </body>
    </html>
  );
}
