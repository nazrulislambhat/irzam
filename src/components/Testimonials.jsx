// components/Testimonials.tsx
const testimonials = [
  { name: 'Alice', text: 'Amazing experience! Highly recommended.' },
  { name: 'John', text: 'Loved every moment of my trip.' },
];

export default function Testimonials() {
  return (
    <section className="bg-blue-50 py-10 px-6">
      <h2 className="text-3xl font-lora text-center mb-6">
        What Our Travelers Say
      </h2>
      <div className="max-w-4xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow mb-4">
            <p className="text-lg italic">“{t.text}”</p>
            <h4 className="mt-2 font-bold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
