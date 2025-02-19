// app/page.tsx
import Hero from '../components/Hero';
import FeaturedDestinations from '../components/FeaturedDestinations';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedDestinations />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
