"use client"

import useSwr from "swr";
import { fetcher } from "@/lib/fetcher";
import { api } from "@/config/api";

/** @TODO - to be moved to right place or load it from env. file **/
const { WP_BLOG_BASE_URL } = api;

export const usePosts = () => {
  const { data, error, isLoading } = useSwr(
    `${WP_BLOG_BASE_URL}/posts`,
    fetcher
  );

  return {
    posts: data,
    error,
    isLoading,
  };
};
