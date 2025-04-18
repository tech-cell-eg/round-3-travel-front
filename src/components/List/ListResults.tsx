
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useGetQuery } from '../../lib/useGetQuery';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Language, Tour } from './types';
import imageDefault from "../../assets/image (26).png";

type ListResultsProps = {
  searchTerm: string | null;
  destinationId: string | null;
  // destinationName: string | null;
  startDate: string | null;
  endDate: string | null;
  tourTypeId: string | null;
  // tourTypeName: string | null;
  minPrice: number | null;
  maxPrice: number | null;
  selectedTourTypes: string[];
  selectedLanguage: Language[];
  selectedRating: string[];
};

const ListResults: React.FC<ListResultsProps> = ({
  searchTerm,
  destinationId,
  // destinationName,
  startDate,
  endDate,
  tourTypeId,
  // tourTypeName,
  minPrice,
  maxPrice,
  selectedTourTypes,
  selectedLanguage,
  selectedRating,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalItems = 100;
  const visiblePageCount = 5;

  const queryParams = new URLSearchParams();
//add query params to the url
  if (searchTerm) queryParams.append('search', searchTerm);
  if (destinationId) queryParams.append('destination_id', destinationId);
  if (startDate) queryParams.append('start_date', startDate);
  if (endDate) queryParams.append('end_date', endDate);
  if (tourTypeId) queryParams.append('tour_type_id', tourTypeId);
  if (minPrice !== null) queryParams.append('min_price', minPrice.toString());
  if (maxPrice !== null) queryParams.append('max_price', maxPrice.toString());

  //add filters to url
  selectedRating.forEach(rating => queryParams.append('rating', rating));
  selectedTourTypes.forEach(type => queryParams.append('tour_category_ids[]', type));
  selectedLanguage.forEach(lang => queryParams.append('languages', lang.languages));

  const queryString = queryParams.toString();
//add page to url
  const { data: response, isLoading, isError, error } = 
    useGetQuery(
      `tours_page_${currentPage}_${queryString.replace(/[^a-zA-Z0-9]/g, '_')}`,
      `/tours?page=${currentPage}&limit=${itemsPerPage}&${queryString}`
    );

  const tours: Tour[] = Array.isArray(response?.data) ? response.data : [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
//get total items from response
  const getVisiblePages = () => {
    let startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2));
    let endPage = startPage + visiblePageCount - 1;
    
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - visiblePageCount + 1);
    }
    
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  if (isLoading) return (
    <div className='flex justify-center items-center pt-32'>
      <AiOutlineLoading3Quarters className="animate-spin text-2xl" />
    </div>
  );

  if (isError) return (
    <div className="text-red-500 text-center py-10">
      Error: {(error as Error)?.message || 'Failed to load data'}
    </div>
  );

  if (!tours.length) {
    return (
      <div className="card">
        <div className="text-center py-10">
          <p>No tours found matching {searchTerm ? `"${searchTerm}"` : "your search"}</p>
        </div>
      </div>
    );
  }

  const itemTemplate = (tour: Tour) => (
    <div key={tour.id} className="text-mainTextColor border border-borderGrayInputs p-4 mb-2 rounded">
      <div className="flex max-md:flex-wrap w-full gap-3">
        <div className="w-full md:w-1/4">
          <img 
            src={tour.image} 
            className="w-full min-h-[180px]" 
            alt={tour.title} 
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = imageDefault; 
            }}
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="ps-3 text-textGrayColor text-sm">{tour.destination?.name}</p>
          <h6 className="py-4">{tour.title}</h6>
          <p className="text-center text-sm">
            {tour.rating} (${tour.initial_price})
          </p>
          <p className="text-sm py-4">{tour.description}</p>
          <div className="flex justify-between text-bgButtonOrange">
            <p className="">Best Price Guarantee</p>
            <p className="">Free Cancellation</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 md:border-l max-md:border-t border-borderGrayInputs text-center">
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
        <p>{totalItems} results</p>
        <p>Sort by: Featured</p>
      </div>

      <div className="space-y-4">
        {tours.map(itemTemplate)}
      </div>

      <div className="flex justify-center items-center mt-6 gap-1">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${currentPage === 1 ? 
            'bg-gray-200 text-gray-500 cursor-not-allowed' : 
            'bg-white border border-gray-300 hover:bg-gray-100'}`}
        >
          &laquo;
        </button>
        
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded ${currentPage === 1 ? 
            'bg-gray-200 text-gray-500 cursor-not-allowed' : 
            'bg-white border border-gray-300 hover:bg-gray-100'}`}
        >
          &lsaquo;
        </button>

        {getVisiblePages().map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 mx-1 rounded ${
              currentPage === page
                ? 'bg-bgButtonOrange rounded-full py-2 px-4 text-white font-medium'
                : 'bg-white  border-gray-300 hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${currentPage === totalPages ? 
            'bg-gray-200 text-gray-500 cursor-not-allowed' : 
            'bg-white border border-gray-300 hover:bg-gray-100'}`}
        >
          &rsaquo;
        </button>
        
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          className={`px-3 py-1 rounded ${currentPage === totalPages ? 
            'bg-gray-200 text-gray-500 cursor-not-allowed' : 
            'bg-white border border-gray-300 hover:bg-gray-100'}`}
        >
          &raquo;
        </button>
      </div>

      <div className="text-center text-sm text-gray-500 mt-3">
        Showing {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} tours
      </div>
    </div>
  );
};

export default ListResults;