import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-background text-text">
      <h1 className="text-primary text-h1">Welcome to Irzam Tours & Travels</h1>
      <h2 className="text-secondary text-h2">
        Your trusted partner for seamless travel experiences
      </h2>
      <h3 className="text-accent text-h3">
        Explore our diverse range of services
      </h3>
      <p className="text-body">
        At Irzam Tours & Travels, we offer top-notch services for your every
        travel need.
      </p>
      <button className="bg-button text-white">Book Now</button>
    </div>
  );
}
