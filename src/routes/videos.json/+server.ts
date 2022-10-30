import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { YOUTUBE_KEY } from "$env/static/private";

export const GET: RequestHandler = async () => {
  // why does this doesnt work?
  // const res = await fetch(`https://www.youtube.com/watch?v=MOItjGpiAfo`);
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCiCdFNbDVoVp3HQ0SGNxIAQ&maxResults=10&order=date&key=${YOUTUBE_KEY}`
  );
  const data = await res.json();

  return json(data);
};
