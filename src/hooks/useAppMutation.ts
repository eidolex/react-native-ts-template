import {
  MutationKey,
  UseMutationOptions,
  useMutation,
} from '@tanstack/react-query';

export default function useAppMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(
  mutationKey: MutationKey,
  options?: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationKey'
  >,
) {
  const customOptions: Omit<
    UseMutationOptions<TData, TError, TVariables, TContext>,
    'mutationKey'
  > = {
    useErrorBoundary: _error => {
      return false;
    },
    ...options,
  };

  return useMutation<TData, TError, TVariables, TContext>(
    mutationKey,
    customOptions,
  );
}
