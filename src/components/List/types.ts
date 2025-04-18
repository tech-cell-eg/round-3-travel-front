// src/components/types.ts
export interface Language {
  id: string;
  languages: string;
}

export interface Tour {
  id: string;
  title: string;
  description: string;
  image: string;
  rating: string;
  initial_price: number;
  duration: number;
  slug: string;
  destination: {
    name: string;
  };
}


import { Dispatch, SetStateAction } from 'react';

export interface Language {
  id: string;
  name?: string;
  languages: string;
}

export interface TourTypeListProps {
  onTourTypeChange: Dispatch<SetStateAction<string[]>>;
  initialSelectedTypes?: string[];
}

export interface FilterPriceProps {
  onPriceChange: (min: number | null, max: number | null) => void;
  initialMinPrice?: number | null;
  initialMaxPrice?: number | null;
}

export interface LanguageListProps {
  onLanguageChange: Dispatch<SetStateAction<Language[]>>;
  initialSelectedLanguages?: Language[];
}

export interface RatingListProps {
  onRatingChange: Dispatch<SetStateAction<string[]>>;
  initialSelectedRatings?: string[];
}