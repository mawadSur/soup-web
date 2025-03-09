'use client';
import { DONATION_URL } from '@/constant';
import { useOutsideClick } from '@/hooks/use-outside';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Button } from './button';

const NAV_ITEMS = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Gallery', link: '/gallery' },
  { label: 'Media', link: '/media' },
  { label: 'Donation', link: '/donation' },
];

const menuVariants = {
  closed: { opacity: 0, height: 0, transformOrigin: 'top center' },
  open: {
    opacity: 1,
    height: 'auto',
    transition: {
      opacity: { duration: 0.3 },
      height: { duration: 0.4, ease: 'easeOut' },
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      opacity: { duration: 0.2 },
      height: { duration: 0.3, ease: 'easeIn' },
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export default function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  useOutsideClick(navRef, (event) => {
    if (mobileMenuOpen && menuButtonRef.current && !menuButtonRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  });

  const handleNavigation = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-20">
      <div
        id="sticky-header"
        className={cn('absolute bg-[rgb(60,199,143)] transition-all duration-500 ease-in-out py-4 px-9', {
          'left-0 right-0 top-0': isScrolled,
          'rounded-lg left-1 right-1 top-1 sm:left-2 sm:right-2 sm:top-2 md:left-4 md:right-4 md:top-3 lg:left-24 lg:right-24 lg:top-16':
            !isScrolled,
        })}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="logo">
              <Button href="/" onClick={handleNavigation}>
                <Image
                  src="/gazasoup-logo.webp"
                  alt="Gaza Soup Logo"
                  width={isScrolled ? 70 : 80}
                  height={isScrolled ? 70 : 80}
                  className="transition-all duration-500 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
                />
              </Button>
            </div>

            <div className="hidden lg:flex items-center">
              <nav className="mr-6">
                <ul className="flex space-x-3 xl:space-x-6 text-gray-800 text-base xl:text-lg">
                  {NAV_ITEMS.map((item) => (
                    <li
                      key={item.label}
                      className="hover:text-black text-white font-semibold font-sans transition duration-300 ease-in-out"
                    >
                      <Button href={item.link}>{item.label}</Button>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button
                as="a"
                href={DONATION_URL}
                target="_blank"
                className="bg-white text-black font-semibold font-sans py-2 px-4 rounded hover:text-green-700 transition duration-300 ease-in-out"
              >
                Make a Donation
              </Button>
            </div>

            <div className="lg:hidden">
              <button
                ref={menuButtonRef}
                onClick={toggleMobileMenu}
                className="text-gray-800 focus:outline-none p-2"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence initial={false} mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <IoMdClose className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxHamburgerMenu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                ref={navRef}
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="exit"
                className="lg:hidden overflow-hidden"
              >
                <ul className="flex flex-col space-y-4 text-gray-800 text-lg mt-4 pb-4">
                  {NAV_ITEMS.map((item) => (
                    <motion.li
                      key={item.label}
                      variants={itemVariants}
                      className="hover:text-black text-white font-semibold font-sans transition duration-300 ease-in-out"
                    >
                      <Button href={item.link} onClick={handleNavigation}>
                        {item.label}
                      </Button>
                    </motion.li>
                  ))}
                  <motion.li className="pt-2" variants={itemVariants}>
                    <Button
                      as="a"
                      href={DONATION_URL}
                      target="_blank"
                      className="bg-white text-black font-semibold font-sans py-2 px-4 rounded hover:text-green-700 transition duration-300 ease-in-out"
                    >
                      Make a Donation
                    </Button>
                  </motion.li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className={cn('h-16 sm:h-20 md:h-24 lg:h-32', isScrolled ? 'h-16 sm:h-16 md:h-20 lg:h-24' : '')}></div>
    </header>
  );
}
