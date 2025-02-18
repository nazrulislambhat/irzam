'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../../../public/irzam-transparent-logo.png';
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'Destinations', href: '/destinations' },
  { name: 'Tours', href: '/tours' },
  { name: 'Packages', href: '/packages' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'T&C', href: '/terms' },
];

export default function ResponsiveMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`menu-container   ${isOpen ? 'menu-open' : ''}`}>
      <nav className="boxed py-2 px-4 md:px-0 top-0 left-0 w-full z-20">
        <div className="boxed mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={400}
                  height={400}
                  className="w-[60px] h-[60px] md:w-[80px] md:h-[80px]"
                />
              </Link>
            </div>

            {!isMobile && (
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 mr-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`${poppins.className} text-primary border-b-2 border-transparent hover:border-b-2 hover:border-primary text-sm uppercase font-medium hover:scale-95  `}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden z-50 inline-flex items-center justify-center"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-8 text-secondary w-8" />
                ) : (
                  <Menu className="block h-8 text-primary w-8" />
                )}
              </button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && isMobile && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="md:hidden fixed top-0 right-0 bottom-0 w-screen bg-primary z-20"
            >
              <div className="space-y-4 mt-[40%] ml-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-secondary border-b-2 border-transparent hover:scale-90 text-xl uppercase hover:border-secondary hover:border-b-2 w-fit"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
