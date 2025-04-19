import { useState } from "react";
import { Carousel } from "primereact/carousel";
import { useGetQuery } from "../../lib/useGetQuery";
import './Reviews.css';
import image from "../../assets/art-img.png";

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const {
    data: reviews = {},
    isLoading,
    isError,
    error,
  } = useGetQuery("testimonials", "/testimonials");

  const reviewsArray = reviews?.data || [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  const reviewTemplate = (review: any) => (
    <div className="text-center px-4 py-6   max-w-xl mx-auto">
      <div className="flex justify-center mb-4 relative">
        <img
          src={image}
          alt={review.name}
          className="rounded-full w-20 h-20 object-cover border-4 border-white shadow-md"
        />
        <div className="absolute top-2 left-[43%] bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md">
          <span className="text-lg leading-none">“</span>
        </div>
      </div>

      <p className="text-orange-600 font-semibold mb-2">{review.rate}</p>
      <p className="text-gray-700 text-sm italic mb-4">"{review.comment}"</p>
      <p className="font-medium text-black">{review.user.name}</p>
    </div>
  );

  return (
    <section className="reviews">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-10">
        Customer Reviews
      </h2>

      <Carousel
        value={reviewsArray}
        itemTemplate={reviewTemplate}
        numVisible={1}
        numScroll={1}
        showIndicators={false}
        showNavigators={false}
        page={activeIndex}
        onPageChange={(e) => setActiveIndex(e.page)}
        className="max-w-3xl text-black-800 mx-auto"
      />

      <div className="flex justify-center mt-6 space-x-3">
        {reviewsArray.map((_: any, index: number) => (
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
  );
}
