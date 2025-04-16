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