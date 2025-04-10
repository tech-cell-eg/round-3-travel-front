import { useState } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useGetQuery } from '../../lib/useGetQuery'; 

// interface for destaination type
type Destaination = {
    id: string;
    tours_count: string;
    name:string;
    inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
    image: string;
};

// for carousel items 
export default function Trending() {
    const [activeIndex, setActiveIndex] = useState(0); // Active index for the carousel
    const numScroll = 1;

    // responsiveOptions
    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 8, numScroll },   // for large screens
        { breakpoint: '1199px', numVisible: 4, numScroll },   // for medium screens
        { breakpoint: '767px', numVisible: 3, numScroll },    // for small screens
        { breakpoint: '575px', numVisible: 2, numScroll }     // for extra small screens
    ];

    // استعلام جلب البيانات من الـ API
    const { data: tours = [], isLoading, isError, error } = useGetQuery('destinations', '/destinations'); 

    // التعامل مع حالة تحميل البيانات أو حدوث خطأ
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error?.message}</div>;
    }

    // for pushing the items in the carousel
    const destainationTemplate = (destaination: Destaination) => (
        <div className="m-2 text-center py-5 px-3 ">
            <Link to={'/'} className='cursor-pointer'>
              <div className='transform transition-transform duration-300 hover:scale-115'>
                <div className="mb-3 ">
                    <img
                        src={destaination.image}
                        alt={destaination.name}
                        className="w-22 h-22 rounded-full shadow-2"
                    />
                </div>
                <div className='pt-2'>
                    <h6>{destaination.name}</h6>
                    <p className="mb-1 text-sm">{destaination.tours_count}+ Tours</p>
                </div>
              </div>
            </Link>
        </div>
    );

    return (
        <div className="text-mainTextColor container mx-auto mt-22">
            <div className='flex justify-between pb-6'>
                <h3 className="md:font-bold font-semibold lg:text-3xl md:text-2xl text-lg max-md:text-center">
                    Trending destinations
                </h3>
                <div className="card flex justify-content-center">
                    <Link to={'/'}>
                        <Button label="see all" 
                        className='font-normal cursor-pointer hover:text-bgButtonOrange'
                        unstyled={true} />
                    </Link>
                </div>
            </div>

            <div className="card relative">
                <Carousel
                    value={tours.data} 
                    numVisible={8}
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={destainationTemplate}
                    circular
                    autoplayInterval={3000}
                    showNavigators={false}
                    showIndicators={false}
                    onPageChange={(e) => setActiveIndex(e.page)} // Update active index on page change
                />

                {/* for the dots under Carousel */}
                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: 5 }).map((_, index) => (  // Fixed to always show 5 dots
                        <div
                            key={index}
                            className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                                index === activeIndex ? 'bg-mainTextColor w-4' : 'bg-gray-300 w-2'
                            }`}
                            onClick={() => setActiveIndex(index)} // Allow user to click on dots
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
      
        