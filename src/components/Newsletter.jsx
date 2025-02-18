// components/Newsletter.tsx
export default function Newsletter() {
  return (
    <section className="bg-yellow-500 text-black py-10 px-6 text-center">
      <h2 className="text-2xl font-lora">Join Our Newsletter</h2>
      <p className="mt-2">Get the latest travel tips and deals.</p>
      <div className="mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 rounded-l-md w-64 border"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r-md">
          Subscribe
        </button>
      </div>
    </section>
  );
}
