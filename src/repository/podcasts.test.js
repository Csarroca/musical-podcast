import { episodeList, podcast } from "../test-utils/mocks/mocks";
import { getEpisodeList, getPodcasts } from "./podcasts";

describe("Given a getPodcasts function", () => {
  describe("When it's invoke with a correct request", () => {
    test("Then it should return a list of podcasts", async () => {
      const expextedPodcast = await getPodcasts();

      expect(expextedPodcast).toEqual([podcast]);
    });
  });
});

describe("Given a getEpisodeList function", () => {
  describe("When it's invoke with a correct request", () => {
    test("Then it should return a list of episodes", async () => {
      const expextedEpisodes = await getEpisodeList();

      expect(expextedEpisodes).toEqual(episodeList.splice(1));
    });
  });
});
