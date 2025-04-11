import { useEffect, useState } from 'react';
import { useGetQuery } from '../../lib/useGetQuery';

// types (interface)
type Language = {
  id: string;
  languages: string;
};

// to get the language list
type LanguageListProps = {
  onLanguageChange: (selectedLanguages: string[]) => void;
};

export default function LanguageList({ onLanguageChange }: LanguageListProps) {
  const [active, setActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  // get data from api
  const { data: languages = [], isLoading, isError, error } = useGetQuery(
    'tours',
    '/tours'
  );


  // handle checkbox change (checked or unchecked)
  const handleCheckboxChange = (id: string) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  // send selected languages to parent on every change
  useEffect(() => {
    onLanguageChange(selectedLanguages);
  }, [selectedLanguages]);

  // handle see more button click
  const handleSeeMoreClick = () => {
    setVisibleCount((prev) => Math.min(prev + 5, languages.data.length));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div>
      <div
        onClick={() => setActive(!active)}
        className="cursor-pointer font-semibold text-mainTextColor pb-4 pt-5"
      >
        <h6>Language</h6>
      </div>

      {active && (
        <div>
          <ul>
            {Array.isArray(languages.data) &&
              languages.data.slice(0, visibleCount).map((language: Language) => (
                <li key={language.id} className="flex items-center pb-1">
                  <input
                    id={language.id}
                    type="checkbox"
                    className="me-2 w-4 h-4"
                    checked={selectedLanguages.includes(language.id)}
                    onChange={() => handleCheckboxChange(language.id)}
                  />
                  <label htmlFor={language.id}>{language.languages}</label>
                </li>
              ))}
          </ul>

          {visibleCount < languages.data.length && (
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
