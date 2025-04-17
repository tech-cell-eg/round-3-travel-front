import { useEffect, useState, useRef } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useGetQuery } from '../../lib/useGetQuery';
import imageDefault from "../../assets/image (24).png";
type Destination = {
  id: string;
  tours_count: string;
  name: string;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  image: string;
};

export default function Trending() {
  const [activeIndex, setActiveIndex] = useState(0);
  const numScroll = 4;
  const totalPages = 5;
  const maxVisible = 8;     
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  //number of pages in carsouel screen sizies
  const responsiveOptions = [
    { breakpoint: '1400px', numVisible: maxVisible, numScroll },
    { breakpoint: '1199px', numVisible: 5, numScroll },
    { breakpoint: '767px', numVisible: 3, numScroll },
    { breakpoint: '575px', numVisible: 2, numScroll },
  ];

  const { data: tours = [], isLoading, isError, error } = useGetQuery('destinations', '/destinations');

  const data = tours.data || [];
  const desiredLength = totalPages * maxVisible;

  const repeatedData = Array.from({ length: desiredLength }, (_, index) =>
    data[index % data.length]
  );

  //make sure data is not empty
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [totalPages]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  const destinationTemplate = (destination: Destination) => (
    <div className="m-2 text-center py-5 px-3 ">
      <Link to={`/destination/${destination.id}`} className="cursor-pointer">
        <div className="transform transition-transform duration-300 hover:scale-115">
          <div className="mb-3">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-22 h-22 rounded-full shadow-2"
              onError={(e) => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = imageDefault; 
              }}
            />
          </div>
          <div className="pt-2">
            <h6>{destination.name}</h6>
            <p className="mb-1 text-sm">{destination.tours_count}+ Tours</p>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <div className="text-mainTextColor container mx-auto my-22 ">
      <div className="flex justify-between pb-6">
        <h3 className="md:font-bold font-semibold lg:text-3xl md:text-2xl text-lg max-md:text-center">
          Trending destinations
        </h3>
        <div className="card flex justify-content-center">
          <Link to={'/'}>
            <Button
              label="see all"
              className="font-normal cursor-pointer hover:text-bgButtonOrange"
              unstyled={true}
            />
          </Link>
        </div>
      </div>

      <div className="card relative">
        <Carousel
          value={repeatedData}
          numVisible={maxVisible}
          numScroll={numScroll}
          responsiveOptions={responsiveOptions}
          itemTemplate={destinationTemplate}
          circular
          page={activeIndex}
          onPageChange={(e) => setActiveIndex(e.page)}
          showNavigators={false}
          showIndicators={false}
        />

        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <div
              key={index}
              className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-mainTextColor w-4' : 'bg-gray-300 w-2'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
