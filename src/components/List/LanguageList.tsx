import { useEffect, useState } from 'react';
import { Language } from './types';

//language list static data
const STATIC_LANGUAGES: Language[] = [
  { id: '1', languages: 'English' },
  { id: '2', languages: 'Arabic' },
  { id: '3', languages: 'French' },
  { id: '4', languages: 'German' },
  { id: '5', languages: 'Spanish' },
  { id: '6', languages: 'Italian' },
  { id: '7', languages: 'Russian' },
  { id: '8', languages: 'Chinese' },
];


type LanguageListProps = {
  onLanguageChange: (selectedLanguages: Language[]) => void;
};

export default function LanguageList({ onLanguageChange }: LanguageListProps) {
  const [active, setActive] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedLanguages, setSelectedLanguages] = useState<Language[]>([]);

  //set default selected languages
  const handleCheckboxChange = (language: Language) => {
    setSelectedLanguages((prevSelected) => {
      const newSelection = prevSelected.some(item => item.id === language.id)
        ? prevSelected.filter(item => item.id !== language.id)
        : [...prevSelected, language];
      return newSelection;
    });
  };

  //select all languages
  useEffect(() => {
    onLanguageChange(selectedLanguages);
  }, [selectedLanguages, onLanguageChange]);

  //default selected languages
  const handleSeeMoreClick = () => {
    setVisibleCount(prev => Math.min(prev + 5, STATIC_LANGUAGES.length));
  };

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
            {STATIC_LANGUAGES.slice(0, visibleCount).map((language) => (
              <li key={language.id} className="flex items-center pb-1">
                <input
                  type="checkbox"
                  id={`lang-${language.id}`}
                  checked={selectedLanguages.some(item => item.id === language.id)}
                  onChange={() => handleCheckboxChange(language)}
                  className="me-2 w-4 h-4"
                />
                <label htmlFor={`lang-${language.id}`}>{language.languages}</label>
              </li>
            ))}
          </ul>

          {visibleCount < STATIC_LANGUAGES.length && (
            <button
              onClick={handleSeeMoreClick}
              className="cursor-pointer text-bgButtonOrange mt-2"
            >
              See More
            </button>
          )}
        </div>
      )}
    </div>
  );
}
