import { EICONS, type Footer } from '@/types';
import Link from 'next/link';
import React from 'react';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaBluesky, FaSquareFacebook } from 'react-icons/fa6';

function renderIcon(text: string) {
  switch (text) {
    case EICONS.FACEBOOK:
      return <FaSquareFacebook />;
    case EICONS.INSTAGRAM:
      return <FaInstagramSquare />;
    case EICONS.LINKEDIN:
      return <FaLinkedin />;
    case EICONS.BLUESKY:
      return <FaBluesky />;
    default:
      return null;
  }
}

const Footer: React.FC<{ footer: Footer }> = ({ footer }) => {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {footer.link.map((item) => (
            <div key={item.label} className="px-5 py-2">
              <Link href={item.href} className="text-sm text-gray-600 hover:text-gray-800">
                {item.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-5 flex justify-center space-x-6">
          {footer.social.map((item) => (
            <Link target="_blank" key={item.label} href={item.href} className="text-gray-600 hover:text-gray-800">
              <span className="sr-only">{item.label}</span>
              {renderIcon(item.label)}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">{footer.text}</p>
      </div>
    </footer>
  );
};

export default Footer;
