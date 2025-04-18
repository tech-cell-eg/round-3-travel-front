import { useState, useEffect } from 'react';

// types (interface)
interface RatingListProps {
  onRatingChange: (ratings: string[]) => void;
  initialSelectedRatings?: string[];
}

export default function RatingList({ onRatingChange }: RatingListProps) {
  const [active, setActive] = useState(false);
  const [selectedRatings, setSelectedRatings] = useState<string[]>([]);

  // data for rating list
  const ratings = [
    '1 and above', '2 and above', '3 and above', '4 and above', '5 and above'  
  ];

  // handle the checkbox change (checked or unchecked)
  const handleCheckboxChange = (rating: string) => {
    setSelectedRatings((prevSelected) =>
      prevSelected.includes(rating)
        ? prevSelected.filter((item) => item !== rating)
        : [...prevSelected, rating]
    );
  };

  // send selected ratings to parent on every change
  useEffect(() => {
    onRatingChange(selectedRatings);
  }, [selectedRatings]);


  return (
    <div>
      <div
        onClick={() => setActive(!active)}
        className="cursor-pointer font-semibold text-mainTextColor pb-4 pt-5"
      >
        <h6>Rating</h6>
      </div>

      {active && (
        <div>
          <ul>
            {ratings.map((rating, index) => (
              <li key={index} className="flex items-center pb-1">
                <input
                  id={`rating-${index}`}
                  type="checkbox"
                  className="me-2 w-4 h-4"
                  checked={selectedRatings.includes(rating)}
                  onChange={() => handleCheckboxChange(rating)}
                />
                <label htmlFor={`rating-${index}`}>{rating}</label>
              </li>
            ))}
          </ul>

          
        </div>
      )}
    </div>
  );
}
