import { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

// interface for product type
type Product = {
    id: string;
    name: string;
    price: number;
    inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
    image: string;
};

// for carousel items 
export default function Trending() {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeIndex, setActiveIndex] = useState(0); // Active index for the carousel

    const numScroll = 1;

    // responsiveOptions
    const responsiveOptions = [
        { breakpoint: '1400px', numVisible: 8, numScroll },   // for large screens
        { breakpoint: '1199px', numVisible: 5, numScroll },   // for medium screens
        { breakpoint: '767px', numVisible: 3, numScroll },    // for small screens
        { breakpoint: '575px', numVisible: 2, numScroll }     // for extra small screens
    ];

    // dummy data for carousel
    useEffect(() => {
        const mockData: Product[] = [
            { id: '1', name: 'Item 1', price: 10, inventoryStatus: 'INSTOCK', image: 'bamboo-watch.jpg' },
            { id: '2', name: 'Item 2', price: 15, inventoryStatus: 'LOWSTOCK', image: 'black-watch.jpg' },
            { id: '3', name: 'Item 3', price: 20, inventoryStatus: 'OUTOFSTOCK', image: 'blue-band.jpg' },
            { id: '4', name: 'Item 4', price: 25, inventoryStatus: 'INSTOCK', image: 'blue-t-shirt.jpg' },
            { id: '5', name: 'Item 5', price: 30, inventoryStatus: 'LOWSTOCK', image: 'bracelet.jpg' },
            { id: '6', name: 'Item 6', price: 25, inventoryStatus: 'INSTOCK', image: 'blue-t-shirt.jpg' },
            { id: '7', name: 'Item 7', price: 30, inventoryStatus: 'LOWSTOCK', image: 'bracelet.jpg' },
            { id: '8', name: 'Item 8', price: 25, inventoryStatus: 'INSTOCK', image: 'blue-t-shirt.jpg' },
            { id: '9', name: 'Item 9', price: 30, inventoryStatus: 'LOWSTOCK', image: 'bracelet.jpg' },
            { id: '10', name: 'Item 10', price: 30, inventoryStatus: 'LOWSTOCK', image: 'bracelet.jpg' },
            { id: '11', name: 'Item 11', price: 25, inventoryStatus: 'INSTOCK', image: 'blue-t-shirt.jpg' },
            { id: '12', name: 'Item 12', price: 30, inventoryStatus: 'LOWSTOCK', image: 'bracelet.jpg' }
        ];
        setProducts(mockData);
    }, []);

    // for pushing the items in the carousel
    const productTemplate = (product: Product) => (
        <div className="m-2 text-center py-5 px-3 ">
            <Link to={'/'} className='cursor-pointer'>
              <div className='transform transition-transform duration-300 hover:scale-115'>
                <div className="mb-3 ">
                    <img
                        src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
                        alt={product.name}
                        className="w-22 h-22 rounded-full shadow-2"
                    />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    <h6 className="mt-0 mb-3">${product.price}</h6>
                </div>
              </div>
                
            </Link>

        </div>
    );

    return (
        <div className="text-mainTextColor container mx-auto mt-22">
            <div className='flex justify-between pb-6'>
                <h3 className="md:font-bold font-semibold lg:text-3xl md:text-2xl text-xl max-md:text-center">
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
                    value={products}
                    numVisible={8}    
                    numScroll={1}
                    responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate}
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






        
        