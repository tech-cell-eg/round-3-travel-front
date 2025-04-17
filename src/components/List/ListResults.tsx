import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { useGetQuery } from '../../lib/useGetQuery';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Language, Tour } from './types';
import imageDefault from "../../assets/image (26).png";

type ListResultsProps = {
  destination: string | null;
  startDate: string | null;
  endDate: string | null;
  tourType: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  selectedTourTypes: string[];
  selectedLanguage: Language[];
  selectedRating: string[];
};

//define the ListResults component
const ListResults: React.FC<ListResultsProps> = ({
  destination,
  startDate,
  endDate,
  tourType,
  minPrice,
  maxPrice,
  selectedTourTypes,
  selectedLanguage,
  selectedRating,
}) => {
  const queryParams = new URLSearchParams();

  //append filters to query params
  if (destination) queryParams.append('destination', destination);
  if (startDate) queryParams.append('start_date', startDate);
  if (endDate) queryParams.append('end_date', endDate);
  if (tourType) queryParams.append('tour_type', tourType);
  if (minPrice !== null) queryParams.append('min_price', minPrice.toString());
  if (maxPrice !== null) queryParams.append('max_price', maxPrice.toString());

  //append selected filters to query params
  selectedRating.forEach(rating => queryParams.append('rating', rating));
  selectedTourTypes.forEach(type => queryParams.append('tour_category_ids[]', type));
  selectedLanguage.forEach(lang => queryParams.append('languages', lang.languages)); // ✅ التعديل هنا

  const queryString = queryParams.toString();
  console.log('API Request:', `/tours?${queryString}`);

  const { data: response = {}, isLoading, isError, error } = 
    useGetQuery('tours', `/tours?${queryString}`);

  const tours: Tour[] = Array.isArray(response?.data) ? response.data : [];

  const dataToRender = useMemo(() => {
    return tours;
  }, [tours]);

  
  if (isLoading) return (
    <div className='flex justify-center items-center pt-32'>
      <AiOutlineLoading3Quarters className="animate-spin" />
    </div>
  );

  if (isError) return <div>Error: {error?.message}</div>;

  if (!dataToRender.length) {
    return (
      <div className="card">
        <div className="text-center py-10">
          <p>No tours found matching your search</p>
        </div>
      </div>
    );
  }

  const itemTemplate = (tour: Tour) => (
    <div key={tour.id} className="text-mainTextColor border border-borderGrayInputs p-4 mb-2 rounded">
      <div className="flex max-md:flex-wrap w-full gap-3">
        <div className="w-full md:w-1/4  ">
          <img src={tour.image} 
          className="w-full min-h-[180px]" 
          alt={tour.title} 
          onError={(e) => {
            e.currentTarget.onerror = null; 
            e.currentTarget.src = imageDefault; 
          }}/>
        </div>
        <div className="w-full md:w-1/2">
          <p className="ps-3 text-textGrayColor text-sm">{tour.destination?.name}</p>
          <h6 className="py-4">{tour.title}</h6>
          <p className="text-center text-sm">
            {tour.rating} (${tour.initial_price})
          </p>
          <p className="text-sm py-4">{tour.description}</p>
          <div className="flex justify-between text-bgButtonOrange">
            <p className="cursor-pointer">Best Price Guarantee</p>
            <p className="cursor-pointer">Free Cancellation</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 border-l border-borderGrayInputs text-center">
          <p className="pt-5 pb-16 text-sm">
            {tour.duration} Days {tour.duration - 1} Nights
          </p>
          <p className="line-through text-textGrayList">$1200</p>
          <p className="pb-5">From ${tour.initial_price}</p>
          <Link to={`/details/${tour.slug}`}> 
            <Button
              className="cursor-pointer border-bgButtonOrange py-1 md:py-2 px-1 md:px-3
               border rounded-lg text-bgButtonOrange ms-3"
              label="View Details"
              unstyled
              outlined
            />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="card">
      <div className="flex justify-between text-mainTextColor mb-4">
        <p>{tours.length} results</p>
        <p>Sort by: Featured</p>
      </div>
      <DataView
        value={dataToRender}
        itemTemplate={itemTemplate}
        paginator
        rows={5}
      />
    </div>
  );
};

export default ListResults;
