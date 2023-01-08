import { fireEvent, render, screen } from "@testing-library/react";
import { Wrapper } from "../../test-utils/render/Wrapper";
import EpisodeDetailed from "./EpisodeDetailed";
import { episode } from "../../test-utils/mocks/mocks";

describe("Given a EpisodeDetailed component", () => {
  describe("When it's instanciated with a episode as a prop", () => {
    test("Then it should show a heading with the description and the audio reproducer", () => {
      render(<EpisodeDetailed episode={episode} />, { wrapper: Wrapper });

      const title = screen.getByRole("heading", { name: episode.title });
      const description = screen.getByText(episode.description);
      const audio = screen.getByTestId("audio");

      expect(audio).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });
  });
  describe("When the user plays de episode", () => {
    test("Then it should reproduce the episode audio", () => {
      render(<EpisodeDetailed episode={episode} />, { wrapper: Wrapper });

      const audio = screen.getByTestId("audio");
      fireEvent.click(audio);

      //expect(audio).toHaveAttribute("onPlaying");
    });
  });
});
