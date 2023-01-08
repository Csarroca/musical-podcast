import { rest } from "msw";
import { apiResponsePodcasts, episodeListFromApi } from "../mocks/mocks";

const url = process.env.REACT_APP_API_URL;
const urlEpisodes = `https://itunes.apple.com/lookup`;

export const handlers = [
  rest.get(url, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(apiResponsePodcasts));
  }),

  rest.get(urlEpisodes, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(episodeListFromApi));
  }),
];
