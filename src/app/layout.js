import { Roboto, Lora, Poppins, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '../components/ui/Navbar';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const lora = Lora({
  subsets: ['latin'],
});

// Update metadata for SEO purposes
export const metadata = {
  title: 'Irzam Tours & Travels',
  description:
    'Your trusted partner for seamless travel experiences. Book your next trip with Irzam Tours & Travels and make memories that last a lifetime.',
  author: 'Irzam Tours & Travels',
  keywords:
    'travel, tours, transportation, vacation packages, domestic, international, visa, flight booking, car rentals, Irzam Tours & Travels',
  openGraph: {
    title: 'Irzam Tours & Travels',
    description:
      'Book customized tour packages, transportation services, and more with Irzam Tours & Travels.',
    url: 'https://irzamtourandtravel.com', // Replace with your website URL
    siteName: 'Irzam Tours & Travels',
    images: [
      {
        url: 'https://irzamtourandtravel.com/og-image.jpg', // Replace with a relevant image URL
        width: 800,
        height: 600,
        alt: 'Irzam Tours & Travels Logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image', // This will use a large image for Twitter cards
    title: 'Irzam Tours & Travels',
    description:
      'Explore customized travel packages, tours, and more with Irzam Tours & Travels.',
    image: 'https://irzamtourandtravel.com/twitter-image.jpg', // Replace with a relevant image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2C3E50" />
      </head>
      <body className={`${roboto.className} boxed antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
