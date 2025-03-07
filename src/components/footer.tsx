import { SocialIcons, type Footer } from '@/types';
import React from 'react';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaBluesky, FaSquareFacebook } from 'react-icons/fa6';

const NAV_ITEMS = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Gallery', link: '/gallery' },
  { label: 'Media', link: '/media' },
  { label: 'Contact', link: '/contact' },
];

function renderIcon(text: string) {
  switch (text) {
    case SocialIcons.FACEBOOK:
      return <FaSquareFacebook />;
    case SocialIcons.INSTAGRAM:
      return <FaInstagramSquare />;
    case SocialIcons.LINKEDIN:
      return <FaLinkedin />;
    case SocialIcons.BLUESKY:
      return <FaBluesky />;
    default:
      return null;
  }
}

const Footer = () =>
  // {footer }:{ footer: Footer }
  {
    return (
      <footer className="bg-[rgba(60,199,143,0.06)] relative">
        <div className="mx-auto w-full max-w-6xl px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image src="/gazasoup-logo.webp" alt="Logo" width={100} height={100} />
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="px-5 py-2">
                  <Link href={item.link} className="text-sm text-gray-600 hover:text-gray-800">
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <div className="mt-5 flex justify-center space-x-6">
            {[
              { label: SocialIcons.FACEBOOK, href: 'https://www.facebook.com/alkabeer.alhani' },
              { label: SocialIcons.INSTAGRAM, href: 'https://www.instagram.com/gazasoupkitchen' },
              { label: SocialIcons.LINKEDIN, href: 'https://www.linkedin.com/company/gaza-soup-kitchen/' },
              { label: SocialIcons.BLUESKY, href: 'https://bsky.app/profile/gazasoupkitchen.bsky.social' },
            ].map((item) => (
              <Link target="_blank" key={item.label} href={item.href} className="text-gray-600 hover:text-gray-800">
                <span className="sr-only">{item.label}</span>
                {renderIcon(item.label)}
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-600 font-sans">
            © 2024 Gaza Soup Kitchen. All rights reserved.
          </p>
        </div>
      </footer>
    );
  };

export default Footer;
