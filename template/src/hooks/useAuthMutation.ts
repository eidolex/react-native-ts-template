import {MutationKey, UseMutationOptions} from '@tanstack/react-query';
// import {useAuthStore} from '~/stores/auth';
import useAppMutation from './useAppMutation';

export default function useAuthMutation<
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
  const token = 'no-auth';

  return useAppMutation<TData, TError, TVariables, TContext>(
    [...mutationKey, token],
    options,
  );
}
