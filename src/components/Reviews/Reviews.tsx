import { useState } from "react";
import { Carousel } from "primereact/carousel";
import './Reviews.css';

const testimonials = [
  {
    name: "John Smith",
    role: "Traveler",
    image: "https://i.pravatar.cc/150?img=1",
    quote:
      "I had an amazing experience with this company. The service was top-notch, and the staff was incredibly friendly. I highly recommend them!",
  },
  {
    name: "Jane Doe",
    role: "Explorer",
    image: "https://i.pravatar.cc/150?img=5",
    quote:
      "Fantastic service and unforgettable experience! Definitely using them again.",
  },
  {
    name: "Mike Johnson",
    role: "Adventurer",
    image: "https://i.pravatar.cc/150?img=8",
    quote:
      "Professional and smooth from start to finish. Highly recommended!",
  },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviewTemplate = (review: any) => (
    <div className="text-center py-10  max-w-xl mx-auto">
 <div className="flex justify-center mb-4">
  <img
    src={review.image}
    alt={review.name}
    className="rounded-full w-15 h-15"
  />
  <div className="relative top-[-10px] left-[-60px] bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
    <span className="text-lg leading-none">،،</span>
  </div>
</div>

  
      <p className="text-orange-600 font-semibold mb-2">Excellent Service!</p>
      <p className="text-gray-700 text-sm italic mb-4">"{review.quote}"</p>
      <p className="font-medium text-black">{review.name}</p>
      <p className="text-sm text-gray-500">{review.role}</p>
    </div>
  );
  

  return (<>
    <section className="reviews">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-10">
        Customer Reviews
      </h2>

      <Carousel
        value={testimonials}
        itemTemplate={reviewTemplate}
        numVisible={1}
        numScroll={1}
        showIndicators={false}
        showNavigators={false}
        page={activeIndex}
        onPageChange={(e) => setActiveIndex(e.page)}
        className="max-w-3xl text-black-800 mx-auto"
      />

      {/* Custom Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ${
              index === activeIndex
                ? "w-8 h-3 bg-indigo-900 rounded-full"
                : "w-3 h-3 bg-indigo-900/50 rounded-full"
            }`}
          />
        ))}
      </div>

    </section>
  </>);
}
