// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="relative bg-red bg-center h-[500px] flex items-center justify-center text-white text-center px-6"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="bg-black/50 p-10 rounded-lg">
        <h1 className="text-4xl font-bold font-lora">
          Discover Your Next Adventure
        </h1>
        <p className="mt-2 text-lg">
          Find the best destinations, travel tips, and guides.
        </p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
          Explore Now
        </button>
      </div>
    </section>
  );
}
