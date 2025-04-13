import { useEffect, useState } from 'react';
import { useGetQuery } from '../../lib/useGetQuery';
import { Language } from './types';


// to get the language list
type LanguageListProps = {
  onLanguageChange: (selectedLanguages: Language[]) => void;
};

export default function LanguageList({ onLanguageChange }: LanguageListProps) {
  const [active, setActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);

  // get data from api
  const { data: languages = [], isLoading, isError, error } = useGetQuery(
    'tours',
    '/tours'
  );

  // handle checkbox change (checked or unchecked)
  const handleCheckboxChange = (language: Language) => {
    setSelectedLanguages((prevSelected) => {
      if (prevSelected.some((item) => item.id === language.id)) {
        return prevSelected.filter((item) => item.id !== language.id); // remove it if already selected
      } else {
        return [...prevSelected, language]; // add the language if not selected
      }
    });
  };

  // send selected languages to parent on every change
  useEffect(() => {
    // تأكد من إرسال selectedLanguages بشكل صحيح
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
                    checked={selectedLanguages.some((item) => item.id === language.id)}
                    onChange={() => handleCheckboxChange(language)}
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
