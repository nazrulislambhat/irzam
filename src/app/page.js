import { motion } from 'framer-motion';
import Head from 'next/head';
import Hero from './components/Hero';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
