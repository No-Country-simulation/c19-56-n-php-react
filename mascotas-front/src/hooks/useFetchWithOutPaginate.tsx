import useSWR, { SWRConfiguration } from "swr";

const fetcher = (url: string, params: Record<string, string>, token?: string) => {
  const queryString = new URLSearchParams(params).toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  const headers = new Headers();
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  return fetch(fullUrl, { headers }).then((res) => res.json());
};

export const useFetchWithOutPaginate = (url: string, params: Record<string, string> = {}, config: SWRConfiguration = {}, token?: string) => {
  const { data, error, mutate } = useSWR(
    process.env.NEXT_PUBLIC_URL_BASE + url,
    (url) => fetcher(url, params, token),
    config
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate
  };
};