import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/irzam-transparent-logo.png';
const MENU_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];
function Navbar() {
  return (
    <div className="nav flex items-center justify-between p-4 shadow-md">
      <Image src={Logo} alt="Travel Logo" width={120} height={50} />
      <nav>
        <ul className="flex space-x-6">
          {MENU_ITEMS.map((item) => (
            <li key={item.path}>
              <Link href={item.path} className="text-dark hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
