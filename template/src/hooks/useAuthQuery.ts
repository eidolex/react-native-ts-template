import {
  DefinedUseQueryResult,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
// import {useAuthStore} from '../stores/auth';
import useAppQuery from './useAppQuery';

export default function useAuthQuery<
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

export default function useAuthQuery<
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

export default function useAuthQuery<
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
  const token = 'no-auth';

  queryKey.concat(token);

  return useAppQuery<TQueryFnData, TError, TData, TQueryKey>(queryKey, options);
}
