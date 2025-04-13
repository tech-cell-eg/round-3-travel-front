
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import baseApi from './baseApi';

export const useGetQuery = <T = any>(
  key: string,
  endpoint: string,
  options?: UseQueryOptions<T, Error>
) => {
  return useQuery<T, Error>({
    queryKey: [key, endpoint], 
    queryFn: async () => {
      const res = await baseApi.get(endpoint);
      return res.data as T;
    },
    ...options,
  });
};

