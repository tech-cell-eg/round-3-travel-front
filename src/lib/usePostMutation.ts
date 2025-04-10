
//post data by using useMutation hook (react-query)

import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import baseApi from './baseApi';

export const usePostMutation = <TData = any, TVariables = any>(
  endpoint: string,
  options?: UseMutationOptions<TData, Error, TVariables>
) => {
  return useMutation<TData, Error, TVariables>({
    mutationFn: async (payload: TVariables) => {
      const res = await baseApi.post(endpoint, payload);
      return res.data as TData;
    },
    ...options,
  });
};
