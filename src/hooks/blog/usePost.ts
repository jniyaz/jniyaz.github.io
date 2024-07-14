import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { api } from "@/config/api";

/** @TODO - to be moved to right place or load it from env. file **/
const { WP_BLOG_BASE_URL } = api;

export const usePost = (id: String) => {
  const { data, error, isLoading } = useSWR(
    `${WP_BLOG_BASE_URL}/posts/${id}`,
    fetcher
  );

  return {
    post: data,
    isLoading,
    error,
  };
};
