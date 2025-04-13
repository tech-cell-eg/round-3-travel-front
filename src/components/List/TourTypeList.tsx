import { useEffect, useState } from 'react';
import { useGetQuery } from '../../lib/useGetQuery';

//types (interface)
type Tour = {
  id: string;
  name: string;
};

//to get the tour type list
type TourTypeListProps = {
  onTourTypeChange: (selectedTourTypes: string[]) => void;
};

export default function TourTypeList({ onTourTypeChange }: TourTypeListProps) {
  const [active, setActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedTourTypes, setSelectedTourTypes] = useState<string[]>([]);

  //get data from api
  const { data: tours = [], isLoading, isError, error } = useGetQuery(
    'tour-categories',
    '/tour-categories'
  );

  //handle the chechbox change (checked or unchecked)
  const handleCheckboxChange = (id: string) => {
    setSelectedTourTypes((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  //send selected tour types to parent on every change
  useEffect(() => {
    onTourTypeChange(selectedTourTypes);
  }, [selectedTourTypes]);

  //handle see more button click
  const handleSeeMoreClick = () => {
    setVisibleCount((prev) => Math.min(prev + 5, tours.data.length));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <div
        onClick={() => setActive(!active)}
        className="cursor-pointer font-semibold text-mainTextColor pb-4 pt-5"
      >
        <h6>Tour Type</h6>
      </div>

      {active && (
        <div>
          <ul>
            {Array.isArray(tours.data) &&
              tours.data.slice(0, visibleCount).map((tour: Tour) => (
                <li key={tour.id} className="flex items-center pb-1">
                  <input
                    id={tour.id}
                    type="checkbox"
                    className="me-2 w-4 h-4"
                    checked={selectedTourTypes.includes(tour.id)}
                    onChange={() => handleCheckboxChange(tour.id)}
                  />
                  <label htmlFor={tour.id}>{tour.name}</label>
                </li>
              ))}
          </ul>

          {visibleCount < tours.data.length && (
            <div
              className="cursor-pointer text-bgButtonOrange"
              onClick={handleSeeMoreClick}
            >
              See More
            </div>
          )}
        </div>
      )}
    </div>
  );
}
