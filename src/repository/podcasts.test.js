import { podcast } from "../test-utils/mocks/mocks";
import { getPodcasts } from "./podcasts";

describe("Given a getPodcasts function", () => {
  describe("When it's invoke with a correct request", () => {
    test("Then it should return a list of podcasts", async () => {
      const expextedPodcast = await getPodcasts();

      expect(expextedPodcast).toEqual([podcast]);
    });
  });
});
