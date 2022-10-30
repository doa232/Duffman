import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("/videos.json");

  const videos = await res.json();

  return { videos };
};
