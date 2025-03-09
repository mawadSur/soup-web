import { SocialIcons, type Footer } from '@/types';
import Image from 'next/image';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaBluesky, FaSquareFacebook } from 'react-icons/fa6';
import { Button } from './button';

const NAV_ITEMS = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Gallery', link: '/gallery' },
  { label: 'Media', link: '/media' },
  { label: 'Donation', link: '/donation' },
];

function renderIcon(text: string) {
  switch (text) {
    case SocialIcons.FACEBOOK:
      return <FaSquareFacebook size={24} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    case SocialIcons.INSTAGRAM:
      return <FaInstagramSquare size={24} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    case SocialIcons.LINKEDIN:
      return <FaLinkedin size={24} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    case SocialIcons.BLUESKY:
      return <FaBluesky size={24} className="hover:text-[#3CC78F] transition-colors duration-300" />;
    default:
      return null;
  }
}

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[rgba(60,199,143,0.15)] relative">
      <div className="container mx-auto px-4 pb-6">
        {/* Top Section with Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 border-b border-[#3CC78F]/20 pb-10">
          {/* Logo and Description */}
          <div className="col-span-2 flex flex-col">
            <Button href="/" className="inline-block mb-4">
              <Image src="/gazasoup-logo.webp" alt="Gaza Soup Kitchen" width={120} height={120} className="h-auto" />
            </Button>
            <p className="text-gray-600 mt-2 text-sm max-w-md">
              Providing hot meals and essential support to those in need throughout Gaza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {NAV_ITEMS.map((item) => (
                <Button
                  as="a"
                  key={item.label}
                  href={item.link}
                  className="text-gray-600 hover:text-[#3CC78F] transition-colors duration-300 text-sm"
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section with Social Icons and Copyright */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mt-6 md:mt-0">
            © {new Date().getFullYear()} Gaza Soup Kitchen. All rights reserved.
          </p>

          <div className="flex items-center space-x-5">
            {[
              { label: SocialIcons.FACEBOOK, href: 'https://www.facebook.com/alkabeer.alhani' },
              { label: SocialIcons.INSTAGRAM, href: 'https://www.instagram.com/gazasoupkitchen' },
              { label: SocialIcons.LINKEDIN, href: 'https://www.linkedin.com/company/gaza-soup-kitchen/' },
              { label: SocialIcons.BLUESKY, href: 'https://bsky.app/profile/gazasoupkitchen.bsky.social' },
            ].map((item) => (
              <Button
                as="a"
                key={item.label}
                href={item.href}
                className="text-gray-600 transition duration-300"
                aria-label={item.label}
              >
                {renderIcon(item.label)}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
