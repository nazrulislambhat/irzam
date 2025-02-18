// components/FeaturedDestinations.tsx
const destinations = [
  { name: 'Bali', image: '/bali.jpg' },
  { name: 'Paris', image: '/paris.jpg' },
  { name: 'Dubai', image: '/dubai.jpg' },
];

export default function FeaturedDestinations() {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-lora text-center mb-6">
        Featured Destinations
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div key={dest.name} className="relative group">
            <img
              src={dest.image}
              alt={dest.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-white text-2xl font-bold">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
