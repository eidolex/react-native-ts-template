import {
  DefinedUseQueryResult,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

export default function useAppQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'initialData'
  > & {initialData: TQueryFnData | (() => TQueryFnData)},
): DefinedUseQueryResult<TData, TError>;

export default function useAppQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey'
  >,
): UseQueryResult<TData, TError>;

export default function useAppQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
>(
  queryKey: TQueryKey,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'initialData'
  > & {initialData?: () => undefined},
): UseQueryResult<TData, TError> {
  const customOptions: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey'
  > = {
    useErrorBoundary: _error => {
      return false;
    },
    ...options,
  };

  return useQuery<TQueryFnData, TError, TData, TQueryKey>(
    queryKey,
    customOptions,
  );
}
