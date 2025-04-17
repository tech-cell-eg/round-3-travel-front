import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import { useGetQuery } from '../../lib/useGetQuery';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import imageDefault from "../../assets/image (25).png";

export default function Popular() {
  
  type Tour = {
    id: string;
    name: string;
    slug: string;   
    rating: string;
    numOfPeop: number;
    price: number;
    title: string;
    destination: {
      name: string;
      image: string;
    };
  };

  //get the data from api using custom hook useGetQuery
  const { data: tours = [], isLoading, isError, error } = useGetQuery('popular-tours', '/tours?popular=true');

  //handel loading & error states
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <>
      <div className="text-mainTextColor container mx-auto mt-32">
        <div className='flex justify-between pb-6'>
          <h3 className="md:font-bold font-semibold lg:text-3xl md:text-2xl text-lg max-md:text-center">
            Find Popular Tours
          </h3>
          <div className="card flex justify-content-center">
            <Link to={'list'}>
              <Button label="see all" className='font-normal cursor-pointer hover:text-bgButtonOrange' unstyled={true} />
            </Link>
          </div>
        </div>
        
        {tours != null && tours != '' ? (
          <div className='flex flex-wrap justify-center w-full'>
            {Array.isArray(tours.data) && tours.data.slice(0, 4).map((tour: Tour) => (
              <Link 
                to={`/details/${tour.slug}`} 
                key={tour.id} 
                className='w-full md:w-1/2 lg:w-1/4 p-2 cursor-pointer transform transition-transform duration-300 hover:scale-105'
              >
                <div className='p-2 border border-borderGrayInputs rounded-lg text-sm'>
                  <img className='w-full rounded-lg' 
                  src={tour.destination.image} 
                  alt={tour.name} 
                  onError={(e) => {
                    e.currentTarget.onerror = null; 
                    e.currentTarget.src = imageDefault; 
                  }}/>
                  <div className='px-2'>
                    <p className='text-textGrayColor pt-4'>{tour.destination.name}</p>
                    <h6 className='pt-2 pb-3 font-semibold'>{tour.title}</h6>
                    <p className='text-center pb-4'>4.8 (234)</p>
                    <div className='h-[1px] bg-borderGrayInputs mx-auto'></div>
                    <div className='flex w-full justify-between py-4'>
                      <p>{tour.id} days</p>
                      <p>From $123</p>   
                    </div>
                  </div>
                </div>
              </Link>
            ))}      
          </div>
        ) : <AiOutlineLoading3Quarters />}
      </div>
    </>
  );
}