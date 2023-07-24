import axios, {AxiosError} from 'axios';

const backendClient = axios.create({
  baseURL: '',
});

backendClient.interceptors.request.use(config => {
  //   const token = store.get(authTokenAtom);
  const token = '';

  if (token && !('Authorization' in config.headers)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

backendClient.interceptors.response.use(
  response => response,
  error => {
    if (error instanceof AxiosError && error.response?.status === 401) {
      const e = new Error('AuthenticationError');
      throw e;
    }
    return Promise.reject(error);
  },
);

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  status: number;
  data: T;
};

export type PaginatedApiResponse<T> = ApiResponse<T> & {
  links: {
    first: string;
    last: string;
    next: string | null;
    prev: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
};

export default backendClient;
