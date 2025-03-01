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
    <div className="nav flex items-center  justify-between py-2 px-8">
      <Image src={Logo} alt="Travel Logo" width={60} height={30} />
      <nav>
        <ul className="flex space-x-6">
          {MENU_ITEMS.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="text-primary text-xs font-semibold hover:border-b-2 border-transparent hover:border-primary"
              >
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
