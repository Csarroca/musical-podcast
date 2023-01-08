import { rest } from "msw";
import { apiResponsePodcasts, podcast } from "../mocks/mocks";

const url = process.env.REACT_APP_API_URL;
const urlEpisodes = `https://itunes.apple.com/lookup?id=${podcast.id}&entity=podcastEpisode&limit=1000`;

export const handlers = [
  rest.get(url, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiResponsePodcasts));
  }),

  rest.get(urlEpisodes, async (req, res, ctx) => {
    const podcastId = req.url.searchParams.get("id");
    return res(ctx.status(200), ctx.json(podcastId));
  }),
];
