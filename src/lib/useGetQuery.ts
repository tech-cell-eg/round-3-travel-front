import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import baseApi from './baseApi';

export const useGetQuery = <T = any>(
  key: string,
  endpoint: string,
  options?: Omit<UseQueryOptions<T, Error, T, [string, string]>, 'queryKey' | 'queryFn'>
): UseQueryResult<T, Error> => {
  return useQuery<T, Error, T, [string, string]>({
    queryKey: [key, endpoint],
    queryFn: async ({ queryKey }) => {
      const [_key, _endpoint] = queryKey;
      const res = await baseApi.get(_endpoint);
      return res.data as T;
    },
    staleTime: 1000 * 60 * 60, 
    gcTime: 1000 * 60 * 65, 
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...options,
  });
};