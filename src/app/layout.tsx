import { Open_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '../components/navbar';
import Footer from '@/components/footer';
import { fetchNavbar } from '@/api';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'GAZA SOUP KITCHEN',
//   description: 'Our goal is clear: to ensure no one in Gaza goes to bed hungry. This is more than just an initiative, it\'s a personal vow.Don\'t wait, donate to Palestine Now.',
// };

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchNavbar();

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

  if (!data.navbar || !data.footer) return null;

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
