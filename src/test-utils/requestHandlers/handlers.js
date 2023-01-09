import { rest } from "msw";
import { apiResponsePodcasts, episodeListFromApi } from "../mocks/mocks";

const url = process.env.REACT_APP_API_URL;
const urlEpisodes = `https://itunes.apple.com/lookup`;
const corsProxy = `https://cors-anywhere.herokuapp.com/*`;

export const handlers = [
  rest.get(corsProxy, async (req, res, ctx) => {
    if (req.params[0] === url) {
      return res(ctx.status(200), ctx.json(apiResponsePodcasts));
    }

    if (req.params[0] === urlEpisodes) {
      return res(ctx.status(200), ctx.json(episodeListFromApi));
    }
  }),
];
