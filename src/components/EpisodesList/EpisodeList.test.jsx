import { render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/render/Wrapper";
import EpisodeList from "./EpisodesList";
import { episodeList } from "../../test-utils/mocks/mocks";
import userEvent from "@testing-library/user-event";

describe("Given a EpisodeList component", () => {
  describe("When it's instanciated with a episodeList as a prop", () => {
    test("Then it should show a table with the list of episodes and the number of episodes", () => {
      render(<EpisodeList episodeList={episodeList} />, { wrapper: Wrapper });

      const list = screen.getByRole("table");
      const numberOfEpisodes = screen.getByText("Episodes: 3");
      const title = screen.getByText(episodeList[0].title);
      expect(list).toBeInTheDocument();

      expect(title.textContent).toBe(episodeList[0].title);
      expect(numberOfEpisodes.textContent).toBe("Episodes: 3");
    });
  });

  describe("And a episode title it's click", () => {
    test("Then it should redirect to the details of the episode", () => {
      render(<EpisodeList episodeList={episodeList} />, { wrapper: Wrapper });

      const titleLink = screen.getByRole("link", {
        name: episodeList[1].title,
      });

      userEvent.click(titleLink);
    });
  });
});
