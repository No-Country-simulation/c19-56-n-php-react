import useSWR, { SWRConfiguration } from "swr";

const fetcher = (url: string, token?: string) => {
  const headers = new Headers();
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  return fetch(url, { headers }).then((res) => res.json());
};

export const useFetch = (
  url: string,
  config: SWRConfiguration = {},
  token?: string
) => {
  const { data, error, mutate } = useSWR(
    process.env.NEXT_PUBLIC_URL_BASE + url,
    (url) => fetcher(url, token),
    config
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
