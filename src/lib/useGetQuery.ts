
//get data by using useQuery hook (react-query)

import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import baseApi from './baseApi';

export const useGetQuery = <T = any>(
  key: string,
  endpoint: string,
  options?: UseQueryOptions<T, Error>
) => {
  return useQuery<T, Error>({
    queryKey: [key],
    queryFn: async () => {
      const res = await baseApi.get(endpoint);
      return res.data as T;
    },
    ...options,
  });
};
