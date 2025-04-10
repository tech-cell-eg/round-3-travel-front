import { useEffect, useState } from "react";
import axios from "axios";

export interface TourType {
  id: number;
  name: string;
  category: string;
}

export default function useTourTypes() {
  const [tourTypes, setTourTypes] = useState<TourType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTourTypes = async () => {
      try {
        const res = await axios.get("/api/tours");
        setTourTypes(res.data || []);
      } catch (err: any) {
        setError("فشل تحميل أنواع الرحلات");
      } finally {
        setLoading(false);
      }
    };

    fetchTourTypes();
  }, []);

  return { tourTypes, loading, error };
}
